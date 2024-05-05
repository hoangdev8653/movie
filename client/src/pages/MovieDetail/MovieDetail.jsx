import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Rate } from "antd";
import { Tabs } from "antd";
import DanhGia from "./DanhGia";
import LichChieu from "./LichChieu";
import ThongTin from "./ThongTin";

function PhimDetail() {
  const { id } = useParams();
  console.log(id);
  const onChange = (key) => {};
  const items = [
    {
      key: "1",
      label: `LỊCH CHIẾU`,
      children: <LichChieu />,
    },
    {
      key: "2",
      label: `THÔNG TIN`,
      children: <ThongTin />,
    },
    {
      key: "3",
      label: `ĐÁNH GIÁ`,
      children: <DanhGia />,
    },
  ];
  return (
    <div>
      <div
        className="pb-[50px]"
        style={{
          backgroundColor: "rgb(10, 32, 41)",
        }}
      >
        {/* {maPhim && ( */}
        <div className="relative">
          <img
            className="w-full object-cover blur-md h-[830px] "
            // src={maPhim.hinhAnh}
            src="https://movie0706.cybersoft.edu.vn/hinhanh/nha-ba-nu_gp09.jpg"
            alt="bg-movie"
          />
          <div className="absolute top-20 flex left-[22%] ">
            <div className="w-56 h-80 mr-2 relative  ">
              {/* <VideoModal
                  trailer={maPhim.trailer}
                  phim={{
                    height: "70px",
                    top: "40%",
                    left: "36%",
                  }}
                /> */}
              <img
                className="w-full h-full anhPhim "
                // src={maPhim.hinhAnh}
                src="https://movie0706.cybersoft.edu.vn/hinhanh/nha-ba-nu_gp09.jpg"
                alt="ảnh lỗi"
              />
            </div>

            <div className="text-red-50 mt-10">
              {/* <p>{moment(maPhim.ngayKhoiChieu).format("DD MMMM YYYY")}</p> */}
              <p>1-1-2024</p>
              <div className="flex my-2">
                <div className="bg-red-500 mr-2 rounded ">
                  <span className="px-1">C18</span>
                </div>
                <span className="">Mai</span>
              </div>
              <p>20 phút - 10 Tix - 2D/Digital</p>
              <button
                // onClick={goLichChieuPhim}
                className="py-3 px-6 text-base mt-6 rounded mb-5 bg-red-500 hover:bg-red-700"
              >
                Mua vé
              </button>
            </div>
            <div className="ml-[200px] mt-[60px]">
              <div className="w-[120px] h-[120px] text-white">
                <div className="relative">
                  <CircularProgressbar value={100} />
                  <p
                    style={{ fontSize: 50 }}
                    className="absolute top-[24px] left-[30px]"
                  >
                    {/* {maPhim.danhGia} */}
                    10
                  </p>
                </div>
              </div>
              <Rate
                className="text-green-500 text-xl inline-flex"
                allowHalf
                // defaultValue={(maPhim.danhGia / 10) * 5}
                defaultValue={5}
              />
            </div>
          </div>
        </div>
        {/* )} */}

        <Tabs
          className="justify-center item-center "
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          centered={true}
          tabBarGutter={80}
          tabBarStyle={{
            position: "none",
            color: "red",
            fontWeight: "600",
          }}
        />
      </div>
    </div>
  );
}

export default PhimDetail;
