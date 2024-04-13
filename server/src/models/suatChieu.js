import mongoose from "mongoose";

const suatChieu = mongoose.Schema({
  ngaychieu: {
    type: String,
  },
  gioChieu: {
    type: Array,
  },
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
  },
});

const SuatChieu = mongoose.model("suatChieu", suatChieu);
export default SuatChieu;
