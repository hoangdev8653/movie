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
    default: "",
  },
  moTa: {
    type: String,
    require: true,
  },
  ngayKhoiChieu: {
    type: String,
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
  daoDien: {
    type: String,
  },
  dienVien: {
    type: String,
  },
  theLoai: {
    type: String,
  },
  quocGia: {
    type: String,
  },
  thoiLuong: {
    type: String,
  },
  slug: {
    type: String,
  },
  rapId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Rap",
  },
});

const Movie = mongoose.model("Movie", movie);
export default Movie;
