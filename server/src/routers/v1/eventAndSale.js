import express from "express";
import { eventAndSaleController } from "../../controllers/eventAndSale.js";
import uploadCloud from "../../middlewares/cloundinary.js";
const router = express.Router();

router.route("/").get(eventAndSaleController.getAllEventAndSale);
router.route("/event").get(eventAndSaleController.getAllEvent);
router.route("/sale").get(eventAndSaleController.getAllSale);
router
  .route("/create")
  .post(
    uploadCloud.single("hinhAnh"),
    eventAndSaleController.createEventAndSale
  );
router.route("/delete").delete(eventAndSaleController.deleteEventAndSale);

export default router;
