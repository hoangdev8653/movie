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

const updateMovie = async (
  id,
  {
    tenPhim,
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
  }
) => {
  try {
    const movie = await Movie.findById(id);
    if (!movie) {
      throw createHttpError.NotFound("Movie Not Found");
    }

    return await Movie.findByIdAndUpdate(
      id,
      {
        tenPhim,
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
      },
      { new: true }
    );
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

export const movieService = {
  getAllMovie,
  getMovieBySlug,
  getMovieDangChieu,
  getMovieSapChieu,
  createMovie,
  updateMovie,
  updateTrailerMovie,
  deleteMovie,
};
