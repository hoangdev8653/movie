import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import createHttpError from "http-errors";
import { routers } from "./routers/v1/index.js";
import cors from "cors";
import { corsConfig } from "./configs/cors.js";
import { connectDb } from "./configs/connectDb.js";

const port = process.env.PORT || 7000;
connectDb();
const app = express();
app.use(cors(corsConfig));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/v1/user/", routers.UserRoutes);

app.use((req, res, next) => {
  next(createHttpError(404, "Not Found"));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    status: err.status || 500,
    message: err.message,
  });
});

app.listen(port, (req, res) => {
  console.log(`listen running on ${port}`);
});
