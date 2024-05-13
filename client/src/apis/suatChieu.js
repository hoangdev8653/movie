import { axiosConfig } from "../axiosConfig";

export const getSuatChieuByMovie = async (id) => {
  return await axiosConfig({
    method: "get",
    url: `/suatChieu/getByMovieId/?id=${id}`,
  });
};
