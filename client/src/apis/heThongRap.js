import { axiosConfig } from "../axiosConfig";

export const getAllHeThongRap = async () => {
  return await axiosConfig({
    method: "get",
    url: "/heThongRap/",
  });
};
