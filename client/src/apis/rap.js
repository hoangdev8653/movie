import { axiosConfig } from "../axiosConfig";

export const getAllRap = async () => {
  return await axiosConfig({
    method: "get",
    url: "/rap/",
  });
};

export const getRapBySlug = async (slug) => {
  return await axiosConfig({
    method: "get",
    url: `/rap/:${slug}`,
  });
};

export const getRapByHeThongRap = async (maHeThong) => {
  return await axiosConfig({
    method: "get",
    url: `/rap/${maHeThong}`,
  });
};

export const getRapById = async (id) => {
  return await axiosConfig({
    method: "get",
    url: `/rap/getById?id=${id}`,
  });
};

export const createRap = async (data) => {
  return await axiosConfig({
    method: "post",
    url: "/rap/create",
    data,
  });
};

export const updateRap = async (id, data) => {
  return await axiosConfig({
    method: "put",
    url: `/rap/update?id=${id}`,
    data,
  });
};

export const deleteRap = async (id) => {
  return await axiosConfig({
    method: "delete",
    url: `/rap/delete?id=${id}`,
  });
};
