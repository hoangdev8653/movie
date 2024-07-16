import { create } from "zustand";
import {
  createGioChieu,
  deleteGioChieu,
  getAllGioChieu,
  getGioChieuById,
  getGioChieuByMovie,
} from "../apis/GioChieu";

export const GioChieuStore = create((set) => ({
  isLoading: false,
  data: [],
  error: null,

  getAllGioChieu: async () => {
    try {
      set({ isLoading: true });
      const response = await getAllGioChieu();
      set({ isLoading: false });
      if (response.status === 200) {
        set({ data: response.data.content });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
  getGioChieuById: async (id) => {
    try {
      set({ isLoading: true });
      const response = await getGioChieuById(id);
      set({ isLoading: false });
      if (response.status === 200) {
        set({ data: response.data.content });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
  createGioChieu: async (data) => {
    try {
      set({ isLoading: true });
      const response = await createGioChieu(data);
      set({ isLoading: false });
      if (response.status === 201) {
        console.log("Thêm mới thành công");
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
  deleteGioChieu: async (id) => {
    try {
      set({ isLoading: true });
      const response = await deleteGioChieu(id);
      if (response.status === 200) {
        console.log("Xóa thành công");
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
}));
