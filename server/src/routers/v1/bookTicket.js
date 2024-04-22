import express from "express";
import { bookTicketcontroller } from "../../controllers/bookingTicket.js";
import { verifyAccessToken } from "../../middlewares/verifyAccessToken.js";
const router = express.Router();

router
  .route("/getByUser")
  .get(verifyAccessToken, bookTicketcontroller.getBookTicketByUser);
router
  .route("/create")
  .post(verifyAccessToken, bookTicketcontroller.createBookTicket);
router.route("/delete").delete(bookTicketcontroller.deleteBookTicket);

export default router;
