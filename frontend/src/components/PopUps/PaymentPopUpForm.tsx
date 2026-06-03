import { useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { useAddToOrderWhenPayingStore } from "@/lib/AddToOrderWhenPayingStore";
import { usePlanToOrderStore } from "./Context/PlanToOrderContext";
import useQueryPayment from "@/utils/Hooks/Tanstack/Payment/useQueryPayment";
import useMutationPayment from "@/utils/Hooks/Tanstack/Payment/useMutationPayment";
import useOrderMutations from "@/utils/Hooks/Tanstack/Order/useMutationOrder";
import { SuccessModal } from "./SuccessModal";

interface PaymentPopUpFormProps {
  isOpen: boolean;
  onClose: () => void;
}

function PaymentPopUpForm({ isOpen, onClose }: PaymentPopUpFormProps) {
  const {useFetchPaymentMethods} = useQueryPayment();
  const useMutationPaymentPost = useMutationPayment();
  const { createOrderMutation } = useOrderMutations();
  const { mutateAsync: createOrder } = createOrderMutation; // ✅ Create order API
  const { dishDetails, clearDishDetails } = useAddToOrderWhenPayingStore(); // ✅ Get stored dishes
  const [order, setOrder] = useState<{ id: number; total_price: number } | null>(null);
  const [paymentMethod, setPaymentMethod] = useState("Card");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const clearPlanToOrder = usePlanToOrderStore((state) => state.clearPlanToOrder);
  const { mutate: PostPayment, isPending: postLoading, error: postError } = useMutationPaymentPost();
  const { data: paymentMethods, isLoading: methodsLoading, error: fetchError } = useFetchPaymentMethods();

  const handlePayment = async () => {
    let finalOrder = order;

    if (!finalOrder) {
      try {
        // ✅ Ensure order creation includes quantity
        const result = await createOrder(
          dishDetails.map((dish) => ({
            id: dish.id,
            name: dish.name,
            price: dish.price,
            quantity: dish.quantity ?? 1, // ✅ Ensure quantity is included
          }))
        );
        if (!result) return null;
        finalOrder = result as { id: number; total_price: number };
        if (!finalOrder) throw new Error("Failed to create order.");
        setOrder(finalOrder);
      } catch (err) {
        console.error("Order Error:", err);
        alert("Failed to create order. Please try again.");
        return;
      }
    }

    try {
      // ✅ Now process the payment using the created order
      await PostPayment({
        order: finalOrder.id,
        payment_method: paymentMethod,
        amount: finalOrder.total_price,
      });
      setShowSuccessModal(true);
    } catch (err) {
      console.error("Payment Error:", err);
      alert("Payment failed. Please try again.");
    }
  };

  if (showSuccessModal) {
    return (
      <SuccessModal
        isOpen={true}
        onClose={() => {
          clearDishDetails();
          clearPlanToOrder();
          setShowSuccessModal(false);
          onClose();
          window.location.reload();
        }}
        title="Payment Successful!"
        description="Thank you for your purchase. Your order has been successfully processed."
      />
    );
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="p-6 md:p-8 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border-none bg-white max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="font-heading font-bold text-2xl text-food-dark text-start">Confirm Payment</AlertDialogTitle>
          <AlertDialogDescription className="font-sans text-gray-500 text-start">
            Complete your payment for the order
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="mt-4">
          <h3 className="font-heading font-bold text-md text-food-dark mb-3 text-start">Your Order:</h3>
          <div className="max-h-60 overflow-y-auto pr-2 space-y-3">
            {dishDetails.map((dish, index) => (
              <div key={index} className="p-4 border border-gray-100 rounded-2xl bg-gray-50/50 flex justify-between items-center transition-colors hover:bg-gray-50">
                <div className="text-start">
                  <p className="font-outfit font-bold text-food-dark">
                    {dish.name}
                  </p>
                  <p className="font-sans text-sm text-gray-500 mt-1">Qty: {dish.quantity || 1}</p>
                </div>
                <p className="font-outfit font-bold text-food-emerald text-lg">
                  ${(dish.price * (dish.quantity || 1)).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <label className="block font-outfit font-semibold text-food-dark mb-2 text-start">Select Payment Method:</label>
          {methodsLoading ? (
            <p className="text-gray-500 font-sans text-sm text-start">Loading payment methods...</p>
          ) : fetchError ? (
            <p className="text-red-500 font-sans text-sm text-start">{fetchError.message}</p>
          ) : (
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              disabled={postLoading}
              className="w-full p-4 border border-gray-200 rounded-2xl bg-white font-outfit text-gray-700 focus:outline-none focus:ring-2 focus:ring-food-emerald/50 focus:border-food-emerald transition-all appearance-none cursor-pointer"
              style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%236b7280\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.25em' }}
            >
              {paymentMethods?.map((method) => (
                <option key={method.value} value={method.value}>
                  {method.label}
                </option>
              ))}
            </select>
          )}
        </div>

        {postError && <p className="text-red-500 mt-3">{postError.message}</p>}

        <AlertDialogFooter className="mt-8 gap-3 sm:gap-0">
          <AlertDialogCancel onClick={onClose} className="font-outfit font-semibold px-6 py-5 rounded-full hover:bg-gray-100 transition-colors text-gray-600 border-none mt-0">
            Cancel
          </AlertDialogCancel>
          <Button
            onClick={handlePayment}
            disabled={postLoading || !paymentMethod}
            className="bg-food-emerald hover:bg-food-emerald/90 text-white font-outfit font-bold px-8 py-5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-base"
          >
            {postLoading ? "Processing..." : "Pay Now"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default PaymentPopUpForm;
