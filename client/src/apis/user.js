import { axiosConfig } from "../axiosConfig";

export const getAllUser = async (data) => {
  return await axiosConfig({
    method: "get",
    url: "/user/",
  });
};

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
    url: "/user/logout",
  });
};

export const getUserCurrent = async () => {
  return await axiosConfig({
    method: "get",
    url: "/user/ca-nhan",
  });
};

export const forgotPassword = async (data) => {
  return await axiosConfig({
    method: "post",
    url: "/user/forgot-password",
    data,
  });
};

export const resetPassword = async (token, { password }) => {
  console.log(token);
  console.log(password);

  return await axiosConfig({
    method: "patch",
    url: `/user/reset-password?token=${token}`,
    data: { password },
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
