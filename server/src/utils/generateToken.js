import jwt from "jsonwebtoken";

export const SignAccessToken = (userId) => {
  return jwt.sign({ userId }, process.env.SERCRET_KEY || "huyhoang123", {
    expiresIn: "1d",
  });
};
export const SignRefreshToken = (userId) => {
  return jwt.sign({ userId }, process.env.SERCRET_KEY || "huyhoang123", {
    expiresIn: "7d",
  });
};
