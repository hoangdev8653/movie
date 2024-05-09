import createHttpError from "http-errors";
import Movie from "../models/movie.js";

const getAllMovie = async () => {
  try {
    return await Movie.find();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getMovieBySlug = async (slug) => {
  try {
    const movie = await Movie.find();
    const movieBySlug = movie.filter((item) => {
      return item.slug === slug;
    });
    return await movieBySlug;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getMovieDangChieu = async () => {
  try {
    const movie = await Movie.find();
    const movieDangChieu = movie.filter((movie) => movie.dangChieu === true);
    return await movieDangChieu;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const getMovieSapChieu = async () => {
  try {
    const movie = await Movie.find();
    const movieSapChieu = movie.filter((movie) => movie.sapChieu === true);
    return movieSapChieu;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createMovie = async ({
  tenPhim,
  hinhAnh,
  moTa,
  ngayKhoiChieu,
  dangChieu,
  sapChieu,
  daoDien,
  dienVien,
  theLoai,
  quocGia,
  thoiLuong,
  slug,
}) => {
  try {
    const movieExits = await Movie.findOne({ tenPhim });
    const rapIdExits = await Movie.findOne({ rapId });
    if (movieExits && rapIdExits) {
      throw createHttpError.Conflict("Movie is alredy");
    }
    const movie = new Movie({
      tenPhim,
      hinhAnh,
      moTa,
      ngayKhoiChieu,
      dangChieu,
      sapChieu,
      daoDien,
      dienVien,
      theLoai,
      quocGia,
      thoiLuong,
      slug,
    });
    return await movie.save();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateTrailerMovie = async (id, { trailer }) => {
  try {
    console.log(id);
    const movieExits = await Movie.findById(id);
    if (!movieExits) {
      throw createHttpError.NotFound("Movie Not Found");
    }
    return await Movie.findByIdAndUpdate(id, { trailer }, { new: true });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteMovie = async (id) => {
  try {
    const movie = await Movie.findById(id);
    if (!movie) {
      createHttpError.NotFound("Movie Not Found!");
    }
    return await Movie.deleteOne({ _id: id });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getMovieByRap = async (tenRap) => {
  try {
    const rap = await Movie.find().populate("rapId");
    const res = rap.filter((item) => {
      return item.rapId.tenRap == tenRap;
    });
    return await res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const movieService = {
  getAllMovie,
  getMovieBySlug,
  getMovieDangChieu,
  getMovieSapChieu,
  createMovie,
  updateTrailerMovie,
  deleteMovie,
};
