import { axiosConfig } from "../axiosConfig";

export const getAllEvent = async () => {
  return await axiosConfig({
    method: "get",
    url: "/eventAndSale/event",
  });
};

export const getAllSale = async () => {
  return await axiosConfig({
    method: "get",
    url: "/eventAndSale/sale",
  });
};
