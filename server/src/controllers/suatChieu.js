import { StatusCodes } from "http-status-codes";
import { suatChieuService } from "../services/suatChieu.js";

const getAllSuatChieu = async (req, res, next) => {
  try {
    const id = req.query.id;
    const suatChieu = await suatChieuService.getAllSuatChieu(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: suatChieu });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const getSuatChieuById = async (req, res, next) => {
  try {
    const idSuatChieu = req.query.idSuatChieu;
    const suatChieu = await suatChieuService.getSuatChieuById(idSuatChieu);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: suatChieu });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const getSuatChieuByMovie = async (req, res, next) => {
  try {
    const id = req.query.id;
    const suatChieu = await suatChieuService.getSuatChieuByMovie(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: suatChieu });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const createSuatChieu = async (req, res, next) => {
  try {
    const { ngaychieu, movieId, rapId, giaVe } = req.body;
    const suatChieu = await suatChieuService.createSuatChieu({
      ngaychieu,
      movieId,
      rapId,
      giaVe,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ status: 201, message: "xử lý thành công", content: suatChieu });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const deleteSuatChieu = async (req, res, next) => {
  try {
    const id = req.query.id;
    const suatChieu = await suatChieuService.deleteSuatChieu(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: suatChieu });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

export const suaChieuController = {
  getAllSuatChieu,
  getSuatChieuById,
  getSuatChieuByMovie,
  createSuatChieu,
  deleteSuatChieu,
};
