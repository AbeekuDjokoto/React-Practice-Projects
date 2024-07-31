import { useMutation } from "@tanstack/react-query";
import { httpClient } from "../config";
import { useAuthStore } from "../stores";
import { useNavigate } from "react-router";

export function USER_REGISTRATION() {
  const { authenticate } = useAuthStore();
  const navigate = useNavigate();
  const { mutate, isPending: isLoading } = useMutation({
    mutationFn: async (data) => await httpClient.post("auth/login", data),
    onSuccess: async (data) => {
      const { token, refreshToken, ...userData } = data.data;
      console.log({ token, userData });
      authenticate(token, refreshToken, userData);
      navigate("/landing");
    },
    onError: async (data) => {
      console.log(data?.response?.data?.message);
    },
  });

  return { mutate, isLoading };
}
