import createHttpError from "http-errors";
import Rap from "../models/rap.js";

const getAllRap = async () => {
  try {
    const rap = await Rap.find().populate("heThongRapId", "maHeThongRap -_id");
    return rap;
  } catch (error) {
    console.log(error);
  }
};

const getRapByHethong = async (maHeThong) => {
  try {
    const rap = await Rap.find().populate("heThongRapId", " -_id");
    const rapCgv = rap.filter(
      (item) => item.heThongRapId.maHeThongRap === maHeThong.toUpperCase()
    );
    return rapCgv;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createRap = async ({ tenRap, hinhAnh, diaChi, heThongRapId }) => {
  try {
    const rap = new Rap({ tenRap, hinhAnh, diaChi, heThongRapId });
    return await rap.save();
  } catch (error) {
    console.log(error);
  }
};

const deleteRap = async (id) => {
  try {
    const rap = await Rap.findById(id);
    if (!rap) {
      throw createHttpError.NotFound("Rap not found");
    }
    return await rap.deleteOne({ _id: id });
  } catch (error) {
    console.log(error);
  }
};

export const rapService = {
  getAllRap,
  getRapByHethong,
  createRap,
  deleteRap,
};
