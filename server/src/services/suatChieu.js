import createHttpError from "http-errors";
import SuatChieu from "../models/suatChieu.js";

const getAllSuatChieu = async () => {
  try {
    const suatChieu = await SuatChieu.find()
      .populate("movieId", "tenPhim ngayKhoiChieu dangChieu sapChieu hinhAnh")
      .populate("rapId");
    return suatChieu;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getSuatChieuById = async (idSuatChieu) => {
  try {
    let suatChieus = await SuatChieu.findById(idSuatChieu)
      .populate("movieId", "tenPhim ngayKhoiChieu dangChieu sapChieu hinhAnh")
      .populate("rapId");
    return suatChieus;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getSuatChieuByMovie = async (id) => {
  try {
    const suatChieu = await SuatChieu.find()
      .populate("movieId", "tenPhim  hinhAnh")
      .populate("rapId");
    const movie = suatChieu.filter((item) => {
      return item.movieId._id == id;
    });
    return movie;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createSuatChieu = async ({ ngaychieu, movieId, rapId, giaVe }) => {
  try {
    return await SuatChieu.create({
      ngaychieu,
      movieId,
      rapId,
      giaVe,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteSuatChieu = async (id) => {
  try {
    const suatChieu = await SuatChieu.findById(id);
    if (!suatChieu) {
      throw createHttpError.NotFound("Suất chiếu không tồn tại");
    }
    return await SuatChieu.deleteOne({ _id: id });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const suatChieuService = {
  getAllSuatChieu,
  getSuatChieuById,
  getSuatChieuByMovie,
  createSuatChieu,
  deleteSuatChieu,
};
