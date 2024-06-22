import create from "zustand";
import { login, register, logout } from "../apis/user";
import { setLocalStorage, clearLocalStorage } from "../utils/localStorage";
import { toast } from "react-toastify";

export const userStore = create((set) => ({
  user: null,
  error: false,
  isLoading: false,
  login: async (data) => {
    try {
      set({ isLoading: true });
      const response = await login(data);
      if (response.status === 200) {
        set({ isLoading: false });
        toast.success("Đăng nhập thành công");
        set({ user: response.data.content });
        setLocalStorage("user", response.data.content);
        setLocalStorage("accessToken", response.data.accessToken);
        setLocalStorage("refreshToken", response.data.refreshToken);
        return null;
      } else {
        set({ isLoading: false });
        set({ error: "Unexpected response status: " + response.status });
        return "Unexpected response status: " + response.status;
      }
    } catch (error) {
      set({ isLoading: false });
      set({ error: error.message });
      toast.error("Tài khoản hoặc mật khảo không đúng");
      return error.message;
    }
  },

  logout: async () => {
    try {
      set({ isLoading: true });
      const response = await logout();
      if (response.status === 200) {
        set({ isLoading: false });
        console.log("xóa tất cả");
        clearLocalStorage();
      }
    } catch (error) {
      console.log(error.message);
      set({ error: error.message });
    }
  },
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
