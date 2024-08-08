import { useMutation } from "@tanstack/react-query";
import { httpClient } from "../config";
import { useAuthStore } from "../stores";

export function useRefreshToken() {
  const { setRefreshToken, setToken, getRefreshToken } = useAuthStore();

  const prevRefreshToken = getRefreshToken();

  console.log({ prevRefreshToken });

  const { mutate, isPending: isLoading } = useMutation({
    mutationFn: () =>
      httpClient.post("auth/refresh", {
        refreshToken: prevRefreshToken,
        expiresInMins: 1,
      }),
    onSuccess: async (data) => {
      const { token, refreshToken } = data.data;
      setToken(token);
      setRefreshToken(refreshToken);
    },
    onError: async (data) => {
      console.error(data?.response?.data?.message);
    },
  });

  return { mutate, isLoading };
}
