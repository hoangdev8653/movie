import express from "express";
import { movieController } from "../../controllers/movie.js";
import uploadCloud from "../../middlewares/cloundinary.js";

const router = express.Router();

router.route("/").get(movieController.getAllMovie);
router
  .route("/create")
  .post(uploadCloud.single("hinhAnh"), movieController.createMovie);
router
  .route("/updateTrailerMovie")
  .post(uploadCloud.single("trailer"), movieController.updateTrailerMovie);
router.route("/delete").delete(movieController.deleteMovie);
export default router;
