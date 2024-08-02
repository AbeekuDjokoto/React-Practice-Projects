import { useMutation } from "@tanstack/react-query";
import { httpClient } from "../config";
import { useAuthStore } from "../stores";
import { useNavigate } from "react-router";
import { useToastify } from "../components";

export function useLogin() {
  const { authenticate } = useAuthStore();
  const navigate = useNavigate();
  const { errorToast, successToast } = useToastify();
  const { mutate, isPending: isLoading } = useMutation({
    mutationFn: async (data) => await httpClient.post("auth/login", data),
    onSuccess: async (data) => {
      const { token, refreshToken, ...userData } = data.data;
      successToast("Successfully logged in");
      authenticate(token, refreshToken, userData);
      navigate("/dashboard");
    },
    onError: async (data) => {
      errorToast(data?.response?.data?.message);
    },
  });

  return { mutate, isLoading };
}
