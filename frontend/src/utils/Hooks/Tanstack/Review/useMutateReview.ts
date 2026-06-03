import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postReview } from "@/api/DishApi";
import { ReviewData } from "@/types/Types";

const usePostReview = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, ReviewData>({
    mutationFn: postReview, // Calls API function
    retry: 2, // Retry twice on failure
    onSuccess: (_, variables) => {
      // Invalidate the specific dish query so the review shows up
      queryClient.invalidateQueries({ queryKey: ["dish", variables.dish] });
      queryClient.invalidateQueries({ queryKey: ["dishes"] });
    }
  });
};

export default usePostReview;
