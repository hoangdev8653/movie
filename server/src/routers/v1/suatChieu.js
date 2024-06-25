import express from "express";
import { suaChieuController } from "../../controllers/suatChieu.js";

const router = express.Router();

router.route("/").get(suaChieuController.getAllSuatChieu);
router.route("/getById").get(suaChieuController.getSuatChieuById);
router.route("/getByMovieId").get(suaChieuController.getSuatChieuByMovie);
router.route("/create").post(suaChieuController.createSuatChieu);
router.route("/delete").delete(suaChieuController.deleteSuatChieu);

export default router;
