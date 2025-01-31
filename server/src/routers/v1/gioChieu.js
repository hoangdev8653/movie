import express from "express";
import { gioChieuController } from "../../controllers/gioChieu.js";

const router = express.Router();

router.route("/").get(gioChieuController.getAllGioChieu);
router.route("/getById").get(gioChieuController.getGioChieuById);
router.route("/create").post(gioChieuController.createGioChieu);
router.route("/updateGioChieu").put(gioChieuController.updateGioChieu);
router.route("/updateStatusGhe").put(gioChieuController.updateStatusGhe);
router.route("/delete").delete(gioChieuController.deleteGioChieu);

export default router;
