import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Card, CardHeader, CardFooter, CardContent } from "@/components/ui/card";
import WishlistButton from "../Buttons/WishlistButton";
import PaymentButton from "../Buttons/PaymentButton";
import PlanToOrderButton from "../Buttons/CartButton";
import StarRatingShow from "../Reviews/StarRatingShow";
import useFetchReviews from "@/utils/Hooks/Tanstack/Review/useQueryReview";

interface ProductDetailsProps {
  dish: {
    id: number;
    name: string;
    description: string;
    category_name: string[];
    price: number;
    image?: string;
    recipes?: string;
  };
  onBack: () => void;
}

const ProductDetailsCard: React.FC<ProductDetailsProps> = ({ dish, onBack }) => {
  const { data: reviews = [] } = useFetchReviews(dish?.id || 0);

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
      : 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-4xl mx-auto px-4 md:px-8 pb-12 pt-6"
    >
      <button onClick={onBack} className="flex items-center text-food-dark hover:text-food-emerald font-outfit font-semibold transition-colors mb-6 group">
        <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
        Back to Products
      </button>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border-none bg-white/80 backdrop-blur-xl p-6 md:p-8 rounded-3xl">
          <div className="relative">
            <img
              src={dish.image || "/placeholder-image.jpg"}
              alt={dish.name}
              className="object-cover w-full aspect-square rounded-3xl shadow-xl transition-transform hover:scale-[1.02] duration-500"
            />
          </div>

          <div className="flex flex-col justify-between h-full">
            <CardHeader className="p-0 space-y-4">
              <div className="flex justify-between items-start gap-4">
                <h1 className="font-heading font-bold text-2xl md:text-3xl text-food-dark text-start leading-tight">{dish.name}</h1>
                <div className="pt-1">
                  <WishlistButton dishId={dish.id} />
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <StarRatingShow rating={averageRating} />
                <span className="text-xs md:text-sm font-outfit text-gray-500 font-medium">({reviews.length} reviews)</span>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {dish.category_name?.map((category, index) => (
                  <span
                    key={index}
                    className="bg-food-emerald/15 text-food-emerald px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-xs font-outfit font-bold rounded-full tracking-wide uppercase"
                  >
                    {category}
                  </span>
                )) || (
                  <span className="bg-gray-100 text-gray-500 px-4 py-1.5 text-xs font-outfit font-bold rounded-full tracking-wide uppercase">
                    Uncategorized
                  </span>
                )}
              </div>

              <div className="py-4">
                <p className="font-outfit font-bold text-3xl md:text-4xl text-food-emerald text-start">${dish.price.toFixed(2)}</p>
              </div>
              
              <p className="font-sans text-gray-600 text-sm md:text-base leading-relaxed text-start pb-6 border-b border-gray-100">
                {dish.description || "No description available for this dish. It is definitely delicious though!"}
              </p>
            </CardHeader>

            <CardFooter className="flex flex-col sm:flex-row gap-4 p-0 pt-3 mt-4">
              <div className="w-full sm:flex-1">
                <PlanToOrderButton dish={{ ...dish, image: dish.image || "/placeholder.png" }} />
              </div>
              <div className="w-full sm:flex-1">
                <PaymentButton dishDetails={[{ id: dish.id, name: dish.name, price: dish.price, quantity: 1 }]} />
              </div>
            </CardFooter>
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="mt-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border-none rounded-3xl bg-white overflow-hidden">
          <CardHeader className="bg-food-orange/5 pb-4">
            <h2 className="font-heading font-bold text-lg md:text-xl text-food-dark text-start">Preparation & Recipe</h2>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="font-sans text-gray-700 leading-relaxed text-sm md:text-base whitespace-pre-wrap text-start">{dish.recipes || "No recipe details available. Our chefs keep this one a secret!"}</p>
          </CardContent>
        </Card>
      </motion.div>

      <div className="mt-12 mb-6 text-start">
        <h2 className="font-heading font-bold text-xl md:text-2xl text-food-dark">Customer Reviews</h2>
      </div>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <Card key={review.id} className="p-6 shadow-md hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 border-none rounded-3xl bg-white flex flex-col justify-between">
              <div className="text-start space-y-3">
                <StarRatingShow rating={review.rating} />
                <p className="font-sans text-gray-700 italic text-sm md:text-base leading-relaxed">
                  "{review.review ?? "Great food!"}"
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-start">
                <p className="font-outfit font-semibold text-food-dark text-sm">{review.customer_email}</p>
              </div>
            </Card>
          ))
        ) : (
          <Card className="p-8 shadow-md border-none rounded-3xl bg-white text-center md:col-span-2 lg:col-span-3">
            <p className="font-outfit text-gray-500 text-base">No reviews yet. Be the first to try this delicious dish!</p>
          </Card>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProductDetailsCard;
