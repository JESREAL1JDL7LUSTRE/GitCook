import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PaymentButton from '../Buttons/PaymentButton';
import { motion, AnimatePresence } from 'framer-motion';
import useQueryDishes from '@/utils/Hooks/Tanstack/Dish/useQueryDish';

function Featured() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { data, isLoading: loading, error } = useQueryDishes(1, "");
  const navigate = useNavigate();
  const featuredDishes = data?.dishes?.filter((dish) => dish.featured) || [];

  useEffect(() => {
    if (featuredDishes.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredDishes.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [featuredDishes.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredDishes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredDishes.length) % featuredDishes.length);
  };

  if (loading) {
    return (
      <div className="min-h-[70vh] bg-food-bg flex items-center justify-center">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-12 h-12 border-4 border-food-orange border-t-transparent rounded-full"
        />
      </div>
    );
  }
  
  if (error || featuredDishes.length === 0) {
    return null; // Don't show hero if error or empty
  }

  const currentDish = featuredDishes[currentSlide];

  return (
    <div className="bg-food-bg overflow-hidden relative min-h-[85vh] flex items-center">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-food-orange/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-food-emerald/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Typography & CTA */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-food-orange font-outfit font-semibold tracking-wider uppercase text-sm mb-4"
            >
              Chef's Special
            </motion.span>
            
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-food-dark leading-tight mb-6">
              Feast at Your <br/>
              <span className="text-[#a0c878] relative inline-block">
                Fingertips!
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-food-orange/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-8 font-sans leading-relaxed">
              Experience the finest cuisine delivered hot and fresh. Skip the line and indulge in our premium selections curated just for you.
            </p>

            {/* Current Dish Highlight Text */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentDish.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="mb-8"
              >
                <h3 className="text-2xl font-outfit font-bold text-food-dark mb-2">{currentDish.name}</h3>
                <p className="text-gray-500 text-sm md:text-base line-clamp-2 max-w-md mx-auto lg:mx-0">{currentDish.description}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => navigate(`/product/${currentDish.id}`)}
                className="w-full sm:w-auto px-8 py-4 bg-[#a0c878] hover:bg-[#8eb865] text-white rounded-full font-semibold font-outfit transition-all hover:shadow-[0_8px_30px_rgba(160,200,120,0.4)] hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                Order Now - ${currentDish.price}
              </button>
              
              <div className="flex items-center gap-3">
                 <button 
                  onClick={prevSlide}
                  className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-200 hover:border-food-orange hover:text-food-orange text-gray-500 transition-all hover:bg-white"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-200 hover:border-food-orange hover:text-food-orange text-gray-500 transition-all hover:bg-white"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            {/* Dots */}
            <div className="flex justify-center lg:justify-start gap-2 mt-8">
              {featuredDishes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`transition-all duration-300 rounded-full h-2 ${
                    currentSlide === idx ? 'w-8 bg-[#a0c878]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

          </motion.div>

          {/* Right Side: Featured Image */}
          <div className="relative order-1 lg:order-2 flex justify-center items-center h-[350px] sm:h-[450px] lg:h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 10 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="absolute w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px]"
              >
                {/* Image Container with subtle shadow and circle behind */}
                <div className="relative aspect-square">
                  <div className="absolute inset-0 bg-food-orange/20 rounded-full blur-3xl transform scale-75 animate-pulse" />
                  
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-full rounded-full overflow-hidden border-8 border-white/50 shadow-2xl relative z-10"
                  >
                    <img 
                      src={currentDish.image} 
                      alt={currentDish.name}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                    />
                  </motion.div>

                  {/* Floating Price Tag */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, type: "spring" }}
                    className="absolute -right-4 sm:-right-8 top-10 sm:top-20 bg-white px-6 py-4 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] z-20 border border-gray-100"
                  >
                    <p className="text-gray-500 text-xs font-semibold uppercase mb-1">Only At</p>
                    <p className="text-3xl font-heading font-bold text-food-emerald">${currentDish.price}</p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}
export default Featured;