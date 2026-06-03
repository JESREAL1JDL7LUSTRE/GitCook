import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import useMutationCart from "@/utils/Hooks/Tanstack/Wishlist/useMutationCart";
import useQueryCart from "@/utils/Hooks/Tanstack/Wishlist/useQueryCart";

interface WishlistButtonProps {
  dishId: number;
}

const WishlistButton: React.FC<WishlistButtonProps> = ({ dishId }) => {
  const { data: cartData } = useQueryCart();
  const { useMutationCartAdd, useMutationCartDel } = useMutationCart();
  const { mutate: addToWishlist, isPending: adding, error: addError } = useMutationCartAdd();
  const { mutate: removeFromWishlist, isPending: removing, error: removeError } = useMutationCartDel();

  const error = addError || removeError;

  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    if (cartData) {
      setIsWishlisted(cartData.some((item) => item.dish_data.id === dishId));
    }
  }, [cartData, dishId]);

  const handleWishlist = async () => {
    if (adding || removing) return;

    if (isWishlisted) {
      const cartItem = cartData?.find(item => item.dish_data.id === dishId);
      if (cartItem) {
        removeFromWishlist(cartItem.id, { onSuccess: () => setIsWishlisted(false) });
      }
    } else {
      addToWishlist({ dishId }, { onSuccess: () => setIsWishlisted(true) });
    }
  };

  const loading = adding || removing;

  return (
    <div>
      <Button
        className={`rounded-full shadow-md p-3 transition-colors duration-300 
          ${isWishlisted ? "bg-white border border-gray-300" : "bg-black"}`}
        onClick={handleWishlist}
        disabled={loading}
      >
        <Heart fill={isWishlisted ? "red" : "none"} color={isWishlisted ? "red" : "white"} />
      </Button>
      {error && <p className="text-red-500">{(error as Error).message}</p>}
    </div>
  );
};

export default WishlistButton;
