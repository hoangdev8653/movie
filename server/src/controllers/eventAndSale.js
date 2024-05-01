import { StatusCodes } from "http-status-codes";
import { eventAndSaleService } from "../services/eventAndSale.js";

const getAllEventAndSale = async (req, res, next) => {
  try {
    const eventAndSale = await eventAndSaleService.getAllEventAndSale();
    return res.status(StatusCodes.OK).json({
      status: 200,
      message: "Xử lý thành công",
      content: eventAndSale,
    });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const getAllEvent = async (req, res, next) => {
  try {
    const event = await eventAndSaleService.getAllEvent();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: event });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const getAllSale = async (req, res, next) => {
  try {
    const sale = await eventAndSaleService.getAllSale();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: sale });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const createEventAndSale = async (req, res, next) => {
  try {
    const { tieuDe, hinhAnh, thoiGian, noiDung, kieuNoiDung } = req.body;
    const fileData = req.file;
    const saleAndEvent = await eventAndSaleService.createEventAndSale({
      tieuDe,
      hinhAnh: fileData?.path,
      thoiGian,
      noiDung,
      kieuNoiDung,
    });
    return res.status(StatusCodes.CREATED).json({
      status: 201,
      message: "Xử lý thành công",
      content: saleAndEvent,
    });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

const deleteEventAndSale = async (req, res, next) => {
  try {
    const id = req.query.id;
    const eventAndSale = await eventAndSaleService.deleteEventAndSale(id);
    return res.status(StatusCodes.OK).json({
      status: 200,
      message: "Xử lý thành công",
      content: eventAndSale,
    });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
    next(error);
  }
};

export const eventAndSaleController = {
  getAllEventAndSale,
  getAllEvent,
  getAllSale,
  createEventAndSale,
  deleteEventAndSale,
};
