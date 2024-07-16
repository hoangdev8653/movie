import { create } from "zustand";
import {
  getAllHeThongRap,
  createHeThongRap,
  deleteHeThongRap,
} from "../apis/HeThongRap";

export const HeThongRap = create((set) => ({
  error: null,
  data: [],
  isLoading: false,

  getAllHeThongRap: async () => {
    try {
      set({ isLoading: true });
      const response = await getAllHeThongRap();
      console.log(response);
      if (response.status === 200) {
        set({ isLoading: false });
        set({ data: response.data.content });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
  createHeThongRap: async (data) => {
    try {
      set({ isLoading: true });
      const response = await createHeThongRap(data);
      set({ isLoading: false });
      if (response.status === 201) {
        console.log("Thêm mới thành công");
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
  deleteHeThongRap: async (id) => {
    try {
      set({ isLoading: true });
      const response = await deleteHeThongRap(id);
      set({ isLoading: false });
      if (response.status === 200) {
        console.log("Xóa thành công");
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
}));
