import express from "express";
import { lichChieuControllers } from "../../controllers/lichChieu.js";

const router = express.Router();

router.route("/").get(lichChieuControllers.getAllLichChieu);
router.route("/getById").get(lichChieuControllers.getLichChieuById);
router.route("/create").post(lichChieuControllers.createLichChieu);
router.route("/update").put(lichChieuControllers.updateLichChieu);
router.route("/delete").delete(lichChieuControllers.deleteLichChieu);

export default router;
