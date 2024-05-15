import create from "zustand";
import { login, register } from "../apis/user";
import { setLocalStorage } from "../utils/localStorage";
export const userStore = create((set) => ({
  user: null,
  error: false,
  login: async (data) => {
    try {
      const response = await login(data);
      if (response.status === 200) {
        set({ user: response.data });
        setLocalStorage("user", response.data.content);
        setLocalStorage("accessToken", response.data.accessToken);
        setLocalStorage("refreshToken", response.data.refreshToken);
      }
    } catch (error) {
      throw new error("Login Fail");
    }
  },

  logout: () => set({ user: null }),
  register: async (data) => {
    try {
      const response = await register(data);
      if (response.status === 201) {
        console.log("Register Success!!");
      }
    } catch (error) {
      throw new error("Failed to register");
    }
  },
}));
