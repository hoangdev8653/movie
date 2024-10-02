import { bannerService } from "../services/banner.js";
import { StatusCodes } from "http-status-codes";
const getAllBanner = async (req, res, next) => {
  try {
    const banner = await bannerService.getAllBanner();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: banner });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const createBanner = async (req, res, next) => {
  try {
    const { movieId } = req.body;
    const banner = await bannerService.createBanner({ movieId });
    return res
      .status(StatusCodes.CREATED)
      .json({ status: 201, message: "Xử lý thành công", content: banner });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const deleteBanner = async (req, res, next) => {
  try {
    const id = req.query.id;
    const banner = await bannerService.deleteBanner(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: banner });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

export const bannerController = {
  getAllBanner,
  createBanner,
  deleteBanner,
};
