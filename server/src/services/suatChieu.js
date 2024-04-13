import createHttpError from "http-errors";
import SuatChieu from "../models/suatChieu.js";

const getSuatChieuByMovie = async () => {
  try {
    return await SuatChieu.find().populate(
      "movieId",
      "tenPhim ngayKhoiChieu dangChieu sapChieu hinhAnh"
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createSuatChieu = async ({ ngaychieu, gioChieu, movieId }) => {
  try {
    return await SuatChieu.create({ ngaychieu, gioChieu, movieId });
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
  getSuatChieuByMovie,
  createSuatChieu,
  deleteSuatChieu,
};
