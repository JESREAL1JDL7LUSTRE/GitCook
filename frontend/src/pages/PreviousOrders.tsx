import { motion, AnimatePresence } from "framer-motion";
import OrderHistoryCard from "@/components/Cards/OrderHistoryCard";
import { Loader2 } from "lucide-react";
import useQueryPayment from "@/utils/Hooks/Tanstack/Payment/useQueryPayment";
import useQueryOrder from "@/utils/Hooks/Tanstack/Order/useQueryOrder";

const PreviousOrders = () => {
  const { useFetchPayment } = useQueryPayment();
  const { data: orders, isLoading: ordersLoading, error: ordersError } = useQueryOrder();
  const { data: payments, isLoading: paymentsLoading, error: paymentsError } = useFetchPayment();

  if (ordersLoading || paymentsLoading) { return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center min-h-screen"
    >
        <Loader2 className="h-12 w-12 animate-spin text-[#a0c878]" />
        <p className="ml-2 text-[#a0c878] font-medium">Loading order history...</p>
    </motion.div>
);
}
  
  if (ordersError) return <p>{ordersError.message}</p>;
  if (paymentsError) return <p>{paymentsError.message}</p>;
  const sortedOrders = [...(orders || [])].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

  const groupedOrders = sortedOrders.reduce((acc, order) => {
    const dateObj = new Date(order.created_at);
    // Use an easy to read format like "June 3, 2026"
    const dateStr = dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    if (!acc[dateStr]) acc[dateStr] = [];
    acc[dateStr].push(order);
    return acc;
  }, {} as Record<string, typeof sortedOrders>);

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
          Your Journey
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-heading font-bold text-food-dark"
        >
          Order <span className="text-food-emerald">History</span>
        </motion.h2>
        <div className="w-24 h-1 bg-food-orange/30 mx-auto mt-6 rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto">
        {sortedOrders.length > 0 ? (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.2 }}
            >
              {Object.entries(groupedOrders).map(([date, dateOrders]) => (
                <div key={date} className="mb-10">
                  <h3 className="text-lg font-heading font-bold text-gray-500 mb-4 px-2 tracking-wide uppercase">{date}</h3>
                  <div className="grid gap-6">
                    {dateOrders.map((order) => (
                      <motion.div
                        key={order.id}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <OrderHistoryCard order={order} payments={payments || []} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
            <p className="text-gray-500 font-outfit text-lg">No orders available yet.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PreviousOrders;
