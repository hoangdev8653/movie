import createHttpError from "http-errors";
import SuatChieu from "../models/suatChieu.js";

const getSuatChieuByMovie = async () => {
  try {
    const suatChieu = await SuatChieu.find()
      .populate("movieId", "tenPhim ngayKhoiChieu dangChieu sapChieu hinhAnh")
      .populate("suatChieus");
    // console.log(suatChieu);
    return suatChieu;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// const getSuatChieuById = async (idSuatChieu, idGhe) => {
//   try {
//     const suatChieu = await SuatChieu.find()
//       .populate("movieId", "tenPhim ngayKhoiChieu dangChieu sapChieu hinhAnh")
//       .populate("suatChieus");

//     if (!suatChieu) {
//       throw createHttpError.NotFound("suat chieu Not Found");
//     }

//     const sc = suatChieu.find((item) => item.suatChieus);
//     const detail = sc.suatChieus;
//     const detailGioChieu = detail.find(
//       (item) => item._id.toString() === idSuatChieu
//     );
//     const dsGhe = detailGioChieu.danhSachGhe;
//     const gheDeatail = dsGhe.find((item) => item._id.toString() === idGhe);

//     // Cập nhật trạng thái của ghế thành "Đã Đặt"
//     gheDeatail.trangThai = "DaDat";

//     // Lưu lại thay đổi vào cơ sở dữ liệu

//     return await suatChieu.save();
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };
const getSuatChieuById = async (idSuatChieu, idGhe) => {
  try {
    let suatChieus = await SuatChieu.find()
      .populate("movieId", "tenPhim ngayKhoiChieu dangChieu sapChieu hinhAnh")
      .populate("suatChieus");

    if (!suatChieus || suatChieus.length === 0) {
      throw createHttpError.NotFound("suat chieu Not Found");
    }

    // Tìm và cập nhật đối tượng SuatChieu chứa suatChieu với idSuatChieu tương ứng
    const suatChieuToUpdate = suatChieus.find((sc) =>
      sc.suatChieus.some((s) => s._id.toString() === idSuatChieu)
    );
    if (!suatChieuToUpdate) {
      throw createHttpError.NotFound("suat chieu Not Found");
    }

    const detailGioChieu = suatChieuToUpdate.suatChieus.find(
      (s) => s._id.toString() === idSuatChieu
    );
    const dsGhe = detailGioChieu.danhSachGhe;
    const gheDeatail = dsGhe.find((g) => g._id.toString() === idGhe);

    // Cập nhật trạng thái của ghế thành "Đã Đặt"
    gheDeatail.trangThai = "DaDat";
    // Lưu lại thay đổi vào cơ sở dữ liệu
    await suatChieuToUpdate.save();
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

const updateStatusGhe = async (idSuatChieu, idGhe) => {
  try {
    let suatChieus = await SuatChieu.find()
      .populate("movieId", "tenPhim ngayKhoiChieu dangChieu sapChieu hinhAnh")
      .populate("suatChieus");
    if (!suatChieus || suatChieus.length === 0) {
      throw createHttpError.NotFound("suat chieu Not Found");
    }
    // Tìm và cập nhật đối tượng SuatChieu chứa suatChieu với idSuatChieu tương ứng
    const suatChieuToUpdate = suatChieus.find((sc) =>
      sc.suatChieus.some((s) => s._id.toString() === idSuatChieu)
    );
    if (!suatChieuToUpdate) {
      throw createHttpError.NotFound("suat chieu Not Found");
    }
    const detailGioChieu = suatChieuToUpdate.suatChieus.find(
      (s) => s._id.toString() === idSuatChieu
    );
    const dsGhe = detailGioChieu.danhSachGhe;
    const gheDeatail = dsGhe.find((g) => g._id.toString() === idGhe);
    // Cập nhật trạng thái của ghế thành "Đã Đặt"
    gheDeatail.trangThai = "DaDat";
    // Lưu lại thay đổi vào cơ sở dữ liệu
    await suatChieuToUpdate.save();
    // console.log(suatChieus);
    return suatChieus;
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
