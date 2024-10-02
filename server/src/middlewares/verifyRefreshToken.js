import jwt from "jsonwebtoken";
import createHttpError from "http-errors";

export const verifyRefreshToken = (refreshToken) => {
  return new Promise((resolve, reject) => {
    jwt.verify(
      refreshToken,
      process.env.SERCRET_KEY || "huyhoang123",
      (err, payload) => {
        if (err) {
          reject(createHttpError(err));
        }
        resolve(payload.userId);
      }
    );
  });
};
