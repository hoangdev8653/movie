import create from "zustand";
import {
  createGioChieu,
  deleteGioChieu,
  getAllGioChieu,
  getGioChieuById,
  getGioChieuByMovie,
} from "../apis/GioChieu";

export const suatChieuStore = create((set) => ({
  data: [],
  isLoading: false,
  error: null,

  getAllGioChieu: async () => {
    try {
      set({ isLoading: true });
      const resepone = await getAllGioChieu();
      set({ isLoading: false });
      if (resepone.status === 200) {
        set({ data: resepone.data.content });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },

  getGioChieuByMovie: async (movieId) => {
    try {
      set({ isLoading: true });
      const response = await getGioChieuByMovie(movieId);
      if (response.status === 200) {
        set({ isLoading: true });
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
      if (response.status === 200) {
        set({ isLoading: false });
        set({ data: response.data.content });
      } else {
        set({ error: error.message });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },

  createGioChieu: async (data) => {
    try {
      set({ isLoading: true });
      const resepone = await createGioChieu(data);
      set((state) => {
        isLoading: false;
        data: [...state.data, resepone.data.content];
      });
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },

  deleteGioChieu: async (id) => {
    try {
      set({ isLoading: true });
      const resepone = await deleteGioChieu(id);
      if (resepone.status === 200) {
        set((state) => {
          isLoading: false;
          data: state.data.filter((gioChieu) => gioChieu._id !== id);
        });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
}));
