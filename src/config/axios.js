import axios from "axios";
import { useAuthStore } from "../stores";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const instance = axios.create({
  baseURL: API_BASE_URL,
});

// const CANCELLED_STATUS_CODE = 499;
// function errorHandler(error) {
//   let { status } = error.response || {};
//   status = error.code === "ERR_CANCELLED" ? CANCELLED_STATUS_CODE : status;

//   if (status === 401 && !window.location.pathname.includes("auth")) {
//     window.location.pathname = "/";
//   }

//   throw {
//     status,
//     ...(error?.response?.data || {
//       message: error.message || "Sorry, an unexpected error occurred.",
//     }),
//   };
// }

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

// instance.interceptors.response.use(
//   (response) => {
//     const setToken = useAuthStore.getState().setToken;
//     const { data } = response;
//     console.log(data.data, "checking");
//     if (data?.token) setToken(data.token);
//     return data;
//   },
//   (error) => errorHandler(error)
// );

export { instance as httpClient };
