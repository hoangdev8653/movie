import StatusCodes from "http-status-codes";
import { bookTicketService } from "../services/bookTicket.js";

const getBookTicketByUser = async (req, res, next) => {
  try {
    const id = req.userId;
    const ticket = await bookTicketService.getBookTicketByUser(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: ticket });
  } catch (error) {
    console.log(error.mesage);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const createBookTicket = async (req, res, next) => {
  try {
    const id = req.userId;
    const { suatChieuId, gioChieuId, danhSachGhe, giaVe, tongTien } = req.body;
    const ticket = await bookTicketService.createBookTicket(id, {
      suatChieuId,
      gioChieuId,
      danhSachGhe,
      giaVe,
      tongTien,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ status: 201, message: "Xử lý thành công", content: ticket });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const deleteBookTicket = async (req, res, next) => {
  try {
    const id = req.query.id;
    const ticket = await bookTicketService.deleteBookTicket(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "xử lý thành công", content: ticket });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

export const bookTicketcontroller = {
  getBookTicketByUser,
  createBookTicket,
  deleteBookTicket,
};
