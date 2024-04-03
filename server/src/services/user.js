import User from "../models/user.js";
import createHttpError from "http-errors";

const register = async ({ email, password, username, phone }) => {
  try {
    const checkEmail = User.findOne({ email });
    if (checkEmail) {
      throw createHttpError.Conflict("Email is ready in db");
    }
    const user = new User({
      email,
      password,
      username,
      phone,
    });
    return await user.save();
  } catch (error) {
    console.log(error);
  }
};

export const userService = {
  register,
};
