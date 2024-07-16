import create from "zustand";
import {
  getSuatChieuByMovie,
  createSuatChieu,
  deleteSuatChieu,
  getSuatChieu,
  getSuatChieuById,
} from "../apis/SuatChieu";

export const suatChieuStore = create((set) => ({
  data: [],
  isLoading: false,
  error: null,

  getSuatChieuByMovie: async (movieId) => {
    try {
      set({ isLoading: true });
      const response = await getSuatChieuByMovie(movieId);
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
}));
