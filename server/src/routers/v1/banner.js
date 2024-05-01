import express from "express";
import { bannerController } from "../../controllers/banner.js";

const router = express.Router();

router.route("/").get(bannerController.getAllBanner);
router.route("/create").post(bannerController.createBanner);
router.route("/delete").delete(bannerController.deleteBanner);

export default router;
