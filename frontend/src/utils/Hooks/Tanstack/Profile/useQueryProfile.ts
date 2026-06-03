import { useQuery } from "@tanstack/react-query";
import { getProfileB } from "@/api/ProfileApi";
import { ProfileData } from "@/types/Types";

const useFetchProfile = () => {
  return useQuery<ProfileData, Error>({
    queryKey: ["profile"], // Unique key for caching
    queryFn: getProfileB, // Fetch function
    staleTime: 1000 * 60 * 5, // Cache data for 5 minutes to prevent unnecessary refetching
    retry: (failureCount, error: any) => {
      // Don't retry if it's a 401 Unauthorized (user is just a guest)
      if (error.response?.status === 401) return false;
      return failureCount < 3;
    },
  });
};

export default useFetchProfile;
