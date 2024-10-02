import { axiosConfig } from "../axiosConfig";

export const getAllGioChieu = async () => {
  return await axiosConfig({
    method: "get",
    url: "/gioChieu/",
  });
};

export const getAllMovieDangChieu = async () => {
  return await axiosConfig({
    method: "get",
    url: "/movie/dangChieu",
  });
};

export const getAllMovieSapChieu = async () => {
  return await axiosConfig({
    method: "get",
    url: "/movie/sapChieu",
  });
};

export const getGioChieuByMovie = async (id) => {
  return await axiosConfig({
    method: "get",
    url: `/movie/getByMovieId/?movieId=${id}`,
  });
};

export const getGioChieuById = async (id) => {
  return await axiosConfig({
    method: "get",
    url: `/movie/getById?id=${id}`,
  });
};

export const createGioChieu = async (data) => {
  return await axiosConfig({
    method: "post",
    url: "/gioChieu/create/",
    data,
  });
};

export const deleteGioChieu = async (id) => {
  return await axiosConfig({
    method: "delete",
    url: `/gioChieu/delete/?id=${id}`,
  });
};
