import createHttpError from "http-errors";
import Review from "../models/review.js";

const getAllReviewByMovie = async () => {
  try {
    return await Review.find();
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
  createReview,
  deleteReview,
};
