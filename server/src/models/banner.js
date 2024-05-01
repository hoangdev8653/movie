import mongoose from "mongoose";

const banner = mongoose.Schema({
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
  },
});

const Banner = mongoose.model("Banner", banner);
export default Banner;
