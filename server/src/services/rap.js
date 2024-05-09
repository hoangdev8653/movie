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

const getRapById = async (id) => {
  try {
    const rap = await Rap.findById(id);
    if (!rap) {
      throw createHttpError(404, "Rap Not Found");
    }
    return await rap;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getRapBySlug = async (slug) => {
  try {
    const rap = await Rap.find();
    const rapBySlug = rap.filter((item) => {
      return item.slug === slug;
    });
    return await rapBySlug;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getRapByHethong = async (maHeThong) => {
  try {
    const rap = await Rap.find().populate("heThongRapId", " -_id");

    const rapByHeThong = await rap.filter((item) => {
      return item.heThongRapId && item.heThongRapId.maHeThongRap === maHeThong;
    });
    return rapByHeThong;
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

const updateRap = async (
  id,
  { tenRap, hinhAnh, diaChi, heThongRapId, slug }
) => {
  try {
    const rap = await Rap.findById(id);
    if (!rap) {
      throw createHttpError(404, "Rap Not Found");
    }
    return await Rap.findByIdAndUpdate(
      id,
      { tenRap, hinhAnh, diaChi, heThongRapId, slug },
      { new: true }
    );
  } catch (error) {
    console.log(error);
    throw error;
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
  getRapBySlug,
  getRapById,
  getRapByHethong,
  updateRap,
  createRap,
  deleteRap,
};
