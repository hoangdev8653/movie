import { axiosConfig } from "../axiosConfig";

export const createReview = async (data) => {
  return axiosConfig({
    method: "post",
    url: "/review/create",
    data,
  });
};

export const getReviewByMovie = async (data) => {
  return axiosConfig({
    method: "get",
    url: "/review/getReviewByMovie",
    data,
  });
};

export const updateReview = async (data) => {
  return await axiosConfig({
    method: "put",
    url: "/review/update",
    data,
  });
};

export const deleteReview = async () => {
  return axiosConfig({
    method: "delete",
    url: "/review/delete",
  });
};
