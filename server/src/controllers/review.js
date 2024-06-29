import { StatusCodes } from "http-status-codes";
import { reviewService } from "../services/review.js";
const getAllReviewByMovie = async (req, res, next) => {
  try {
    const review = await reviewService.getAllReviewByMovie();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: review });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const getReviewByMovie = async (req, res, next) => {
  try {
    const id = req.query.id;
    const { movie, avagent } = await reviewService.getReviewByMovie(id);
    return res
      .status(StatusCodes.OK)
      .json({
        status: 200,
        message: "Xử lý thành công",
        content: movie,
        avagent,
      });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const createReview = async (req, res, next) => {
  try {
    const id = req.userId;
    const { content, ratting, movieId } = req.body;
    const review = await reviewService.createReview(id, {
      content,
      ratting,
      movieId,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ status: 201, message: "Xử lý thành công", content: review });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const deleteReview = async (req, res, next) => {
  try {
    const id = req.query.id;
    const review = await reviewService.deleteReview(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: review });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

export const reviewController = {
  getAllReviewByMovie,
  getReviewByMovie,
  createReview,
  deleteReview,
};
