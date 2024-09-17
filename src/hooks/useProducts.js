import { useQuery } from "@tanstack/react-query";
import { httpClient } from "../config";
import { useForm } from "react-hook-form";

export function useProducts({ searchQuery, limit, skip }) {
  const {
    data,
    isPending: isLoading,
    refetch,
  } = useQuery({
    queryKey: ["getProducts", searchQuery, limit],
    queryFn: async () => {
      const endpoint = searchQuery
        ? `/products/search?q=${searchQuery}`
        : `/products?limit=${limit}&skip=${skip}`;
      const response = await httpClient.get(endpoint);
      return response.data;
    },
    // enabled: !!searchQuery,
  });

  const { register, handleSubmit, control, formState } = useForm({});

  return {
    products: data,
    isLoading,
    register,
    refetch,
    handleSubmit,
    control,
    formState,
    searchQuery,
  };
}
