import { axiosConfig } from "../axiosConfig";

export const register = async (data) => {
  return await axiosConfig({
    method: "post",
    url: "/user/register",
    data,
  });
};

export const login = async (data) => {
  return await axiosConfig({
    method: "post",
    url: "/user/login",
    data,
  });
};

export const logout = async () => {
  return await axiosConfig({
    method: "post",
    url: "user/logout",
  });
};

export const getUserCurrent = async () => {
  return await axiosConfig({
    method: "get",
    url: "/user/ca-nhan",
  });
};

export const forgotPassword = async () => {
  return await axiosConfig({
    method: "post",
    url: "/user/forgot-password",
  });
};

export const resetPassword = async (data) => {
  return await axiosConfig({
    method: "patch",
    url: "/user/reset-password",
    data,
  });
};

export const updatePassword = async (data) => {
  return await axiosConfig({
    method: "post",
    url: "/user/updatePassword",
    data,
  });
};

export const updateUser = async (data) => {
  return await axiosConfig({
    method: "post",
    url: "/user/updateUser",
    data,
  });
};

export const updateAvarta = async (data) => {
  return await axiosConfig({
    method: "post",
    url: "/user/updateAvarta",
    data,
  });
};
