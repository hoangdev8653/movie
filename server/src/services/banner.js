import Banner from "../models/banner.js";
import createHttpError from "http-errors";

const getAllBanner = async () => {
  try {
    return await Banner.find().populate(
      "movieId",
      "tenPhim _id hinhAnh trailer"
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createBanner = async ({ movieId }) => {
  try {
    const banner = await Banner.findOne({ movieId });
    if (banner) {
      throw createHttpError(409, "Banner already exists");
    }
    const newBanner = await Banner.create({ movieId });
    return newBanner;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteBanner = async (id) => {
  try {
    const banner = await Banner.findById(id);
    if (!banner) {
      throw createHttpError(404, "Banner Not Found");
    }
    return await Banner.deleteOne({ _id: id });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const bannerService = {
  getAllBanner,
  createBanner,
  deleteBanner,
};
