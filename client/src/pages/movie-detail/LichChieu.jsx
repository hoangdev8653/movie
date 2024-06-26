import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { suatChieuStore } from "../../store/SuatChieu";

function LichChieu(props) {
  const { TabPane } = Tabs;
  const { data, getSuatChieuByMovie } = suatChieuStore();
  const movieId = props.data[0]?._id;
  useEffect(() => {
    const fetchData = async () => {
      await getSuatChieuByMovie(movieId);
    };
    fetchData();
  }, [movieId]);
  console.log(data);

  return (
    <div
      id="lichchieuphim"
      className="flex bg-white text-black rounded-xl w-[90%] mx-auto max-w-[600px] pb-16 "
    >
      <Tabs tabPosition="left">
        {data && data.length > 0 ? (
          <>
            {data?.map((item, index) => (
              <TabPane
                tab={
                  <div className="flex gap-2 mt-6 border-solid border-[1p">
                    <img
                      className="w-[40px] h-[40px] rounded-full mx-1"
                      src={item?.suatChieuId.rapId.hinhAnh}
                      alt={item?.suatChieuId.rapId.tenRap}
                    />
                    <span className="text-base font-normal">
                      {item?.suatChieuId.rapId.tenRap}
                    </span>
                  </div>
                }
                key={index}
              >
                <div className="text-red-500 font-medium overflow-x-auto px-2 py-2 my-2">
                  {item?.suatChieuId.ngaychieu}
                </div>

                <a href={`/datVe/${item?._id}`}>
                  <button
                    style={{
                      background: "rgb(232 229 229)",
                      color: "#9b9b9b",
                    }}
                    className="px-4 py-[6px] mx-2 text-sm rounded-md hover:opacity-80"
                  >
                    {item?.gioChieu}
                  </button>
                </a>
              </TabPane>
            ))}
          </>
        ) : (
          <div className="flex bg-white text-black rounded-xl w-[90%] mx-auto max-w-[600px] items-center justify-center text-center ">
            <p className="text-center mx-auto items-center justify-center">
              Không có lịch chiếu nào
            </p>
          </div>
        )}
      </Tabs>
    </div>
  );
}

export default LichChieu;
