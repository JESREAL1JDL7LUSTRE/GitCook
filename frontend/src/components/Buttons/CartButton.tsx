import { usePlanToOrderStore } from "../PopUps/Context/PlanToOrderContext";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";

interface PlanToOrderButtonProps {
  dish: { id: number; name: string; price: number;image: string };
}

function CartButton({ dish }: PlanToOrderButtonProps) {
  const addToPlanToOrder = usePlanToOrderStore((state) => state.addToPlanToOrder);

  return (
    <div className="w-full">
      <Button 
        className="bg-[#a0c878] hover:bg-[#8fb86a] w-full flex items-center justify-center gap-2 px-2" 
        onClick={() => addToPlanToOrder({ ...dish, quantity: 1 })}
      >
        <ShoppingCart className="h-4 w-4 sm:hidden" />
        <span className="hidden sm:inline">Add to Cart</span>
      </Button>
    </div>
  );
}

export default CartButton;