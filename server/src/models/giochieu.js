import mongoose from "mongoose";

const gioChieu = mongoose.Schema({
  gioChieu: {
    type: String,
  },
  danhSachGhe: [
    {
      soGhe: {
        type: String,
      },
      trangThai: {
        type: String,
        enum: ["Trong", "DaDat"],
        default: "Trong",
      },
    },
  ],
  ngayChieuId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ngayChieu",
  },
});

const GioChieuModel = mongoose.model("GioChieu", gioChieu);

export default GioChieuModel;
