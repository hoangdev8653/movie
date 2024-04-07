import mongoose from "mongoose";

const movie = mongoose.Schema({
  tenPhim: {
    type: String,
  },
  hinhAnh: {
    type: String,
  },
  trailer: {
    type: String,
  },
  moTa: {
    type: String,
    require: true,
  },
  danhGia: {
    type: String,
    require: true,
  },
  ngayKhoiChieu: {
    type: Date,
    require: true,
  },
  dangChieu: {
    type: Boolean,
    require: true,
  },
  sapChieu: {
    type: Boolean,
    require: true,
  },
});

const Movie = mongoose.model("Movie", movie);
export default Movie;
