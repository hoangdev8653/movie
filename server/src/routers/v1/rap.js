import express from "express";
import { rapController } from "../../controllers/rap.js";
import uploadCloud from "../../middlewares/cloundinary.js";
const router = express.Router();

router.route("/").get(rapController.getAllRap);
router
  .route("/create")
  .post(uploadCloud.single("hinhAnh"), rapController.createRap);
router.route("/delete").delete(rapController.deleteRap);

export default router;
