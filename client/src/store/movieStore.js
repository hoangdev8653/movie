import create from "zustand";
import {
  getAllMovie,
  getAllMovieBySlug,
  getAllMovieDangChieu,
  getAllMovieSapChieu,
  getAllBanner,
} from "../apis/movie";

export const movieStore = create((set) => ({
  error: false,
  data: [],
  loading: false,
  getAllMovie: async () => {
    try {
      set({ loading: true });
      const response = await getAllMovie();
      if (response.status === 200) {
        set({ data: response.data.content });
        set({ loading: false });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
  getAllMovieDangChieu: async () => {
    try {
      set({ loading: true });
      const response = await getAllMovieDangChieu();
      if (response.status === 200) {
        set({ data: response.data.content });
        set({ loading: false });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
  getAllMovieSapChieu: async () => {
    try {
      set({ loading: true });
      const response = await getAllMovieSapChieu();
      if (response.status === 200) {
        set({ data: response.data.content });
        set({ loading: false });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
  getAllMovieBySlug: async (slug) => {
    try {
      set({ loading: true });
      const response = await getAllMovieBySlug(slug);
      if (response.status === 200) {
        set({ data: response.data.content });
        set({ loading: false });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
  getAllBanner: async () => {
    try {
      set({ loading: true });
      const response = await getAllBanner();
      if (response.status === 200) {
        console.log(response.data.content);
        set({ data: response.data.content });
        set({ loading: false });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
}));
