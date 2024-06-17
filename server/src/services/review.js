import createHttpError from "http-errors";
import Review from "../models/review.js";

const getAllReviewByMovie = async () => {
  try {
    return await Review.find().populate("movieId").populate("userId");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getReviewByMovie = async (id) => {
  try {
    const movie = await Review.find({ movieId: id }).populate(
      "userId",
      "username avarta"
    );
    return movie;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createReview = async (id, { content, ratting, movieId }) => {
  try {
    return await Review.create({ content, ratting, movieId, userId: id });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteReview = async (id) => {
  try {
    const review = await Review.findById(id);
    if (!review) {
      throw createHttpError.NotFound("Review Not Found");
    }
    return await Review.deleteOne({ _id: id });
  } catch (error) {
    console.log(error);
  }
};

export const reviewService = {
  getAllReviewByMovie,
  getReviewByMovie,
  createReview,
  deleteReview,
};
