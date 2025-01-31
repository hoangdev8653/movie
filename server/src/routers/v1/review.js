import express from "express";
import { verifyAccessToken } from "../../middlewares/verifyAccessToken.js";
import { reviewController } from "../../controllers/review.js";
const router = express.Router();

router.route("/").get(reviewController.getAllReviewByMovie);
router.route("/movie").get(reviewController.getReviewByMovie);
router.route("/:slug").get(reviewController.getReviewBySlug);
router.route("/create").post(verifyAccessToken, reviewController.createReview);
router.route("/delete").delete(reviewController.deleteReview);

export default router;
