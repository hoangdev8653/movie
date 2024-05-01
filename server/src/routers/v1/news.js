import express from "express";
import { newsController } from "../../controllers/news.js";
import uploadCloud from "../../middlewares/cloundinary.js";
const router = express.Router();

router.route("/").get(newsController.getAllNews);
router
  .route("/create")
  .post(uploadCloud.single("hinhAnh"), newsController.createNews);
router.route("/delete").delete(newsController.deleteNews);

export default router;
