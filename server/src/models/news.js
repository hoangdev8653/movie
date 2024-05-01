import mongoose from "mongoose";

const news = mongoose.Schema({
  tieuDe: {
    type: String,
  },
  hinhAnh: {
    type: String,
  },
  noiDung: {
    type: String,
  },
});

const News = mongoose.model("News", news);
export default News;
