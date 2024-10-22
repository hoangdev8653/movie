import { create } from "zustand";
import { bookTicket, getTicketByUser } from "../apis/BookTicket";
import { toast } from "react-toastify";

export const BookTicketStore = create((set) => ({
  error: false,
  data: [],
  isLoading: false,
  paymentlenght: 0,
  totalPrice: 0,

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
        set({ paymentlenght: response.data.content.length });
        const price = response.data.content.map((item) => item.tongTien);
        const formatNumber = price.map(Number);
        set({
          totalPrice: formatNumber.reduce((a, b) => {
            return a + b;
          }, 0),
        });
      }
    } catch (error) {
      console.log(error);
      set({ error: error.message });
    }
  },
}));
