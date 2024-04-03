import { whitelist_origin } from "../utils/constans.js";

export const corsConfig = {
  origin: function (origin, callback) {
    if (
      whitelist_origin.includes(origin) ||
      !origin ||
      isRequestFromPostman()
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by cors"));
    }
  },
};
