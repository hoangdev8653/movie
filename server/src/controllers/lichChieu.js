import { StatusCodes } from "http-status-codes";
import { lichChieuServices } from "../services/lichChieu.js";

const getAllLichChieu = async (req, res, next) => {
  try {
    const lichChieu = await lichChieuServices.getAllLichChieu();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: lichChieu });
  } catch (error) {
    console.log(error);
    next(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
  }
};

const getLichChieuById = async (req, res, next) => {
  try {
    const id = req.query.id;
    const lichChieu = await lichChieuServices.getLichChieuById(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: lichChieu });
  } catch (error) {
    console.log(error);
    next(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Errror" });
  }
};

const getLichChieuByMovieId = async (req, res, next) => {
  try {
    const id = req.query.id;
    const lichChieu = await lichChieuServices.getLichChieuByMovieId(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: lichChieu });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
  }
};

const createLichChieu = async (req, res, next) => {
  try {
    const { gioChieuId, movieId } = req.body;
    const gioChieu = await lichChieuServices.createLichChieu({
      gioChieuId,
      movieId,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ status: 201, message: "Xử lý thành công", content: gioChieu });
  } catch (error) {
    console.log(error);
    next(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 200, message: "Server Error" });
  }
};

const updateLichChieu = async (req, res, next) => {
  try {
    const id = req.query.id;
    const { gioChieuId, movieId } = req.body;
    const lichChieu = await lichChieuServices.updateLichChieu(id, {
      gioChieuId,
      movieId,
    });
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: lichChieu });
  } catch (error) {
    console.log(error);
    next(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
  }
};

const deleteLichChieu = async (req, res, next) => {
  try {
    const id = req.query.id;
    const lichchieu = await lichChieuServices.deleteLichChieu(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: lichchieu });
  } catch (error) {
    console.log(error);
    next(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
  }
};

export const lichChieuControllers = {
  getAllLichChieu,
  getLichChieuById,
  getLichChieuByMovieId,
  createLichChieu,
  updateLichChieu,
  deleteLichChieu,
};
