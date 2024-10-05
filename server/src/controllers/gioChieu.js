import { StatusCodes } from "http-status-codes";
import { gioChieuService } from "../services/gioChieu.js";

const getAllGioChieu = async (req, res, next) => {
  try {
    const gioChieu = await gioChieuService.getAllGioChieu();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: gioChieu });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
  }
};

const getGioChieuById = async (req, res, next) => {
  try {
    const id = req.query.id;
    const gioChieu = await gioChieuService.getGioChieuById(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: gioChieu });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
  }
};

const createGioChieu = async (req, res, next) => {
  try {
    const { gioChieu, ngayChieuId } = req.body;
    const gc = await gioChieuService.createGioChieu({
      gioChieu,
      ngayChieuId,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ status: 201, message: "Xử lý thành công", content: gc });
  } catch (error) {
    console.log(error.message);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const updateStatusGhe = async (req, res, next) => {
  try {
    const id = req.query.id;
    const idGhe = req.query.idGhe;
    const ghe = await gioChieuService.updateStatusGhe(id, idGhe);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: ghe });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const deleteGioChieu = async (req, res, next) => {
  try {
    const id = req.query.id;
    const gc = await gioChieuService.deleteGioChieu(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: gc });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

export const gioChieuController = {
  getAllGioChieu,
  // getGioChieuByMovieId,
  getGioChieuById,
  updateStatusGhe,
  createGioChieu,
  deleteGioChieu,
};
