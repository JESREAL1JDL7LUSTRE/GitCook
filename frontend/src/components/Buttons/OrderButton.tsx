import React, { useState } from "react";
import { Button } from "../ui/button";
import PaymentPopUpForm from "../PopUps/PaymentPopUpForm";
import { usePlanToOrderStore } from "../PopUps/Context/PlanToOrderContext"; // ✅ Bulk order store
import { useAddToOrderWhenPayingStore } from "@/lib/AddToOrderWhenPayingStore";

interface OrderButtonProps {
  selectedItemIds?: number[];
}

const OrderButton: React.FC<OrderButtonProps> = ({ selectedItemIds }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setDishDetails } = useAddToOrderWhenPayingStore(); // ✅ Zustand store for checkout
  const planToOrderList = usePlanToOrderStore((state) => state.planToOrderList); // ✅ Get selected items from cart

  const handleProceedToPayment = () => {
    let dishesToOrder = planToOrderList;
    if (selectedItemIds) {
      dishesToOrder = planToOrderList.filter(dish => selectedItemIds.includes(dish.id));
    }
    
    if (dishesToOrder.length === 0) return;

    // ✅ Ensure quantity is passed correctly
    const selectedDishes = dishesToOrder.map((dish) => ({
      id: dish.id,
      name: dish.name,
      price: dish.price,
      quantity: dish.quantity ?? 1, // ✅ Ensure quantity is set
    }));

    setDishDetails(selectedDishes);
    setIsOpen(true);
  };

  const isDisabled = selectedItemIds ? selectedItemIds.length === 0 : planToOrderList.length === 0;

  return (
    <div className="w-full">
      <Button onClick={handleProceedToPayment} disabled={isDisabled}>
        Buy Now
      </Button>

      {isOpen && <PaymentPopUpForm isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default OrderButton;
