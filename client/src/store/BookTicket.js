import { create } from "zustand";
import { bookTicket, getTicketByUser } from "../apis/BookTicket";
import { toast } from "react-toastify";

export const BookTicket = create((set) => ({
  error: false,
  data: [],
  isLoading: false,

  bookTicket: async (data) => {
    try {
      set({ isLoading: true });
      const response = await bookTicket(data);
      if (response.status === 201) {
        set({ isLoading: false });
        toast.success("Đã Thanh toán thành công");
        console.log(response);
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },

  getTicketByUser: async () => {
    try {
      set({ isLoading: true });
      const response = await getTicketByUser();
      if (response.status === 200) {
        set({ isLoading: false });
        set({ data: response.data.content });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
}));