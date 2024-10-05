import express from "express";
import { ngayChieuController } from "../../controllers/ngayChieu.js";

const router = express.Router();

router.route("/").get(ngayChieuController.getAllNgayChieu);
router.route("/getById").get(ngayChieuController.getNgayChieuById);
router.route("/create").post(ngayChieuController.createNgayChieu);
router.route("/update").put(ngayChieuController.updateNgayChieu);
router.route("/delete").delete(ngayChieuController.deleteNgayChieu);

export default router;
