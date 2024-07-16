import { axiosConfig } from "../axiosConfig";

export const getAllHeThongRap = async () => {
  return await axiosConfig({
    method: "get",
    url: "/heThongRap/",
  });
};

export const createHeThongRap = async (data) => {
  return await axiosConfig({
    method: "post",
    url: "/heThongRap/create",
    data,
  });
};

export const deleteHeThongRap = async (id) => {
  return await axiosConfig({
    method: "delete",
    url: `/heThongRap/delete?id${id}`,
  });
};
