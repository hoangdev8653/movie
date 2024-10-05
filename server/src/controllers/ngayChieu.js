import { StatusCodes } from "http-status-codes";
import { ngayChieuService } from "../services/ngayChieu.js";

const getAllNgayChieu = async (req, res, next) => {
  try {
    const ngayChieu = await ngayChieuService.getAllNgayChieu();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: ngayChieu });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const getNgayChieuById = async (req, res, next) => {
  try {
    const id = req.query.id;
    const ngayChieu = await ngayChieuService.getNgayChieuById(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: ngayChieu });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const createNgayChieu = async (req, res, next) => {
  try {
    const { ngaychieu, rapId } = req.body;
    const ngayChieu = await ngayChieuService.createNgayChieu({
      ngaychieu,
      rapId,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ status: 201, message: "xử lý thành công", content: ngayChieu });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const updateNgayChieu = async (req, res, next) => {
  try {
    const id = req.query.id;
    const { ngaychieu, rapId } = req.body;
    const ngayChieu = await updateNgayChieu(id, { ngaychieu, rapId });
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: ngayChieu });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
  }
};

const deleteNgayChieu = async (req, res, next) => {
  try {
    const id = req.query.id;
    const ngayChieu = await ngayChieuService.deleteNgayChieu(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: ngayChieu });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

export const ngayChieuController = {
  getAllNgayChieu,
  getNgayChieuById,
  createNgayChieu,
  updateNgayChieu,
  deleteNgayChieu,
};
