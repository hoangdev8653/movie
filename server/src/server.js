import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import createHttpError from "http-errors";
import { routers } from "./routers/v1/index.js";
import cors from "cors";
import { corsConfig } from "./configs/cors.js";
import { connectDb } from "./configs/connectDb.js";
import { connectRedis } from "./configs/connectRedis.js";

const port = process.env.PORT || 7000;
connectDb();
connectRedis();
const app = express();
// app.use(cors(corsConfig));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/v1/user/", routers.UserRoutes);
app.use("/v1/heThongRap/", routers.HeThongRapRoutes);
app.use("/v1/rap/", routers.RapRoutes);
app.use("/v1/movie/", routers.MovieRoutes);
app.use("/v1/review/", routers.ReviewRoutes);
app.use("/v1/suatChieu/", routers.SuatChieuRoutes);
app.use("/v1/gioChieu/", routers.GioChieuRoutes);
app.use("/v1/bookTicket/", routers.BookTicketRoutes);
app.use("/v1/banner/", routers.BannerRoutes);
app.use("/v1/news/", routers.NewsRoutes);
app.use("/v1/eventAndSale/", routers.EventAndSaleRoutes);

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
