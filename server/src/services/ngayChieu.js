import createHttpError from "http-errors";
import NgayChieuModel from "../models/ngayChieu.js";

const getAllNgayChieu = async () => {
  try {
    return await NgayChieuModel.find().populate("rapId");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getNgayChieuById = async (id) => {
  try {
    const ngaychieu = await NgayChieuModel.findById(id).populate("rapId");
    if (!ngaychieu) {
      throw Error("NgayChieu Not Found");
    }
    return ngaychieu;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createNgayChieu = async ({ ngaychieu, rapId }) => {
  try {
    return await NgayChieuModel.create({ ngaychieu, rapId });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateNgayChieu = async (id, { ngaychieu, rapId }) => {
  try {
    const ngayChieu = await NgayChieuModel.findById(id);
    if (!ngayChieu) {
      throw Error("NgayChieu Not Found");
    }
    return await NgayChieuModel.findByIdAndUpdate(
      id,
      { ngaychieu, rapId },
      { new: true }
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteNgayChieu = async (id) => {
  try {
    const ngayChieu = await NgayChieuModel.findById(id);
    if (!ngayChieu) {
      throw Error("NgayChieu Not Found");
    }
    return await NgayChieuModel.deleteOne({ _id: id });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const ngayChieuService = {
  getAllNgayChieu,
  getNgayChieuById,
  createNgayChieu,
  updateNgayChieu,
  deleteNgayChieu,
};
