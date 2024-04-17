import express from "express";
import { suaChieuController } from "../../controllers/suatChieu.js";

const router = express.Router();

router.route("/getById").get(suaChieuController.getSuatChieuById);
router.route("/").get(suaChieuController.getSuatChieuByMovie);
router.route("/create").post(suaChieuController.createSuatChieu);
router.route("/update").put(suaChieuController.updateStatusGhe);
router.route("/delete").delete(suaChieuController.deleteSuatChieu);

export default router;
