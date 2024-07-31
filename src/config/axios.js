import axios from "axios";
import { useAuthStore } from "../stores";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const instance = axios.create({
  baseURL: API_BASE_URL,
});

instance.interceptors.request.use((request) => {
  const headers = request.headers;
  const token = useAuthStore.getState()?.token;

  return {
    ...request,
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export { instance as httpClient };
