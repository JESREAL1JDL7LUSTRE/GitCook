import React, { useState } from "react";
import { motion } from "framer-motion";
import { CreditCard, ChevronRight, ShoppingBag } from "lucide-react";
import OrderDelButton from "../Buttons/DeleteButtons/OrderDelButton";
import PayUnpaidOrderForm from "../PopUps/PayUnpaidOrderForm";
import { useNavigate } from "react-router-dom";

interface OrderedItem {
  id: number;
  dish_name: string;
  quantity: number;
  subtotal: number;
  dishId: number;
  image?: string;
}

interface Payment {
  id: number;
  order: number;
  payment_method: string | null;
  transaction_id: string | null;
  amount: number;
}

interface OrderProps {
  order: {
    id: number;
    customer: number;
    status: string;
    total_price: number;
    created_at: string;
    ordered_items: OrderedItem[];
  };
  payments: Payment[];
}

const OrderHistoryCard: React.FC<OrderProps> = ({ order, payments }) => {
  const orderPayments = payments.filter((payment) => payment.order === order.id);
  const [isPayOpen, setIsPayOpen] = useState(payments.length === 0);
  const navigate = useNavigate();

  const dishDetails = order.ordered_items.map((item) => ({
    id: item.dishId,
    name: item.dish_name,
    price: item.subtotal / item.quantity,
    quantity: item.quantity,
  }));

  const formattedDate = new Date(order.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleCardClick = () => {
    navigate(`/order/${order.id}`, { state: { order, payments } });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={handleCardClick}
      className="w-full mx-auto overflow-hidden rounded-3xl shadow-sm border border-gray-100 bg-white transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] cursor-pointer"
    >
      <div className="p-5 md:p-6 border-b border-gray-50 flex justify-between items-center gap-4">
        <div className="flex items-center space-x-3">
          <div className="bg-[#a0c878]/15 p-3 rounded-2xl hidden sm:block">
            <ShoppingBag className="w-6 h-6 text-[#a0c878]" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg md:text-xl text-gray-900 leading-tight">Order #{order.id}</h3>
            <span className="text-xs md:text-sm text-gray-500 font-outfit">{formattedDate}</span>
          </div>
        </div>
        <div className={`px-3 md:px-4 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-wide uppercase flex-shrink-0 ${getStatusColor(order.status)}`}>
          {order.status}
        </div>
      </div>

      <div className="p-5 md:p-6">
        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 mb-6">

          <div className="flex flex-col items-center space-y-1">
            <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider text-center">Payment</span>
            <div className="flex items-center justify-center text-gray-800 font-medium text-sm md:text-base">
              <CreditCard className="w-3 h-3 md:w-4 md:h-4 mr-1.5 text-[#a0c878]" />
              {orderPayments[0]?.payment_method ?? "Not Paid"}
            </div>
          </div>

          <div className="flex flex-col items-center space-y-1">
            <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider text-center">Items</span>
            <div className="flex items-center justify-center text-gray-800 font-medium text-sm md:text-base">
              <ShoppingBag className="w-3 h-3 md:w-4 md:h-4 mr-1.5 text-[#a0c878]" />
              {order.ordered_items.length} items
            </div>
          </div>

          <div className="flex flex-col items-center space-y-1">
            <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider text-center">Total</span>
            <div className="flex items-center justify-center text-lg md:text-xl font-outfit font-extrabold text-center">
              ${order.total_price.toFixed(2)}
            </div>
          </div>
        </div>

        <div 
          className="flex flex-row items-center justify-between pt-5 md:pt-6 border-t border-gray-50"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex gap-2 md:gap-3 flex-wrap">
            {orderPayments?.length === 0 && (
              <button
                className="flex items-center px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm font-bold bg-[#a0c878] text-white rounded-full hover:bg-[#8fb86a] shadow-md shadow-[#a0c878]/20 transition-all"
                onClick={() => setIsPayOpen(true)}
              >
                Pay Now
              </button>
            )}

            <button
              onClick={() => navigate(`/order/${order.id}`, { state: { order, payments } })}
              className="flex items-center px-4 md:px-5 py-2 md:py-2.5 text-xs md:text-sm font-semibold text-gray-700 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"
            >
              View Details
              <ChevronRight className="ml-1 md:ml-1.5 w-3 h-3 md:w-4 md:h-4" />
            </button>
          </div>

          <div className="flex-shrink-0">
            <OrderDelButton OrderId={order.id} />
          </div>

          <PayUnpaidOrderForm
            isOpen={isPayOpen}
            onClose={() => setIsPayOpen(false)}
            order={order}
            dishDetails={dishDetails}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default OrderHistoryCard;
