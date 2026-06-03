import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Clock, Award, Truck, Users, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const About: React.FC = () => {
  const navigate = useNavigate();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const teamMembers = [
    {
      name: "Jesreal D. Lustre",
      role: "Backend and Frontend Logic Programmer",
      image: "/AuthorsPic/Jesreal.png",
      description: "Jesreal specializes in building and optimizing both backend and frontend logic, ensuring seamless system performance.",
      link:"https://github.com/JESREAL1JDL7LUSTRE"
    },
    {
      name: "Bea Clarise Bacaling",
      role: "Frontend Logic and Frontend Design Programmer",
      image: "/AuthorsPic/Bea.png",
      description: "Bea focuses on frontend logic and design, crafting user-friendly interfaces with smooth interactions.",
      link:"https://github.com/baeeyuh"
    },
    {
      name: "Angel Janette Taglucop",
      role: "UI/UX Designer",
      image: "/AuthorsPic/Angel.png",
      description: "Angel leads the frontend design, ensuring a visually appealing and responsive user experience.",
      link:"https://github.com/angel-jane"
    }
];
  const values = [
    { icon: <ChefHat className="h-8 w-8 text-green-600" />, title: "Quality Ingredients", description: "We source only the freshest, highest quality ingredients for all our dishes." },
    { icon: <Clock className="h-8 w-8 text-green-600" />, title: "Fast Delivery", description: "Our efficient delivery system ensures your food arrives hot and fresh." },
    { icon: <Award className="h-8 w-8 text-green-600" />, title: "Culinary Excellence", description: "Our chefs are trained in various cuisines to bring you authentic flavors." },
    { icon: <Truck className="h-8 w-8 text-green-600" />, title: "Sustainable Packaging", description: "We use eco-friendly packaging to reduce our environmental impact." },
    { icon: <Users className="h-8 w-8 text-green-600" />, title: "Community Focus", description: "We support local farmers and suppliers to strengthen our community." },
    { icon: <Heart className="h-8 w-8 text-green-600" />, title: "Passion for Food", description: "Our love for food drives us to create memorable dining experiences." }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <motion.div 
        className="relative bg-gray-900 text-white py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Food background" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Our Story
          </motion.h1>
          <motion.p 
            className="mt-6 text-xl max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From a small kitchen to your fingertips - how GitCook is revolutionizing the way you experience food.
          </motion.p>
        </div>
      </motion.div>

      {/* Our Journey */}
      <motion.section 
        className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-food-orange font-outfit font-semibold tracking-wider uppercase text-sm mb-3 block"
          >
            The Beginning
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-food-dark">
            Our <span className="text-food-emerald">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-food-orange/30 mx-auto mt-6 rounded-full" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded in 2025, GitCook began with a simple mission: to connect food lovers with exceptional culinary experiences without the hassle of waiting in lines or making reservations.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              What started as a small team of food enthusiasts has grown into a network of over 200 partner restaurants, delivering thousands of meals daily across the country.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Our platform has evolved from a basic ordering system to an intelligent food discovery service that learns your preferences and suggests dishes you'll love.
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="GitCook journey" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Our Values */}
      <motion.section 
        className="py-16 bg-gray-100"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-food-orange font-outfit font-semibold tracking-wider uppercase text-sm mb-3 block"
            >
              What Drives Us
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-food-dark">
              Our <span className="text-food-emerald">Values</span>
            </h2>
            <div className="w-24 h-1 bg-food-orange/30 mx-auto mt-6 rounded-full" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-md bg-green-100 mx-auto">
                  {value.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">{value.title}</h3>
                <p className="mt-2 text-gray-600 text-center">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Meet Our Team */}
      <motion.section 
        className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-food-orange font-outfit font-semibold tracking-wider uppercase text-sm mb-3 block"
          >
            The People Behind
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-food-dark">
            Meet Our <span className="text-food-emerald">Team</span>
          </h2>
          <div className="w-24 h-1 bg-food-orange/30 mx-auto mt-6 rounded-full" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
              onClick={() => window.open(member.link, "_blank")}
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-[#a0c878] font-medium">{member.role}</p>
                <p className="mt-3 text-gray-600">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        className="py-16 bg-gray-900 text-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-food-orange font-outfit font-semibold tracking-wider uppercase text-sm mb-3 block"
            >
              Testimonials
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
              What Our <span className="text-food-emerald">Customers Say</span>
            </h2>
            <div className="w-24 h-1 bg-food-orange/30 mx-auto mt-6 rounded-full" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              variants={itemVariants}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 italic">"GitCook has completely changed how I enjoy food. The quality is amazing, and the delivery is always on time!"</p>
              <p className="mt-4 font-semibold">- Emma S.</p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 italic">"As a busy professional, GitCook saves me so much time. The variety of cuisines available is impressive!"</p>
              <p className="mt-4 font-semibold">- James L.</p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 italic">"The app is so intuitive, and the food recommendations are spot on. It's like having a personal chef!"</p>
              <p className="mt-4 font-semibold">- Sophia R.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Join Us CTA */}
      <motion.section 
        className="py-16 bg-[#a0c878] text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl font-bold"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Experience GitCook?
          </motion.h2>
          <motion.p 
            className="mt-4 text-xl max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join thousands of food lovers who have discovered a better way to enjoy their favorite meals.
          </motion.p>
          <motion.div 
            className="mt-8"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button onClick={() => navigate("/")} className="bg-white text-green-600 px-8 py-3 rounded-md text-lg font-medium shadow-md hover:bg-gray-100 transition-colors duration-300">
              Order Now
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">GitCook</h3>
              <p className="text-gray-400">Feast at Your Fingertips!</p>
              <p className="text-gray-400 mt-2">Dine Without the Line.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors duration-300">Menu</a></li>
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400">123 Food Street</p>
              <p className="text-gray-400">Cuisine City, CC 12345</p>
              <p className="text-gray-400 mt-2">info@GitCook.com</p>
              <p className="text-gray-400">(123) 456-7890</p>
            </div>
            
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">&copy; 2025 GitCook. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;