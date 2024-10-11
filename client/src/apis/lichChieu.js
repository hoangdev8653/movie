import { axiosConfig } from "../axiosConfig.js";

export const getLichChieuByMovieId = async (id) => {
  return await axiosConfig({
    method: "get",
    url: `/lichChieu/getByMovieId?id=${id}`,
  });
};
