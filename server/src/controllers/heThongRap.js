import StatusCodes from "http-status-codes";
import { heThongRapService } from "../services/heThongRap.js";

const getAllHeThongRap = async (req, res, next) => {
  try {
    const heThongRap = await heThongRapService.getAllHethongRap();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: heThongRap });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const createHeThongRap = async (req, res, next) => {
  try {
    const { maHeThongRap, tenHeThongRap, logo } = req.body;
    const fileData = req.file;
    const heThongRap = await heThongRapService.createHeThongRap({
      maHeThongRap,
      tenHeThongRap,
      logo: fileData?.path,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ status: 201, message: "Xử lý thành công", content: heThongRap });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deteleHeThongRap = async (req, res, next) => {
  try {
    const id = req.query.id;
    const heThongRap = await heThongRapService.deleteHeThongRap(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: heThongRap });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const heThongRapController = {
  getAllHeThongRap,
  createHeThongRap,
  deteleHeThongRap,
};
