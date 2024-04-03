import { StatusCodes } from "http-status-codes";
import { userValidate } from "../validations/user.js";
import createHttpError from "http-errors";

const register = async (req, res, next) => {
  try {
    const { email, password, username, phone } = req.body;
    const { error } = userValidate.register(req.body);
    if (error) {
      throw createHttpError(error.details[0].message);
    }
    const user = userService.register({
      email,
      password,
      username,
      phone,
    });
    return res
      .status(StatusCodes.ACCEPTED)
      .json({ status: 201, message: "Xử lý thành công", content: user });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const userController = {
  register,
};
