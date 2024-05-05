import express from "express";
import { movieController } from "../../controllers/movie.js";
import uploadCloud from "../../middlewares/cloundinary.js";

const router = express.Router();

router.route("/").get(movieController.getAllMovie);
router.route("/dangChieu").get(movieController.getMovieDangChieu);
router.route("/sapChieu").get(movieController.getMovieSapChieu);
router.route("/CgvVinCom").get(movieController.getMovieCgvVinCom);
router.route("/CgvVinhTrung").get(movieController.getMovieCgvVinhTrung);
router.route("/GalaxyDaNang").get(movieController.getMovieGalaxyDaNang);
router.route("/LotteDaNang").get(movieController.getMovieLotteDaNang);
router.route("/LotteHoiAn").get(movieController.getMovieLotteHoiAn);
router.route("/StartlightDanang").get(movieController.getMovieStarlightDaNang);
router.route("/:slug").get(movieController.getMovieBySlug);

router
  .route("/create")
  .post(uploadCloud.single("hinhAnh"), movieController.createMovie);
router
  .route("/updateTrailerMovie")
  .post(uploadCloud.single("trailer"), movieController.updateTrailerMovie);
router.route("/delete").delete(movieController.deleteMovie);
export default router;
