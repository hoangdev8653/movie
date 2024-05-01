import EventAndSale from "../models/eventAndSale.js";
import createHttpError from "http-errors";

const getAllEventAndSale = async () => {
  try {
    return await EventAndSale.find();
  } catch (error) {
    console.log(error);
  }
};

const getAllEvent = async () => {
  try {
    const event = await EventAndSale.find();
    const kieuNoiDungEvent = event.filter((item) => {
      return item.kieuNoiDung === "event";
    });
    return kieuNoiDungEvent;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getAllSale = async () => {
  try {
    const sale = await EventAndSale.find();
    const kieuNoiDungSale = sale.filter((item) => {
      return item.kieuNoiDung === "sale";
    });
    return kieuNoiDungSale;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createEventAndSale = async ({
  tieuDe,
  hinhAnh,
  thoiGian,
  noiDung,
  kieuNoiDung,
}) => {
  try {
    return await EventAndSale.create({
      tieuDe,
      hinhAnh,
      thoiGian,
      noiDung,
      kieuNoiDung,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteEventAndSale = async (id) => {
  try {
    const eventAndSale = await EventAndSale.findById(id);
    if (!eventAndSale) {
      throw createHttpError(404, "Event Or Sale Not Found");
    }
    return await EventAndSale.deleteOne({ _id: id });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const eventAndSaleService = {
  getAllEventAndSale,
  getAllEvent,
  getAllSale,
  createEventAndSale,
  deleteEventAndSale,
};
