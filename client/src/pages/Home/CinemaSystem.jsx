import React, { Fragment, useState, useEffect } from "react";
import { Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import axios from "axios";
import { NavLink } from "react-router-dom";
import moment from "moment";

function CinemaSystem() {
  const [tabPosition, setTabPosition] = useState("left");
  const [CumRap, setCumRap] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap"
      )
      .then((res) => {
        const data = res.data.content;
        setCumRap(data);
      })
      .catch((err) => {
        console.log("Lỗi: ", err);
      });
  }, []);
  const renderHeThongRap = () => {
    return (
      CumRap &&
      CumRap.map((heThongRap, index) => {
        return (
          <TabPane
            tab={
              <div className="w-[100px] text-center justify-center items-center">
                <img
                  src={heThongRap.logo}
                  className="rounded-full mx-auto"
                  width="50"
                  alt="ảnh lỗi"
                />
              </div>
            }
            key={index}
          >
            <Tabs tabPosition={tabPosition}>
              {heThongRap.lstCumRap?.slice(0, 8).map((cumRap, index) => {
                return (
                  <TabPane
                    className="border-b-2"
                    tab={
                      <div>
                        <img
                          className="w-12 h-12"
                          src={cumRap.hinhAnh}
                          alt="ảnh phim"
                        />
                        {/* <br /> */}
                        <div className="text-left ">
                          {cumRap.tenCumRap}
                          <p className="text-red-200">Chi tiết</p>
                        </div>
                      </div>
                    }
                    key={index}
                  >
                    {cumRap.danhSachPhim.slice(0, 4).map((phim, index) => {
                      return (
                        <Fragment key={index}>
                          <div className="my-5">
                            <div className="flex">
                              <img
                                className="w-[75px] h-[75px]"
                                src={phim.hinhAnh}
                                alt={phim.tenPhim}
                              />

                              <div className="ml-2">
                                <h1 className="text-2xl text-green-700">
                                  {phim.tenPhim}
                                </h1>
                                <p className="py-1 font-medium text-base">
                                  {cumRap.diaChi}
                                </p>
                                <div className="grid grid-cols-6 gap-2">
                                  {phim.lstLichChieuTheoPhim
                                    ?.slice(0, 12)
                                    .map((lichChieu, index) => {
                                      return (
                                        <NavLink
                                          to={`/datVe/${lichChieu.maLichChieu}`}
                                          // to="/login"
                                          key={index}
                                        >
                                          <button className="text-base p-1 text-green-600 border-solid border border-gray-400 rounded-md hover:text-red-600">
                                            {moment(
                                              lichChieu.ngayChieuGioChieu
                                            ).format("hh:mm A")}
                                          </button>
                                        </NavLink>
                                      );
                                    })}
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr />
                        </Fragment>
                      );
                    })}
                  </TabPane>
                );
              })}
            </Tabs>
          </TabPane>
        );
      })
    );
  };
  return (
    <div className="max-w-[940px] mx-auto border-solid border-gray-400 border-[1px]">
      <Tabs tabPosition={tabPosition}>{renderHeThongRap()}</Tabs>
    </div>
  );
}

export default CinemaSystem;
