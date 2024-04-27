import { StatusCodes } from "http-status-codes";
import { rapService } from "../services/rap.js";
const getAllRap = async (req, res, next) => {
  try {
    const rap = await rapService.getAllRap();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: rap });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getRapByHethong = async (req, res, next) => {
  try {
    const maHeThong = req.params.maHeThong;
    const rap = await rapService.getRapByHethong(maHeThong);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: rap });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const createRap = async (req, res, next) => {
  try {
    const { tenRap, hinhAnh, diaChi, heThongRapId } = req.body;
    const fileData = req.file;
    const rap = await rapService.createRap({
      tenRap,
      hinhAnh: fileData?.path,
      diaChi,
      heThongRapId,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ status: 201, message: "xử lý thành công", content: rap });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteRap = async (req, res, next) => {
  try {
    const id = req.query.id;
    const rap = await rapService.deleteRap(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: rap });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const rapController = {
  getAllRap,
  getRapByHethong,
  createRap,
  deleteRap,
};
