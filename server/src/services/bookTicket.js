import BookTicKet from "../models/bookTicket.js";
import createHttpError from "http-errors";
import GioChieu from "../models/giochieu.js";

const getBookTicketByUser = async (userId) => {
  try {
    const ticketUser = await BookTicKet.find({ userId })
      .populate("userId", "username avarta")
      .populate({
        path: "gioChieuId",
        select: "gioChieu",
        populate: {
          path: "suatChieuId",
          populate: [
            {
              path: "movieId",
              select: "tenPhim hinhAnh",
            },
            {
              path: "rapId",
              select: "tenRap hinhAnh",
            },
          ],
        },
      });
    return ticketUser;
  } catch (error) {
    console.log(error);
    throw createHttpError(error);
  }
};
const createBookTicket = async (id, { gioChieuId, danhSachGhe, tongTien }) => {
  try {
    const gioChieu = await GioChieu.findById(gioChieuId).populate(
      "suatChieuId",
      "giaVe"
    );
    for (const ghe of danhSachGhe) {
      const seat = gioChieu.danhSachGhe.find((seat) => seat.soGhe === ghe);
      if (seat) {
        seat.trangThai = "DaDat";
      }
      await gioChieu.save();
    }
    const tongTien = danhSachGhe.length * parseInt(gioChieu.suatChieuId.giaVe);
    const ticket = await BookTicKet.create({
      userId: id,
      gioChieuId,
      danhSachGhe,
      tongTien: tongTien,
    });
    return ticket.save();
  } catch (error) {
    console.log(error);
    throw createHttpError(error);
  }
};

const deleteBookTicket = async (id) => {
  try {
    const ticket = await BookTicKet.findById(id);
    if (!ticket) {
      throw createHttpError.NotFound("Ticket Not Found");
    }
    return await BookTicKet.deleteOne({ _id: id });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const bookTicketService = {
  getBookTicketByUser,
  createBookTicket,
  deleteBookTicket,
};
