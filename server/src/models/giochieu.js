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
});

const GioChieu = mongoose.model("GioChieu", gioChieu);

export default GioChieu;
