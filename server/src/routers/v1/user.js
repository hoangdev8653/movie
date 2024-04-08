import express from "express";
import { userController } from "../../controllers/user.js";
import { verifyAccessToken } from "../../middlewares/verifyAccessToken.js";

const router = express.Router();

router.route("/").get(userController.getAllUser);
router.route("/register").post(userController.register);
router.route("/login").post(userController.login);
router.route("/current").get(verifyAccessToken, userController.currentUser);
router.route("/logout").post(verifyAccessToken, userController.logout);

export default router;
