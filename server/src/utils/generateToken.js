import jwt from "jsonwebtoken";

export const SignAccessToken = (useId) => {
  return jwt.sign({ useId }, process.env.SERCRET_KEY, { expiresIn: "1d" });
};
export const SignRefreshToken = (useId) => {
  return jwt.sign({ useId }, process.env.SERCRET_KEY, { expiresIn: "7d" });
};
