import { useQuery } from "@tanstack/react-query";
import { httpClient } from "../config";

export function useSearchProduct(search) {
  const { data, isPending: isLoading } = useQuery({
    queryKey: ["getSearchProduct"],
    queryFn: async () => await httpClient.get(`/products/search?q=${search}`),
  });

  return {
    productDetail: data?.data,
    isLoading,
    search,
  };
}
