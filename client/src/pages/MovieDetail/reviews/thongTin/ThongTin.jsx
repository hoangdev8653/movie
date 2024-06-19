import React from "react";
import styles from "./ThongTin.module.scss";

function ThongTin({ data }) {
  return (
    <div className={styles.content}>
      <div className={styles.infoMovie}>
        <div className="flex gap-2 my-1">
          <p className="w-[30%]"> Ngày Khởi chiếu: </p>
          <p className="flex-1">{data[0].ngayKhoiChieu}</p>
        </div>
        <div className="flex gap-2 my-1">
          <p className="w-[30%]"> Đạo diễn: </p>
          <p className="flex-1">{data[0].daoDien}</p>
        </div>
        <div className="flex gap-2 my-1">
          <p className="w-[30%]"> Diễn viên: </p>
          <p className="flex-1">{data[0].dienVien}</p>
        </div>
        <div className="flex gap-2 my-1">
          <p className="w-[30%]"> Thể loại: </p>
          <p className="flex-1">{data[0].theLoai}</p>
        </div>
        <div className="flex gap-2 my-1">
          <p className="w-[30%]"> Quốc gia: </p>
          <p className="flex-1">{data[0].quocGia}</p>
        </div>
      </div>
      <div className={styles.decription}>
        <p>Mô Tả</p>
        <p>{data[0].moTa}.</p>
      </div>
    </div>
  );
}

export default ThongTin;
