import { axiosConfig } from "../axiosConfig";

export const getAllNews = async () => {
  return axiosConfig({
    method: "get",
    url: "/news/",
  });
};
