import mongoose from "mongoose";

const ngayChieu = mongoose.Schema({
  ngaychieu: {
    type: String,
  },

  rapId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Rap",
  },
});

const NgayChieuModel = mongoose.model("ngayChieu", ngayChieu);
export default NgayChieuModel;
