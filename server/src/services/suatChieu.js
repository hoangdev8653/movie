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

const getSuatChieuById = async (idSuatChieu) => {
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

const createSuatChieu = async ({ ngaychieu, suatChieus, movieId, giaVe }) => {
  try {
    return await SuatChieu.create({ ngaychieu, suatChieus, movieId, giaVe });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateStatusGhe = async (idSuatChieu, idGioChieu, idGhe) => {
  try {
    const suatChieu = await SuatChieu.findById(idSuatChieu)
      .populate("movieId", "tenPhim ngayKhoiChieu dangChieu sapChieu hinhAnh")
      .populate("suatChieus");
    const gioChieu = suatChieu.suatChieus.find(
      (item) => item._id == idGioChieu
    );
    if (gioChieu) {
      const ghe = gioChieu.danhSachGhe.find((ghe) => ghe._id == idGhe);

      if (ghe) {
        // Update trạng thái của ghế
        ghe.trangThai = "DaDat"; // Ví dụ, cập nhật thành trạng thái đã chọn

        // Lưu lại suất chiếu sau khi cập nhật
        await suatChieu.save();
        return ghe;
        // return ghe; // Trả về ghế đã được cập nhật trạng thái
      } else {
        throw new Error("Không tìm thấy ghế có idGhe cần cập nhật");
      }
    } else {
      throw new Error("Không tìm thấy giờ chiếu có idGioChieu");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// const updateStatusGhe = async (idSuatChieu, idGioChieu, idGhe) => {
//   try {
//     const gioChieu = await SuatChieu.findOneAndUpdate(
//       {
//         _id: idSuatChieu,
//         "suatChieus._id": idGioChieu,
//         "suatChieus.danhSachGhe._id": idGhe,
//       },
//       { $set: { "suatChieus.$[i].danhSachGhe.$[j].trangThai": "DaChon" } },
//       { arrayFilters: [{ "i._id": idGioChieu }, { "j._id": idGhe }], new: true }
//     );

//     if (gioChieu) {
//       const ghe = gioChieu.suatChieus
//         .find((item) => item._id == idGioChieu)
//         .danhSachGhe.find((ghe) => ghe._id == idGhe);

//       return ghe;
//     } else {
//       throw new Error("Không tìm thấy giờ chiếu hoặc ghế cần cập nhật");
//     }
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };

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
