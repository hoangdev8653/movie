import createHttpError from "http-errors";
import HeThongRap from "../models/heThongRap.js";

const getAllHethongRap = async () => {
  try {
    const heThongRap = await HeThongRap.find();
    return heThongRap;
  } catch (error) {
    console.log(error);
  }
};

const createHeThongRap = async ({ maHeThongRap, tenHeThongRap, logo }) => {
  try {
    const heThongRap = new HeThongRap({
      maHeThongRap,
      tenHeThongRap,
      logo,
    });
    return await heThongRap.save();
  } catch (error) {
    console.log(error);
  }
};

const deleteHeThongRap = async (id) => {
  try {
    const heThongRap = await HeThongRap.findById(id);
    if (!heThongRap) {
      throw createHttpError.NotFound("Hệ Thống rạp không tồn tại");
    }
    return await HeThongRap.deleteOne({ _id: id });
  } catch (error) {
    console.log(error);
  }
};

export const heThongRapService = {
  getAllHethongRap,
  createHeThongRap,
  deleteHeThongRap,
};
