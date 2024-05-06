import { axiosConfig } from "../axiosConfig";

export const getAllMovie = async () => {
  return await axiosConfig({
    method: "get",
    url: "/movie/",
  });
};

export const getAllMovieBySlug = async (slug) => {
  return await axiosConfig({
    method: "get",
    url: `/movie/${slug}`,
  });
};

export const getAllBanner = async () => {
  return await axiosConfig({
    method: "get",
    url: "/banner/",
  });
};

export const getAllMovieSapChieu = async () => {
  return await axiosConfig({
    method: "get",
    url: "/movie/sapChieu",
  });
};

export const getAllMovieDangChieu = async () => {
  return await axiosConfig({
    method: "get",
    url: "/movie/dangChieu",
  });
};
