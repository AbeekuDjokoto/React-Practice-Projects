import { useQuery } from "@tanstack/react-query";
import { httpClient } from "../config";

export function GET_ALL_MEALS() {
  const { data, isPending: isLoading } = useQuery({
    queryKey: ["getAllMeals"],
    queryFn: async () => await httpClient.get("/categories.php"),
  });

  return { data, isLoading };
}
