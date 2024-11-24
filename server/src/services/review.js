import createHttpError from "http-errors";
import Review from "../models/review.js";

const getAllReviewByMovie = async () => {
  try {
    return await Review.find()
      .populate("movieId", "_id tenPhim slug")
      .populate("userId", "avarta username");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getReviewByMovie = async (id) => {
  try {
    const movie = await Review.find({ movieId: id })
      .populate("movieId", "_id tenPhim slug")
      .populate("userId", "avarta username");
    const ratting = movie.map((item) => {
      return item.ratting;
    });
    const totalRating = ratting.reduce((current, total) => {
      return current + total;
    }, 0);
    const avagent = totalRating / ratting.length;

    return { movie, avagent };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getReviewBySlug = async (slug) => {
  try {
    const review = await Review.find()
      .populate("movieId", "_id tenPhim slug")
      .populate("userId", "avarta username");
    const reviewBySlug = review.filter((rv) => rv.movieId.slug === slug);

    const ratting = reviewBySlug.map((item) => {
      return item.ratting;
    });
    const totalRating = ratting.reduce((current, total) => {
      return current + total;
    }, 0);
    const avagent = totalRating / ratting.length;
    return { reviewBySlug, avagent };
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
  getReviewBySlug,
  createReview,
  deleteReview,
};
