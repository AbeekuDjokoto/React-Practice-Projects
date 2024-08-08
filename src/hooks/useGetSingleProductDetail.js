import { useQuery } from "@tanstack/react-query";
import { httpClient } from "../config";
import { useForm } from "react-hook-form";

export function useSingleProductsDetail(id) {
  const { data, isPending: isLoading } = useQuery({
    queryKey: ["getSingleProductDetail"],
    queryFn: async () => await httpClient.get(`/products/${id}`),
  });

  const { register, handleSubmit, control, formState } = useForm({});

  return {
    productDetail: data?.data,
    isLoading,
    register,
    handleSubmit,
    control,
    formState,
  };
}
