import User from "../models/user.js";
import createHttpError from "http-errors";
import { SignAccessToken, SignRefreshToken } from "../utils/generateToken.js";
import { getkey, setKey, deleteKey } from "../configs/connectRedis.js";
import { verifyRefreshToken } from "../middlewares/verifyRefreshToken.js";
import jwt from "jsonwebtoken";
import { sendMail } from "../utils/sendMail.js";
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
      throw createHttpError.Unauthorized("incorrect password");
    }
    const accessToken = SignAccessToken(user.id);
    const refreshToken = SignRefreshToken(user.id);
    // setKey(`refreshToken_${user.id}`, refreshToken);
    return { user, accessToken, refreshToken };
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (id) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      throw createHttpError.NotFound("User Not Found");
    }
    return await User.deleteOne({ _id: id });
  } catch (error) {
    console.log(error);
    throw error;
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

const forgotPassword = async ({ email }) => {
  try {
    console.log(email);
    const user = await User.findOne({ email });
    if (!user) {
      throw createHttpError.NotFound("Email Not Found");
    }
    const token = jwt.sign({ id: user._id }, process.env.SERCRET_KEY, {
      expiresIn: "1h",
    });
    console.log(token);
    user.passwordResetToken = token;
    user.passwordResetExpires = Date.now() + 3600000;
    await user.save();
    const resetUrl = `http://localhost:3007/v1/user/reset-password?token=${token}`;
    const message = `we heve recived a password reset request. Please use the below link to reset your password\n\n${resetUrl}\n\nThis reset password link will be valid only for 10 minutes.`;
    try {
      sendMail({
        email: user.email,
        subject: "Password change request received",
        message,
      });
      return "Sendding success";
    } catch (error) {
      (user.passwordResetToken = undefined),
        (user.passwordResetExpires = undefined);
      user.save();
      throw "There was an error sending password reset email. Please try again later";
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const resetPassword = async (token, { password }) => {
  try {
    const decoded = jwt.verify(token, process.env.SERCRET_KEY);
    const user = await User.findOne({
      _id: decoded.id,
      passwordResetToken: token,
      passwordResetExpires: { $gt: Date.now() },
    });
    if (!user) {
      throw createHttpError.Unauthorized(
        "Invalid or expired password reset token"
      );
    }
    user.password = password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    try {
      sendMail({
        email: user.email,
        subject: "Password Reset Confirmation",
        html: `
      <p>Your password has been successfully reset. If you did not initiate this request, please contact us immediately.</p>
    `,
      });
      return user;
    } catch (error) {
      console.log("Can not send Mail: ", error);
    }
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
    return { newAccessToken, newRefreshtoken };
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
    // deleteKey(`refreshToken_${user.id}`);
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
  deleteUser,
  updateAvarta,
  forgotPassword,
  resetPassword,
  refreshToken,
  logout,
};
