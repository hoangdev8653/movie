import mongoose from "mongoose";

const bookTicket = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  suatChieuId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "suatChieu",
  },
  danhSachGhe: {
    type: Array,
    default: [],
  },
  totalPrice: {
    type: String,
    default: 0,
  },
});

const BookTicKet = mongoose.model("bookTicket", bookTicket);

export default BookTicKet;
