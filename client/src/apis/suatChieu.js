import { axiosConfig } from "../axiosConfig";

export const getSuatChieu = async () => {
  return await axiosConfig({
    method: "get",
    url: "/suatChieu",
  });
};

export const getSuatChieuById = async (id) => {
  return await axiosConfig({
    method: "get",
    url: `/suatChieu/getById/?idSuatChieu=${id}`,
  });
};

export const getSuatChieuByMovie = async (movieId) => {
  return await axiosConfig({
    method: "get",
    url: `/suatChieu/getByMovied/?id=${id}`,
  });
};

export const createSuatChieu = async (data) => {
  return await axiosConfig({
    method: "post",
    url: "/suatChieu/create",
    data,
  });
};

export const deleteSuatChieu = async (id) => {
  return await axiosConfig({
    method: "delete",
    url: `/suatChieu/delete/?id=${id}`,
  });
};
