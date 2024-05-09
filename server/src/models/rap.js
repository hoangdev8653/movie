import mongoose from "mongoose";

const rap = mongoose.Schema({
  tenRap: {
    type: String,
  },
  hinhAnh: {
    type: String,
  },
  diaChi: {
    type: String,
  },
  slug: {
    type: String,
  },
  heThongRapId: { type: mongoose.Schema.Types.ObjectId, ref: "HeThongRap" },
});

const Rap = mongoose.model("Rap", rap);

export default Rap;
