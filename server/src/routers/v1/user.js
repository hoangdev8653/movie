import express from "express";
import { userController } from "../../controllers/user.js";

const router = express.Router();

router.route("/register").post(userController.register);

export default router;
