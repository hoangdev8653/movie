import GioChieu from "../models/giochieu.js";
import createHttpError from "http-errors";

const getAllGioChieu = async () => {
  try {
    const gioChieu = await GioChieu.find();
    return gioChieu;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getGioChieuById = async (id, idGhe) => {
  try {
    const gioChieu = await GioChieu.findById(id);
    if (!gioChieu) {
      throw createHttpError.NotFound("Gio Chieu Not Found");
    }
    console.log(gioChieu);
    const dsGhe = gioChieu.danhSachGhe.find(
      (ghe) => ghe._id.toString() === idGhe
    );
    console.log(dsGhe);
    return await dsGhe;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createGioChieu = async ({ gioChieu, danhSachGhe }) => {
  try {
    const newGioChieu = new GioChieu({
      gioChieu,
      danhSachGhe: [],
    });
    for (let i = 1; i <= 50; i++) {
      newGioChieu.danhSachGhe.push({
        soGhe: `Ghế ${i}`,
        trangThai: "Trong",
      });
    }
    return await newGioChieu.save();
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
  updateStatusGhe,
  createGioChieu,
  deleteGioChieu,
};
