import create from "zustand";

export const gioChieuStore = create((set) => ({
  data: [],
  isLoading: false,
  error: null,

  getGioChieuByMovie: async () => {
    try {
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
}));
