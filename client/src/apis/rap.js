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
