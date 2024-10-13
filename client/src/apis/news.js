import { axiosConfig } from "../axiosConfig";

export const getAllNews = async () => {
  return await axiosConfig({
    method: "get",
    url: "/news/",
  });
};

export const createNews = async (data) => {
  return await axiosConfig({
    method: "post",
    url: "/news/create/",
    data,
  });
};

export const updateNews = async (id, data) => {
  return await axiosConfig({
    method: "put",
    url: `/news/update?id=${id}`,
    data,
  });
};

export const deleteNews = async (id) => {
  return await axiosConfig({
    method: "delete",
    url: `/news/delete?id=${id}`,
  });
};
