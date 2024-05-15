import { create } from "zustand";
import {
  getAllRap,
  getRapByHeThongRap,
  getRapById,
  getRapBySlug,
} from "../apis/rap";
export const rapStore = create((set) => ({
  error: false,
  data: [],
  loading: false,
  getAllRap: async () => {
    try {
      set({ loading: true });
      const response = await getAllRap();
      if (response.status === 200) {
        set({ data: response.data.content });
        set({ loading: false });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
  getRapBySlug: async (slug) => {
    try {
      set({ loading: true });
      const response = await getRapBySlug(slug);
      if (response.status === 200) {
        set({ data: response.data.content });
        set({ loading: false });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
  getRapByHeThongRap: async (maHeThong) => {
    try {
      set({ loading: true });
      const response = await getRapByHeThongRap(maHeThong);
      if (response.status === 200) {
        set({ data: response.data.content });
        set({ loading: false });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
  getRapById: async (id) => {
    try {
      set({ loading: true });
      const response = await getRapById(id);
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
