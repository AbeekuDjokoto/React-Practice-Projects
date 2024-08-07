import { useQuery } from "@tanstack/react-query";
import { httpClient } from "../config";
import { useForm } from "react-hook-form";

export function useUserData() {
  const { data, isPending: isLoading } = useQuery({
    queryKey: ["useUser"],
    queryFn: async () => await httpClient.get("/user/me"),
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
