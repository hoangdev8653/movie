import mongoose from "mongoose";

const review = mongoose.Schema({
  content: {
    type: String,
  },
  ratting: {
    type: Number,
  },
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  like: {
    type: Number,
    default: 0,
  },
});

const Review = mongoose.model("Review", review);
export default Review;
