import { axiosConfig } from "../axiosConfig";

export const getAllGioChieu = async () => {
  return await axiosConfig({
    method: "get",
    url: "/gioChieu/",
  });
};

export const getGioChieuById = async (id) => {
  return await axiosConfig({
    method: "get",
    url: `/gioChieu/getById?id=${id}`,
  });
};

export const createGioChieu = async (data) => {
  return await axiosConfig({
    method: "post",
    url: "/gioChieu/create/",
    data,
  });
};

export const updateGioChieu = async (id, data) => {
  return await axiosConfig({
    method: "put",
    url: `/gioChieu/updateGioChieu/?id=${id}`,
    data,
  });
};

export const updateStatusGhe = async (id, idGhe) => {
  return await axiosConfig({
    method: "put",
    url: `/gioChieu/updateStatusGhe/?id=${id}&idGhe=${idGhe}`,
  });
};

export const deleteGioChieu = async (id) => {
  return await axiosConfig({
    method: "delete",
    url: `/gioChieu/delete/?id=${id}`,
  });
};
