import { create } from "zustand";
import { getLichChieuByMovieId } from "../apis/lichChieu";

export const LichChieuStore = create((set) => ({
  error: null,
  data: [],
  isLoading: false,

  getLichChieuByMovieId: async (movieId) => {
    try {
      set({ isLoading: true });
      const response = await getLichChieuByMovieId(movieId);
      set({ isLoading: false });
      if (response.status == 200) {
        set({ data: response.data.content });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
}));
