import create from "zustand";
import {
  login,
  register,
  logout,
  forgotPassword,
  getAllUser,
  updateAvarta,
  updatePassword,
  getUserCurrent,
  resetPassword,
  updateUser,
} from "../apis/user";

import { setLocalStorage, clearLocalStorage } from "../utils/localStorage";
import { toast } from "react-toastify";

export const userStore = create((set) => ({
  user: null,
  role: null,
  error: null,
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
      toast.error("Tài khoản hoặc mật khẩu không đúng");
      return error.message;
    }
  },

  logout: async () => {
    try {
      set({ isLoading: true });
      const response = await logout();
      if (response.status === 200) {
        set({ isLoading: false });
        clearLocalStorage();
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
  register: async (data) => {
    try {
      set({ isLoading: true });
      const response = await register(data);
      if (response.status === 201) {
        setTimeout(() => {
          set({ isLoading: false });
        }, 3000);

        toast.success("Đăng kí thành công");
      }
      return null;
    } catch (error) {
      console.log(error);
      set({ error: error.message });
      return error.message;
    }
  },
  updateAvarta: async (data) => {
    try {
      set({ isLoading: true });
      const response = await updateAvarta(data);
      set({ isLoading: false });
      if (response.status === 200) {
        toast.success("Cập nhật thành công");
        setLocalStorage("user", response.data.content);
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },

  forgotPassword: async (data) => {
    try {
      set({ isLoading: true });
      const response = await forgotPassword(data);
      set({ isLoading: false });
      if (response.status === 200) {
        toast.success("Gửi Mail thành công");
      }
      return null;
    } catch (error) {
      console.log(error.response.status);
      toast.error("Tài khoản không tồn tại");
      set({ error: error.message });
      return error.message;
    }
  },

  resetPassword: async (token, { password }) => {
    try {
      set({ isLoading: true });
      const response = await resetPassword(token, { password });
      if (response.status === 200) {
        setTimeout(() => {
          set({ isLoading: false });
        }, 3000);
        toast.success("Cập nhật thành công");
        return null;
      }
    } catch (error) {
      console.log(error);
      toast.error("Cập nhật thất bại");
      set({ error: error.message });
      return error.message;
    }
  },
}));
