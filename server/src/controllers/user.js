import { StatusCodes } from "http-status-codes";
import { userValidate } from "../validations/user.js";
import createHttpError from "http-errors";
import { userService } from "../services/user.js";
import { getkey, setKey, deleteKey } from "../configs/connectRedis.js";

const getAllUser = async (req, res, next) => {
  try {
    const user = await userService.getAllUser();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: user });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const register = async (req, res, next) => {
  try {
    const { email, password, username, phone, address } = req.body;
    const { error } = userValidate.register(req.body);
    if (error) {
      throw createHttpError(error.details[0].message);
    }
    const user = await userService.register({
      email,
      password,
      username,
      phone,
      address,
    });
    return res
      .status(StatusCodes.ACCEPTED)
      .json({ status: 201, message: "Xử lý thành công", content: user });
  } catch (error) {
    if (error.statusCode === 409) {
      return res
        .status(StatusCodes.CONFLICT)
        .json({ status: 409, message: error.message });
    } else {
      console.error(error);
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ status: 500, message: "Lỗi máy chủ" });
    }
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { user, accessToken, refreshToken } = await userService.login({
      email,
      password,
    });
    return res.status(StatusCodes.OK).json({
      status: 200,
      message: "Xử lý thành công",
      content: user,
      refreshToken,
      accessToken,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const id = req.query.id;
    const user = await userService.deleteUser(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: user });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 200, message: "Server Error" });
    next(error);
  }
};

const resetPassword = async (req, res, next) => {
  try {
    const token = req.query.token;
    const { password } = req.body;
    const user = await userService.resetPassword(token, { password });
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: user });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 200, message: "Server Error" });
    next(error);
  }
};

const currentUser = async (req, res, next) => {
  try {
    const id = req.userId;
    const user = await userService.currentUser(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: user });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updateAvarta = async (req, res, next) => {
  try {
    const id = req.userId;
    const { avarta } = req.body;
    const fileData = req.file;
    const user = await userService.updateAvarta(id, { avarta: fileData?.path });
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: user });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await userService.forgotPassword({ email });
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: user });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const refreshToken = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    const { newAccessToken, newRefreshtoken } = await userService.refreshToken({
      refreshToken,
    });
    return res.status(StatusCodes.OK).json({
      status: 200,
      message: "Xử lý thành công",
      newAccessToken,
      newRefreshtoken,
    });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    const id = req.userId;
    console.log(id);
    const user = await userService.logout(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: user });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

export const userController = {
  getAllUser,
  register,
  login,
  currentUser,
  updateAvarta,
  deleteUser,
  forgotPassword,
  resetPassword,
  refreshToken,
  logout,
};
