import { useQuery } from "@tanstack/react-query";
import { httpClient } from "../config";

export function useUserData() {
  const { data, isPending: isLoading } = useQuery({
    queryKey: ["useUser"],
    queryFn: async () => await httpClient.get("/user/me"),
  });

  return { data, isLoading };
}
