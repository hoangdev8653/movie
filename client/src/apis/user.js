import { axiosConfig } from "../axiosConfig";

export const register = async (data) => {
  return await axiosConfig({
    method: "post",
    url: "/user/dang-ki",
    data,
  });
};

export const login = async (data) => {
  return await axiosConfig({
    method: "post",
    url: "/user/dang-nhap",
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
