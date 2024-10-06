import LichChieuModel from "../models/lichChieu.js";

const getAllLichChieu = async () => {
  return await LichChieuModel.find()
    .populate({
      path: "movieId",
      select:
        "-trailer -moTa -dangChieu -sapChieu -daoDien -dienVien -theLoai -quocGia -thoiLuong -slug",
    })
    .populate({
      path: "gioChieuId",
      select: "-danhSachGhe",
      populate: {
        path: "ngayChieuId",
        populate: {
          path: "rapId",
          populate: {
            path: "heThongRapId",
          },
        },
      },
    });
};

const getLichChieuById = async (id) => {
  try {
    const lichChieu = await LichChieuModel.findById(id);
    if (!lichChieu) {
      throw Error("LichChieu Not Found");
    }
    return lichChieu;
  } catch (error) {
    console.log(error);
  }
};

const createLichChieu = async ({ gioChieuId, movieId }) => {
  try {
    return await LichChieuModel.create({ gioChieuId, movieId });
  } catch (error) {
    console.log(error);
  }
};

const updateLichChieu = async (id, { gioChieuId, movieId }) => {
  try {
    const lichChieu = await LichChieuModel.findById(id);
    if (!lichChieu) {
      throw Error("LichChieu Not Found");
    }
    return await LichChieuModel.findByIdAndUpdate(
      id,
      { gioChieuId, movieId },
      { new: true }
    );
  } catch (error) {
    console.log(error);
  }
};

const deleteLichChieu = async (id) => {
  try {
    const lichChieu = await LichChieuModel.findById(id);
    if (!lichChieu) {
      throw Error("LichChieu Not Found");
    }
    return await LichChieuModel.deleteOne({ _id: id });
  } catch (error) {
    console.log(error);
  }
};

export const lichChieuServices = {
  getAllLichChieu,
  getLichChieuById,
  createLichChieu,
  updateLichChieu,
  deleteLichChieu,
};
