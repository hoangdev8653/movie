import create from "zustand";
import { getAllNews, createNews, deleteNews } from "../apis/News";

export const NewsStore = create((set) => ({
  isLoading: false,
  data: [],
  error: null,

  getAllNews: async () => {
    try {
      set({ isLoading: true });
      const response = await getAllNews();
      set({ isLoading: false });
      if (response.status === 200) {
        set({ data: response.data.content });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },

  createNews: async (data) => {
    try {
      set({ isLoading: true });
      const response = await createNews(data);
      set({ isLoading: false });
      if (response.status === 201) {
        console.log("Tạo mới thành công");
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },

  deleteNews: async (id) => {
    try {
      set({ isLoading: true });
      const response = await deleteNews(id);
      set({ isLoading: false });
      if (response.status === 200) {
        console.log("Xoá thành công");
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
}));
