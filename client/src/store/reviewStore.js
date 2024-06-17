import create from "zustand";
import {
  createReview,
  deleteReview,
  getReviewByMovie,
  updateReview,
} from "../apis/review";
export const reviewStore = create((set) => ({
  data: null,
  isLoading: false,
  error: null,

  getReviewByMovie: async (id) => {
    try {
      set({ isLoading: true });
      const resepone = await getReviewByMovie(id);
      set({ isLoading: false });
      set({ data: resepone.data.content });
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
  createReview: async (data) => {
    try {
      set({ isLoading: true });
      const response = await createReview(data);
      if (response.status === 201) {
        set((state) => {
          isLoading: false;
          data: state.data, response.data.content;
        });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },

  deleteReview: async (id) => {
    try {
      set({ isLoading: false });
      const resepone = await deleteReview(id);
      if (resepone.status === 200) {
        set((state) => {
          isLoading: false;
          data: state.data, data.filter((item) => item._id === id);
        });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
}));
