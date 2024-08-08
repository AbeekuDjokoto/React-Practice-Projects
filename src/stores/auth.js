// import { jwtDecode } from "jwt-decode";

import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  token: "",
  user: null,
  refreshToken: "",
  isAuthenticated: false,
};

const authStore = (set, get) => ({
  ...initialState,
  reset: () => set(initialState),
  authenticate: (token, refreshToken, data) => {
    set({
      user: data,
      token,
      refreshToken,
      isAuthenticated: true,
    });
  },
  setUser: (user) => set({ user }),
  setRedirect: (redirect) => set({ redirect }),

  getToken: () => get().token,
  setToken: (newToken) => set({ token: newToken }),
  getRefreshToken: () => get().refreshToken,
  setRefreshToken: (newToken) => set({ refreshToken: newToken }),
});

const useAuthStore = create(
  persist(authStore, { name: "starting-react-web-auth-store" })
);
// function decodeUser(token) {
//   return jwtDecode(token);
// }

export { useAuthStore };
