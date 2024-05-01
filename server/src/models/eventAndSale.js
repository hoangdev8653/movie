import mongoose from "mongoose";

const eventAndSale = mongoose.Schema({
  tieuDe: {
    type: String,
  },
  hinhAnh: {
    type: String,
  },
  thoiGian: {
    type: String,
  },
  noiDung: {
    type: String,
  },
  kieuNoiDung: {
    type: String,
    enum: ["sale", "event"],
  },
});

const EventAndSale = mongoose.model("EventAndSale", eventAndSale);

export default EventAndSale;
