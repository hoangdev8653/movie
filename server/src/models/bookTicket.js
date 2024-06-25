import mongoose from "mongoose";

const bookTicket = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  gioChieuId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "GioChieu",
  },
  danhSachGhe: {
    type: Array,
    default: [],
  },
  tongTien: {
    type: String,
    default: 0,
  },
});

const BookTicKet = mongoose.model("bookTicket", bookTicket);

export default BookTicKet;
