import GioChieuModel from "../models/giochieu.js";
import createHttpError from "http-errors";

const getAllGioChieu = async () => {
  try {
    return await GioChieuModel.find()
      .select("-danhSachGhe")
      .populate("ngayChieuId");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getGioChieuById = async (id) => {
  try {
    const gioChieu = await GioChieuModel.findById(id).populate({
      path: "ngayChieuId",
      populate: {
        path: "rapId",
      },
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
const createGioChieu = async ({ gioChieu, ngayChieuId, tienGhe }) => {
  try {
    const newGioChieu = new GioChieuModel({
      gioChieu,
      danhSachGhe: [],
      ngayChieuId,
      tienGhe,
    });
    for (let i = 1; i <= 100; i++) {
      newGioChieu.danhSachGhe.push({
        soGhe: `${i}`,
        trangThai: "Trong",
      });
    }
    return await newGioChieu.save();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateGioChieu = async (id, { gioChieu, ngayChieuId, tienGhe }) => {
  try {
    const gc = await GioChieuModel.findById(id);
    if (!gc) {
      throw Error("GioChieu Not Found");
    }
    return await GioChieuModel.findByIdAndUpdate(
      id,
      {
        gioChieu,
        ngayChieuId,
        tienGhe,
      },
      { new: true }
    );
  } catch (error) {
    console.log(error);
  }
};

const updateStatusGhe = async (id, idGhe) => {
  try {
    const gioChieu = await GioChieuModel.findById(id);
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
    const gioChieu = await GioChieuModel.findById(id);
    if (!gioChieu) {
      throw createHttpError.NotFound("GioChieu Not Found");
    }
    return await GioChieuModel.deleteOne({ _id: id });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const gioChieuService = {
  getAllGioChieu,
  getGioChieuById,
  createGioChieu,
  updateGioChieu,
  updateStatusGhe,
  deleteGioChieu,
};
