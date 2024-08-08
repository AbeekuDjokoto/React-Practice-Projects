import axios from "axios";
import { useAuthStore } from "../stores";
// import { useRefreshToken } from "../hooks";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const instance = axios.create({
  baseURL: API_BASE_URL,
});
// const { refreshToken } = useAuthStore();

// const CANCELLED_STATUS_CODE = 499;
// function errorHandler(error) {
//   let { status } = error.response || {};
//   status = error.code === "ERR_CANCELLED" ? CANCELLED_STATUS_CODE : status;

//   // if (status === 401 && !window.location.pathname.includes("auth")) {
//   //   window.location.pathname = "/dashboard";
//   // }

//   throw {
//     status,
//     ...(error?.response?.data || {
//       message: error.message || "Sorry, an unexpected error occurred.",
//     }),
//   };
// }

instance.interceptors.request.use((request) => {
  const headers = request.headers;
  const tk = localStorage.getItem("token");
  const token = useAuthStore.getState()?.token;

  return {
    ...request,
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${tk || token}` : "",
    },
  };
});

instance.interceptors.response.use(
  (response) => {
    // console.log({ statusCode: response.status });
    // console.log({ response });
    // if (response.status === 401) {
    //   const { mutate } = useRefreshToken();
    //   mutate();
    // }
    return response;
  },
  (error) => {
    const refreshToken = useAuthStore.getState()?.refreshToken;

    if (error.response.status === 401) {
      fetch("https://dummyjson.com/auth/refresh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refreshToken,
          expiresInMins: 1, // optional, defaults to 60
        }),
      })
        .then((res) => res.json())
        .then(({ token, refreshToken }) => {
          console.log({ token, refreshToken });
          localStorage.setItem("token", token);
          localStorage.setItem("refreshToken", refreshToken);
          // const setToken = useAuthStore().setToken;
          // setToken(token);
          // const setRefreshToken = useAuthStore().setRefreshToken;
          // setRefreshToken(refreshToken);
        });
    }
  }
);

export { instance as httpClient };
