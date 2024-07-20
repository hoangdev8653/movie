import { axiosConfig } from "../axiosConfig";

export const getAllEventAndSale = async () => {
  return await axiosConfig({
    method: "get",
    url: "/eventAndsale",
  });
};

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

export const createEventOrSale = async (data) => {
  return await axiosConfig({
    method: "post",
    url: "/eventAndSale/create",
    data,
  });
};

export const deleteById = async (id) => {
  return await axiosConfig({
    method: "delete",
    url: `/eventAndSale/delete?id${id}`,
  });
};
