import User from "../models/user.js";
import createHttpError from "http-errors";
import { SignAccessToken, SignRefreshToken } from "../utils/generateToken.js";
import { getkey, setKey, deleteKey } from "../configs/connectRedis.js";
import { verifyRefreshToken } from "../middlewares/verifyRefreshToken.js";

const getAllUser = async () => {
  try {
    return await User.find();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const register = async ({ email, password, username, phone, address }) => {
  try {
    const checkEmail = await User.findOne({ email });
    if (checkEmail) {
      throw createHttpError.Conflict("Email is already in use");
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
    throw error;
  }
};

const login = async ({ email, password }) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw createHttpError.NotFound("Email Not Found");
    }
    const isValid = await user.checkPassword(password);
    if (!isValid) {
      throw createHttpError.Unauthorized();
    }
    const accessToken = SignAccessToken(user.id);
    const refreshToken = SignRefreshToken(user.id);
    setKey(`refreshToken_${user.id}`, refreshToken);
    return { user, accessToken, refreshToken };
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
    getkey(`refreshToken_${id}`);
    return await user;
  } catch (error) {
    console.log(error);
  }
};

const updateAvarta = async (id, { avarta }) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      createHttpError.NotFound("User Not Found");
    }
    return await User.findByIdAndUpdate(id, { avarta }, { new: true });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const refreshToken = async ({ refreshToken }) => {
  try {
    const userId = await verifyRefreshToken(refreshToken);
    const newAccessToken = SignAccessToken(userId);
    const newRefreshtoken = SignRefreshToken(userId);
    setKey(`refreshToken_${userId}`, newRefreshtoken);
    return await { newAccessToken, newRefreshtoken };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const logout = async (id) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      throw createHttpError.NotFound("User not found");
    }
    deleteKey(`refreshToken_${user.id}`);
    return user;
  } catch (error) {
    throw error;
  }
};

export const userService = {
  getAllUser,
  register,
  login,
  currentUser,
  updateAvarta,
  refreshToken,
  logout,
};
