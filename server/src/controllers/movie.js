import { StatusCodes } from "http-status-codes";
import { movieService } from "../services/movie.js";

const getAllMovie = async (req, res, next) => {
  try {
    const movie = await movieService.getAllMovie();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: movie });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const createMovie = async (req, res, next) => {
  try {
    const {
      tenPhim,
      hinhAnh,
      moTa,
      ngayKhoiChieu,
      dangChieu,
      sapChieu,
      daoDien,
      dienVien,
      theLoai,
      quocGia,
      thoiLuong,
      rapId,
    } = req.body;
    const fileHinhAnh = req.file;
    console.log(fileHinhAnh);
    const movie = await movieService.createMovie({
      tenPhim,
      hinhAnh: fileHinhAnh?.path,
      moTa,
      ngayKhoiChieu,
      dangChieu,
      sapChieu,
      daoDien,
      dienVien,
      theLoai,
      quocGia,
      thoiLuong,
      rapId,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ status: 201, message: "Xử lý thành công", content: movie });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const updateTrailerMovie = async (req, res, next) => {
  try {
    const id = req.query.id;
    const { trailer } = req.body;
    const fileData = req.file;
    console.log(fileData);
    console.log(req.body);
    const movie = await movieService.updateTrailerMovie(id, {
      trailer: fileData?.path,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ status: 201, message: "Xử lý thành công", content: movie });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
  }
  next(error);
};

const deleteMovie = async (req, res, next) => {
  try {
    const id = req.query.id;
    const movie = await movieService.deleteMovie(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: movie });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

export const movieController = {
  getAllMovie,
  createMovie,
  updateTrailerMovie,
  deleteMovie,
};
