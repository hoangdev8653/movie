import mongoose from "mongoose";

const heThongRap = mongoose.Schema({
  maHeThongRap: {
    type: String,
  },
  tenHeThongRap: {
    type: String,
  },
  logo: {
    type: String,
  },
});

const HeThongRap = mongoose.model("HeThongRap", heThongRap);
export default HeThongRap;
