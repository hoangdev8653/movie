import createHttpError from "http-errors";
import SuatChieu from "../models/suatChieu.js";

const getSuatChieuByMovie = async () => {
  try {
    const suatChieu = await SuatChieu.find()
      .populate("movieId", "tenPhim ngayKhoiChieu dangChieu sapChieu hinhAnh")
      .populate("suatChieus");
    return suatChieu;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getSuatChieuById = async (idSuatChieu, idGhe) => {
  try {
    let suatChieus = await SuatChieu.findById(idSuatChieu)
      .populate("movieId", "tenPhim ngayKhoiChieu dangChieu sapChieu hinhAnh")
      .populate("suatChieus");
    console.log(suatChieus);
    return suatChieus;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createSuatChieu = async ({ ngaychieu, suatChieus, movieId }) => {
  try {
    return await SuatChieu.create({ ngaychieu, suatChieus, movieId });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// const updateStatusGhe = async (idSuatChieu, idGhe) => {
//   try {
//     let suatChieus = await SuatChieu.find()
//       .populate("movieId", "tenPhim ngayKhoiChieu dangChieu sapChieu hinhAnh")
//       .populate("suatChieus");
//     if (!suatChieus || suatChieus.length === 0) {
//       throw createHttpError.NotFound("suat chieu Not Found");
//     }
//     // Tìm và cập nhật đối tượng SuatChieu chứa suatChieu với idSuatChieu tương ứng
//     const suatChieuToUpdate = suatChieus.find((sc) =>
//       sc.suatChieus.some((s) => s._id.toString() === idSuatChieu)
//     );
//     if (!suatChieuToUpdate) {
//       throw createHttpError.NotFound("suat chieu Not Found");
//     }
//     const detailGioChieu = suatChieuToUpdate.suatChieus.find(
//       (s) => s._id.toString() === idSuatChieu
//     );

//     const dsGhe = detailGioChieu.danhSachGhe;
//     const gheDetail = dsGhe.find((g) => g._id.toString() === idGhe);
//     console.log(gheDetail);
//     // Cập nhật trạng thái của ghế thành "Đã Đặt"
//     gheDetail.trangThai = "DaDat";
//     console.log(gheDetail);
//     // Lưu lại thay đổi vào cơ sở dữ liệu
//     await suatChieuToUpdate.save();
//     // Lưu thay đổi vào cơ sở dữ liệu
//     console.log(dsGhe);
//     return gheDetail;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };

const updateStatusGhe = async (idSuatChieu, idGhe) => {
  try {
    // Tìm suất chiếu và populate thông tin liên quan
    let suatChieu = await SuatChieu.findOne({ "suatChieus._id": idSuatChieu })
      .populate("movieId", "tenPhim ngayKhoiChieu dangChieu sapChieu hinhAnh")
      .populate("suatChieus");
    if (!suatChieu) {
      throw createHttpError.NotFound("Suất chiếu không tồn tại");
    }

    // Tìm và cập nhật trạng thái ghế
    let detailGioChieu = suatChieu.suatChieus.find(
      (s) => s._id.toString() === idSuatChieu
    );
    if (!detailGioChieu) {
      throw createHttpError.NotFound("Suất chiếu không tồn tại");
    }

    let gheDetail = detailGioChieu.danhSachGhe.find(
      (g) => g._id.toString() === idGhe
    );
    if (!gheDetail) {
      throw createHttpError.NotFound("Ghế không tồn tại");
    }

    // Cập nhật trạng thái ghế
    gheDetail.trangThai = "DaDat";

    // Lưu cập nhật vào cơ sở dữ liệu
    await suatChieu.save();

    return gheDetail;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteSuatChieu = async (id) => {
  try {
    const suatChieu = await SuatChieu.findById(id);
    if (!suatChieu) {
      throw createHttpError.NotFound("Suất chiếu không tồn tại");
    }
    return await SuatChieu.deleteOne({ _id: id });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const suatChieuService = {
  getSuatChieuByMovie,
  getSuatChieuById,
  createSuatChieu,
  updateStatusGhe,
  deleteSuatChieu,
};
