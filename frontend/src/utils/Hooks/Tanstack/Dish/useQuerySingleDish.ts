import { useQuery } from "@tanstack/react-query";
import { getDishById } from "@/api/DishApi";
import { Dish } from "@/types/Types";

const useQuerySingleDish = (id: number) => {
  return useQuery<Dish, Error>({
    queryKey: ["dish", id],
    queryFn: () => getDishById(id),
    staleTime: 5000,
    enabled: !!id, // Only run the query if the id is present
  });
};

export default useQuerySingleDish;
