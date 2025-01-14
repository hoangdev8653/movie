import React from "react";

function ThongTin({ data }) {
  return (
    <div
      style={{ color: "rgb(255 255 255/var(1))" }}
      className="flex justify-center px-6 py-2 max-w-[870px] mx-auto font-medium gap-6 msm:block"
    >
      <div className="w-1/2 my-1 msm:w-full msn:my-2">
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
      <div className="w-1/2 my-1 msm:w-full msn:my-2">
        <p>Mô Tả</p>
        <p>{data[0].moTa}.</p>
      </div>
    </div>
  );
}

export default ThongTin;
