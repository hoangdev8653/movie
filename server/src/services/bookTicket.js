import BookTicKet from "../models/bookTicket.js";
import createHttpError from "http-errors";

// const getBookTicketByUser = async (id) => {
//   try {
//     const ticketUser = await BookTicKet.find()
//       .populate("userId", "email username avarta")
//       .populate("suatChieuId");
//     return ticketUser;
//   } catch (error) {
//     console.log(error);
//     throw createHttpError(error);
//   }
// };
const getBookTicketByUser = async (userId) => {
  try {
    const ticketUser = await BookTicKet.find()
      .populate({
        path: "suatChieuId",
        populate: {
          path: "suatChieus",
          select: "gioChieu",
        },
        populate: {
          path: "movieId",
          select: "tenPhim hinhAnh rapId",
        },
      })
      .populate("userId", "email username avarta");
    return ticketUser;
  } catch (error) {
    console.log(error);
    throw createHttpError(error);
  }
};

const createBookTicket = async (id, { suatChieuId, danhSachGhe }) => {
  try {
    const ticket = await BookTicKet.create({
      userId: id,
      suatChieuId,
      danhSachGhe,
    });
    return ticket;
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
