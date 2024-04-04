import User from "../models/user.js";
import createHttpError from "http-errors";
import { SignAccessToken, SignRefreshToken } from "../utils/generateToken.js";

const register = async ({ email, password, username, phone, address }) => {
  try {
    const checkEmail = await User.findOne({ email });
    if (checkEmail) {
      throw createHttpError.Conflict("Email is ready in db");
    } else {
      const user = new User({
        email,
        password,
        username,
        phone,
        address,
      });
      return await user.save();
    }
  } catch (error) {
    console.log(error);
  }
};

const login = async ({ email, password }) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw createHttpError.NotFound("Email Not Found");
    }

    const isValid = await user.checkPassword(password);
    console.log(isValid);
    if (!isValid) {
      throw createHttpError.Unauthorized();
    }
    const accessToken = SignAccessToken(user.id);
    const refreshToken = SignRefreshToken(user.id);
    const newUser = await User.findByIdAndUpdate(
      user.id,
      { refreshToken },
      { new: true }
    );
    return { user, accessToken };
  } catch (error) {
    console.log(error);
  }
};

const currentUser = async (id) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      throw createHttpError.NotFound("User Not Found");
    }
    return await user;
  } catch (error) {
    console.log(error);
  }
};

const logout = async (id) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      throw createHttpError.NotFound("User not found");
    }
    const newUser = await User.findByIdAndUpdate(
      id,
      { refreshToken: "" },
      { new: true }
    );
    return newUser;
  } catch (error) {
    console.log(error);
  }
};

export const userService = {
  register,
  login,
  currentUser,
  logout,
};
