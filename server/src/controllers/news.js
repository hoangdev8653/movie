import { newsService } from "../services/news.js";
import { StatusCodes } from "http-status-codes";

const getAllNews = async (req, res, next) => {
  try {
    const news = await newsService.getAllNews();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: news });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const createNews = async (req, res, next) => {
  try {
    const { tieuDe, hinhAnh, noiDung } = req.body;
    const fileData = req.file;
    const news = await newsService.createNews({
      tieuDe,
      hinhAnh: fileData?.path,
      noiDung,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ status: 201, message: "Xử lý thành công", content: news });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const deleteNews = async (req, res, next) => {
  try {
    const id = req.query.id;
    const news = await newsService.deleteNews(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: news });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

export const newsController = {
  getAllNews,
  createNews,
  deleteNews,
};
