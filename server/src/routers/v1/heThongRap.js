import express from "express";
import { heThongRapController } from "../../controllers/heThongRap.js";
import uploadCloud from "../../middlewares/cloundinary.js";
const router = express.Router();

router.route("/").get(heThongRapController.getAllHeThongRap);
router
  .route("/create")
  .post(uploadCloud.single("logo", 10), heThongRapController.createHeThongRap);
router.route("/delete").delete(heThongRapController.deteleHeThongRap);

export default router;
