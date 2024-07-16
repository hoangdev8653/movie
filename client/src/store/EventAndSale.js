import { create } from "zustand";
import {
  getAllEvent,
  getAllSal,
  createEventOrSale,
  deleteById,
} from "../apis/EventAndSale";
export const EventAndSale = create((set) => ({
  error: null,
  data: [],
  isLoading: false,

  getAllEvent: async () => {
    try {
      set({ isLoading: true });
      const response = await getAllEvent();
      if (response.status === 200) {
        set({ data: response.data.content });
        set({ isLoading: false });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
  getAllSale: async () => {
    try {
      set({ isLoading: true });
      const response = await getAllSale();
      if (response.status === 200) {
        set({ data: response.data.content });
        set({ isLoading: false });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },

  createEventOrSale: async (data) => {
    try {
      set({ isLoading: true });
      const response = await createEventOrSale(data);
      set({ isLoading: false });
      if (response.status === 201) {
        console.log("Tạo mới thành công");
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },

  deleteById: async (id) => {
    try {
      set({ isLoading: true });
      const response = await deleteById(id);
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
