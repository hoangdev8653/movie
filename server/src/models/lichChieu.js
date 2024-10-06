import mongoose from "mongoose";

const LichChieu = mongoose.Schema({
  gioChieuId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "GioChieu",
  },
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
  },
});

const LichChieuModel = mongoose.model("LichChieu", LichChieu);
export default LichChieuModel;
