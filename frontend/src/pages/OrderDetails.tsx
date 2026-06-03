import { useLocation, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, Clock, CreditCard, ChevronLeft } from "lucide-react";
import AddReview from "@/components/Reviews/AddReview";
import useQueryOrder from "@/utils/Hooks/Tanstack/Order/useQueryOrder";
import useQueryPayment from "@/utils/Hooks/Tanstack/Payment/useQueryPayment";
import PayUnpaidOrderForm from "@/components/PopUps/PayUnpaidOrderForm";
import { useState } from "react";

const OrderDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { data: orders, isLoading: ordersLoading } = useQueryOrder();
  const { useFetchPayment } = useQueryPayment();
  const { data: payments, isLoading: paymentsLoading } = useFetchPayment();

  // Try to get order and payment from location state, or fallback to fetching
  const order = location.state?.order || orders?.find((o: any) => o.id === Number(id));
  const orderPayments = location.state?.payments?.filter((p: any) => p.order === order?.id) || 
                        payments?.filter((p: any) => p.order === order?.id) || [];

  const [isPayOpen, setIsPayOpen] = useState(false);

  if (ordersLoading || paymentsLoading) return <div className="text-center py-20">Loading order...</div>;
  if (!order) return <div className="text-center py-20 text-gray-500">Order not found</div>;

  const formattedDate = new Date(order.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered': return 'bg-green-100 text-green-700';
      case 'processing': return 'bg-blue-100 text-blue-700';
      case 'cancelled': return 'bg-red-100 text-red-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const dishDetails = order.ordered_items.map((item: any) => ({
    id: item.dishId,
    name: item.dish_name,
    price: item.subtotal / item.quantity,
    quantity: item.quantity,
  }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gradient-to-b from-white to-[#f5f5f7] min-h-[calc(100vh-80px)] p-5 md:p-10"
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-500 hover:text-gray-900 font-medium transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-1" /> Back to Orders
        </button>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="p-8 border-b border-gray-50 flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-heading font-extrabold text-gray-900">Order #{order.id}</h1>
              <div className="flex items-center text-gray-500 mt-2">
                <Clock className="w-4 h-4 mr-2" />
                <span>{formattedDate}</span>
              </div>
            </div>
            <div className={`px-5 py-2 rounded-full text-sm font-bold tracking-wide uppercase self-start md:self-auto ${getStatusColor(order.status)}`}>
              {order.status}
            </div>
          </div>

          {/* Payment Info */}
          <div className="p-8 bg-[#f9fafb] border-b border-gray-100">
            <h2 className="text-xl font-heading font-bold text-gray-800 mb-6 flex items-center">
              <CreditCard className="w-5 h-5 mr-2 text-[#a0c878]" /> Payment Details
            </h2>
            
            {orderPayments.length > 0 ? (
              <div className="space-y-4">
                {orderPayments.map((payment: any) => (
                  <div key={payment.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="block text-sm font-medium text-gray-500">Payment Method</span>
                        <span className="font-bold text-gray-900">{payment.payment_method || "N/A"}</span>
                      </div>
                      <div>
                        <span className="block text-sm font-medium text-gray-500">Transaction ID</span>
                        <span className="font-bold text-gray-900 truncate block">{payment.transaction_id || "N/A"}</span>
                      </div>
                      <div className="col-span-2 pt-3 border-t border-gray-50 flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-500">Amount Paid</span>
                        <span className="text-xl font-outfit font-extrabold ">${payment.amount.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-yellow-50 p-5 rounded-2xl border border-yellow-100 flex justify-between items-center">
                <div>
                  <span className="block font-bold text-yellow-800">Payment Pending</span>
                  <span className="text-sm text-yellow-600">Please complete your payment to process this order.</span>
                </div>
                <button
                  className="px-6 py-2.5 text-sm font-bold bg-[#a0c878] text-white rounded-full hover:bg-[#8fb86a] shadow-md shadow-[#a0c878]/20 transition-all"
                  onClick={() => setIsPayOpen(true)}
                >
                  Pay Now
                </button>
              </div>
            )}
          </div>

          {/* Ordered Items */}
          <div className="p-8">
            <h2 className="text-xl font-heading font-bold text-gray-800 mb-6 flex items-center">
              <ShoppingBag className="w-5 h-5 mr-2 text-[#a0c878]" /> Ordered Items
            </h2>
            <div className="space-y-4">
              {order.ordered_items.map((item: any) => (
                <div key={item.id} className="flex items-center gap-5 p-4 rounded-2xl border border-gray-100 hover:border-[#a0c878]/30 transition-colors">
                  <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                    <img src={item.image} alt={item.dish_name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-heading font-bold text-lg text-gray-900 truncate pr-4">{item.dish_name}</h3>
                      <div className="font-outfit font-bold text-xl ">${item.subtotal.toFixed(2)}</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">Qty: {item.quantity}</span>
                      <AddReview dishId={item.dishId} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
              <span className="text-gray-500 font-medium">Order Total</span>
              <span className="text-3xl font-outfit font-extrabold">${order.total_price.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      <PayUnpaidOrderForm
        isOpen={isPayOpen}
        onClose={() => setIsPayOpen(false)}
        order={order}
        dishDetails={dishDetails}
      />
    </motion.div>
  );
};

export default OrderDetails;
