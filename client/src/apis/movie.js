import { axiosConfig } from "../axiosConfig";

export const getAllMovie = async () => {
  return await axiosConfig({
    method: "get",
    url: "/movie/",
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
