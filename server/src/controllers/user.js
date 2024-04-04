import { StatusCodes } from "http-status-codes";
import { userValidate } from "../validations/user.js";
import createHttpError from "http-errors";
import { userService } from "../services/user.js";

const register = async (req, res, next) => {
  try {
    const { email, password, username, phone, address } = req.body;
    const { error } = userValidate.register(req.body);
    if (error) {
      throw createHttpError(error.details[0].message);
    }
    const user = userService.register({
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
    console.log(error);
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { user, accessToken } = await userService.login({ email, password });
    return res.status(StatusCodes.OK).json({
      status: 200,
      message: "Xử lý thành công",
      content: user,
      accessToken,
    });
  } catch (error) {
    console.log(error);
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

const logout = async (req, res, next) => {
  try {
    const id = req.userId;
    const user = await userService.logout(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: user });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const userController = {
  register,
  login,
  currentUser,
  logout,
};
