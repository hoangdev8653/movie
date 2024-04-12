import createHttpError from "http-errors";
import Movie from "../models/movie.js";

const getAllMovie = async () => {
  try {
    return await Movie.find().populate("rapId");
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
  rapId,
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
      rapId,
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

const getMovieCgvVincom = async () => {
  try {
    const movies = await Movie.find().populate("rapId");
    const movieCgvVinCom = await movies.filter(
      (movie) => movie.rapId.tenRap === "CGV Vincom Đà Nẵng"
    );
    return await movieCgvVinCom;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getMovieCgvVinhTrung = async () => {
  try {
    const movies = await Movie.find().populate("rapId");
    const movieCgvVinnhTrung = await movies.filter(
      (movie) => movie.rapId.tenRap === "CGV Vĩnh Trung Plaza"
    );
    return await movieCgvVinnhTrung;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getMovieGalaxyDaNang = async () => {
  try {
    const movies = await Movie.find().populate("rapId");
    const movieGalaxyDaNang = await movies.filter(
      (movie) => movie.rapId.tenRap === "Galaxy Đã Nẵng"
    );
    return await movieGalaxyDaNang;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getMovieLotteDaNang = async () => {
  try {
    const movies = await Movie.find().populate("rapId");
    const movieLotteDaNang = await movies.filter(
      (movie) => movie.rapId.tenRap === "Lotte Đã Nẵng"
    );
    return await movieLotteDaNang;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getMovieLotteHoiAn = async () => {
  try {
    const movies = await Movie.find().populate("rapId");
    const movieLotteHoiAn = await movies.filter(
      (movie) => movie.rapId.tenRap === "Lotte Hội An"
    );
    return await movieLotteHoiAn;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getMovieStarlightDaNang = async () => {
  try {
    const movies = await Movie.find().populate("rapId");
    const movieStarlightDaNang = await movies.filter(
      (movie) => movie.rapId.tenRap === "Starlight Đà Nẵng"
    );
    return await movieStarlightDaNang;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const movieService = {
  getAllMovie,
  createMovie,
  updateTrailerMovie,
  deleteMovie,
  getMovieCgvVincom,
  getMovieCgvVinhTrung,
  getMovieGalaxyDaNang,
  getMovieLotteDaNang,
  getMovieLotteHoiAn,
  getMovieStarlightDaNang,
};
