import mongoose from "mongoose";

const suatChieu = mongoose.Schema({
  ngaychieu: {
    type: String,
  },
  suatChieus: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "GioChieu",
    },
  ],
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
  },
});

const SuatChieu = mongoose.model("suatChieu", suatChieu);
export default SuatChieu;
