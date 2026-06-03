import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import WishlistButton from "../Buttons/WishlistButton";
import PaymentButton from "../Buttons/PaymentButton";
import CartButton from "../Buttons/CartButton";
import StarRatingShow from "../Reviews/StarRatingShow";
import useFetchReviews from "@/utils/Hooks/Tanstack/Review/useQueryReview";

interface ProductCardProps {
  dish: {
    id: number;
    name: string;
    category_name: string;
    price: number;
    image?: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ dish }) => {
  const { data: reviews } = useFetchReviews(dish.id);

  const averageRating =
    (reviews ?? []).length > 0
      ? reviews!.reduce((sum, review) => sum + review.rating, 0) / reviews!.length
      : 0;

  return (
<Card className="group w-full h-full flex flex-col shadow-sm border border-gray-100 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 bg-white">
      <CardHeader className="relative p-0">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={dish.image || "/placeholder.png"}
            alt={dish.name}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div 
            className="absolute top-3 right-3 transition-transform hover:scale-110"
            onClick={(e) => e.stopPropagation()} // ✅ Prevents click from propagating
          >
            <WishlistButton dishId={dish.id} />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-5 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2 text-start">
          <h1 className="font-heading font-bold text-md md:text-lg text-food-dark line-clamp-2 flex-1 truncate">{dish.name}</h1>
          <p className="font-outfit font-semibold text-food-emerald whitespace-nowrap mt-1">${dish.price.toFixed(2)}</p>
        </div>
        <div className="flex-row sm:flex items-center gap-3">
          <StarRatingShow rating={averageRating} />
          <span className="text-xs text-gray-500 truncate">
            ({reviews?.length ?? 0} {(reviews?.length ?? 0) === 1 ? 'review' : 'reviews'})
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0 mt-auto flex flex-row gap-2">
        <div onClick={(e) => e.stopPropagation()} className="flex-1">
          <CartButton dish={{ ...dish, image: dish.image || "/placeholder.png" }} />
        </div>
        <div onClick={(e) => e.stopPropagation()} className="flex-1">
          <PaymentButton dishDetails={[{ id: dish.id, name: dish.name, price: dish.price, quantity: 1 }]} />
        </div>
      </CardFooter>

    </Card>  );
};

export default ProductCard;