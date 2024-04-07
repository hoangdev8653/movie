import jwt from "jsonwebtoken";
import createHttpError from "http-errors";

export const verifyAccessToken = (req, res, next) => {
  if (!req.headers["authorization"]) {
    return next(createHttpError.Unauthorized());
  }
  const authHeader = req.headers["authorization"];
  const bearertoken = authHeader.split(" ");
  const token = bearertoken[1];
  jwt.verify(token, process.env.SERCRET_KEY, (err, payload) => {
    if (err) {
      if (err.name === "JsonWebTokenError") {
        return next(createHttpError.Unauthorized());
      }
      return next(createHttpError.Unauthorized(err.message));
    }
    req.userId = payload.useId;
    req.payload = payload;
    next();
  });
};
