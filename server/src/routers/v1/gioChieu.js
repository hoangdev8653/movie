import express from "express";
import { gioChieuController } from "../../controllers/gioChieu.js";

const router = express.Router();

router.route("/").get(gioChieuController.getAllGioChieu);
router.route("/getById").get(gioChieuController.getGioChieuById);
router.route("/getByMovieId").get(gioChieuController.getGioChieuByMovieId);
router.route("/create").post(gioChieuController.createGioChieu);
router.route("/update").put(gioChieuController.updateStatusGhe);
router.route("/delete").delete(gioChieuController.deleteGioChieu);

export default router;
