import { axiosConfig } from "../axiosConfig";

export const getSuatChieuByMovie = async (id) => {
  return await axiosConfig({
    method: "get",
    url: `/gioChieu/getByMovieId/?movieId=${id}`,
  });
};

export const getGioChieuById = async (id) => {
  return await axiosConfig({
    method: "get",
    url: `/gioChieu/getById?id=${id}`,
  });
};
