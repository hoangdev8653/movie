import create from "zustand";
import {
  login,
  register,
  logout,
  forgotPassword,
  getAllUser,
} from "../apis/User";
import { setLocalStorage, clearLocalStorage } from "../utils/localStorage";
import { toast } from "react-toastify";

export const userStore = create((set) => ({
  user: null,
  role: null,
  error: false,
  isLoading: false,

  getAllUser: async () => {
    try {
      set({ isLoading: true });
      const response = await getAllUser();
      if (response.status === 200) {
        set({ isLoading: false });
        set({ data: response.data.content });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },

  login: async (data) => {
    try {
      set({ isLoading: true });
      const response = await login(data);
      if (response.status === 200) {
        setTimeout(() => {
          set({ isLoading: false });
        }, 3000);
        toast.success("Đăng nhập thành công");
        set({ user: response.data.content });
        set({ role: response.data.content.role });
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
  forgotPassword: async (data) => {
    try {
      set({ isLoading: true });
      const response = await forgotPassword(data);
      set({ isLoading: false });
      if (response.status === 200) {
        console.log("Gửi Mail thành công");
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
}));
