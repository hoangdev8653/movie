import { axiosConfig } from "../axiosConfig";

export const getAllRap = async () => {
  return await axiosConfig({
    method: "get",
    url: "/rap/",
  });
};

export const getRapByHeThongRap = async (maHeThong) => {
  return await axiosConfig({
    method: "get",
    url: `/rap/${maHeThong}`,
  });
};
