import GioChieu from "../models/giochieu.js";
import createHttpError from "http-errors";

const getAllGioChieu = async () => {
  try {
    const gioChieu = await GioChieu.find().populate({
      path: "suatChieuId",
      populate: [
        { path: "movieId", select: "tenPhim hinhAnh" },
        { path: "rapId", select: "tenRap hinhAnh" },
      ],
    });
    return gioChieu;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getGioChieuById = async (id) => {
  try {
    const gioChieu = await GioChieu.findById(id).populate({
      path: "suatChieuId",
      populate: [
        { path: "movieId", select: "tenPhim hinhAnh" },
        { path: "rapId", select: "tenRap hinhAnh" },
      ],
    });
    if (!gioChieu) {
      throw createHttpError.NotFound("Gio Chieu Not Found");
    }
    return await gioChieu;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const getGiochieuByMovieId = async (id) => {
  try {
    console.log(id);
    const gioChieuList = await GioChieu.find().populate({
      path: "suatChieuId",
      populate: [
        { path: "movieId", select: "tenPhim hinhAnh" },
        { path: "rapId", select: "tenRap hinhAnh" },
      ],
    });
    const filteredGioChieuList = await gioChieuList.filter(
      (item) => item.suatChieuId.movieId._id.toString() === id.toString()
    );
    return filteredGioChieuList;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const createGioChieu = async ({ gioChieu, danhSachGhe, suatChieuId }) => {
  try {
    const existingGioChieu = await GioChieu.findOne({ gioChieu, suatChieuId });
    if (existingGioChieu) {
      throw new Error("Gio Chieu is already");
    } else {
      const newGioChieu = new GioChieu({
        gioChieu,
        danhSachGhe: [],
        suatChieuId,
      });
      for (let i = 1; i <= 100; i++) {
        newGioChieu.danhSachGhe.push({
          soGhe: `${i}`,
          trangThai: "Trong",
        });
      }
      return await newGioChieu.save();
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateStatusGhe = async (id, idGhe) => {
  try {
    const gioChieu = await GioChieu.findById(id);
    if (!gioChieu) {
      throw createHttpError.NotFound("Gio Chieu Not Found");
    }
    const dsGhe = gioChieu.danhSachGhe.find(
      (ghe) => ghe._id.toString() === idGhe
    );
    dsGhe.trangThai = "DaDat";
    return await gioChieu.save();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteGioChieu = async (id) => {
  try {
    const gioChieu = await GioChieu.findById(id);
    if (!gioChieu) {
      throw createHttpError.NotFound("gio Chieu chua ton tai");
    }
    return await GioChieu.deleteOne({ _id: id });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const gioChieuService = {
  getAllGioChieu,
  getGioChieuById,
  getGiochieuByMovieId,
  updateStatusGhe,
  createGioChieu,
  deleteGioChieu,
};
