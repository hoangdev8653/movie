import express from "express";
import { rapController } from "../../controllers/rap.js";
import uploadCloud from "../../middlewares/cloundinary.js";
const router = express.Router();

router.route("/").get(rapController.getAllRap);
router.route("/getById").get(rapController.getRapById);
router.route("/:maHeThong").get(rapController.getRapByHethong);
router
  .route("/create")
  .post(uploadCloud.single("hinhAnh"), rapController.createRap);
router
  .route("/update")
  .put(uploadCloud.single("hinhAnh"), rapController.updateRap);
router.route("/delete").delete(rapController.deleteRap);

export default router;
