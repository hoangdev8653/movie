import { axiosConfig } from "../axiosConfig";

export const bookTicket = async (data) => {
  return await axiosConfig({
    method: "post",
    url: "/bookTicket/create/",
    data,
  });
};

export const getTicketByUser = async () => {
  return await axiosConfig({
    method: "get",
    url: "/bookTicket/getByUser",
  });
};
