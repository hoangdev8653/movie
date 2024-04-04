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
  refreshToken: {
    type: String,
  },
});

user.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(this.password, salt);
    this.password = hashPassword;
  } catch (error) {
    next(error);
  }
});

user.methods.checkPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    console.log(error);
    return false;
  }
};

const User = mongoose.model("user", user);
export default User;
