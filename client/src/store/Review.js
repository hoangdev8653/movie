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
  averageStar: 0,

  getReviewByMovie: async (id) => {
    try {
      set({ isLoading: true });
      const resepone = await getReviewByMovie(id);
      set({ isLoading: false });
      set({ data: resepone.data.content });
      const star = resepone.data.content.map((item) => {
        return item.ratting;
      });
      set({
        averageStar:
          star.reduce((item, currentValue) => item + currentValue, 0) /
          resepone.data.content.length,
      });
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
        setTimeout(() => {
          set((state) => ({
            isLoading: false,
            data: [response.data.content, ...state.data],
          }));
        }, 3000);
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
