import mongoose from "mongoose";
import bcrypt from "bcrypt";

const user = mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  avarta: {
    type: String,
    default: "",
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  passwordResetToken: {
    type: String,
    default: undefined,
  },
  passwordResetExpires: {
    type: Date,
    default: undefined,
  },
});

const User = mongoose.model("user", user);
export default User;
