import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "@/components/Cards/ProductCard";
import { Loader2 } from "lucide-react";
import { CartItem } from "@/types/Types";
import useQueryCart from "@/utils/Hooks/Tanstack/Wishlist/useQueryCart";

const Wishlist = () => {
  const { data: cart, isPending: loading, error } = useQueryCart();
  const navigate = useNavigate();

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center min-h-screen"
      >
        <Loader2 className="h-12 w-12 animate-spin text-[#a0c878]" />
        <p className="ml-2 text-[#a0c878] font-medium">Loading wishlist...</p>
      </motion.div>
    );
  }
  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center min-h-screen"
      >
        <div className="bg-white p-8 rounded-lg shadow-md border border-red-200">
          <p className="text-red-600 font-medium">{error.message}</p>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 px-4 py-2 bg-[#a0c878] hover:bg-[#8fb86a] text-white rounded-md"
          >
            Go Back
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-4 min-h-screen"
    >
      <div className="text-center mb-12 mt-6">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-food-orange font-outfit font-semibold tracking-wider uppercase text-sm mb-3 block"
        >
          Your Favorites
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-heading font-bold text-food-dark"
        >
          My <span className="text-food-emerald">Wishlist</span>
        </motion.h2>
        <div className="w-24 h-1 bg-food-orange/30 mx-auto mt-6 rounded-full" />
      </div>

      <AnimatePresence>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {cart && cart.length > 0 ? (
            cart.map((item: CartItem) => (
              <motion.div
                key={item.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="cursor-pointer"
                onClick={() => navigate(`/product/${item.dish_data.id}`)}
              >
                <ProductCard
                  dish={item.dish_data}
                />
              </motion.div>
            ))
          ) : (
            <p className="text-gray-500">No items in the wishlist</p>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Wishlist;
