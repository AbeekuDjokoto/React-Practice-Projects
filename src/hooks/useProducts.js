import { useQuery } from "@tanstack/react-query";
import { httpClient } from "../config";
import { useForm } from "react-hook-form";

export function useProducts() {
  const { data, isPending: isLoading } = useQuery({
    queryKey: ["getProducts"],
    queryFn: async () => await httpClient.get("/products"),
  });

  const { register, handleSubmit, control, formState } = useForm({});

  return {
    data: data?.data,
    isLoading,
    register,
    handleSubmit,
    control,
    formState,
  };
}
