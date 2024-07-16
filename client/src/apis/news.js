import { axiosConfig } from "../axiosConfig";

export const getAllNews = async () => {
  return axiosConfig({
    method: "get",
    url: "/news/",
  });
};

export const createNews = async (data) => {
  return axiosConfig({
    method: "post",
    url: "/news/create/",
    data,
  });
};

export const deleteNews = async (id) => {
  return axiosConfig({
    method: "delete",
    url: `/news/delete?id=${id}`,
  });
};
