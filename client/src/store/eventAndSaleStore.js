import { create } from "zustand";
import { getAllEvent, getAllSale } from "../apis/eventAndSale";
export const eventAndSaleStore = create((set) => ({
  error: false,
  data: [],
  loading: false,

  getAllEvent: async () => {
    try {
      set({ loading: true });
      const response = await getAllEvent();
      if (response.status === 200) {
        set({ data: response.data.content });
        set({ loading: false });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
  getAllSale: async () => {
    try {
      set({ loading: true });
      const response = await getAllSale();
      if (response.status === 200) {
        set({ data: response.data.content });
        set({ loading: false });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
}));
