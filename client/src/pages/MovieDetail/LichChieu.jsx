import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { getSuatChieuByMovie } from "../../apis/suatChieu";

const { TabPane } = Tabs;

function LichChieu({ data }) {
  const [value, setValue] = useState([]);
  const movieId = data[0]?._id;

  useEffect(() => {
    const fetchData = async () => {
      const response = await getSuatChieuByMovie(movieId);
      if (response?.status === 200) {
        setValue(response.data.content);
      } else {
        console.log("Can not Call Api");
      }
    };
    fetchData();
  }, [movieId]);
  return (
    <div
      id="lichchieuphim"
      className="flex bg-white text-black rounded-xl w-[90%] mx-auto max-w-[600px] pb-16 "
    >
      <Tabs tabPosition="left">
        {value && value.length > 0 ? (
          <>
            {value?.map((item, index) => (
              <TabPane
                tab={
                  <div className="flex gap-2 mt-6 border-solid border-[1p">
                    <img
                      className="w-[40px] h-[40px] rounded-full mx-1"
                      src={item.rapId.hinhAnh}
                      alt={item.slug}
                    />
                    <span className="text-base font-normal">
                      {item.rapId.tenRap}
                    </span>
                  </div>
                }
                key={index}
              >
                <div className="text-red-500 font-medium overflow-x-auto px-2 py-2 my-2">
                  {item?.ngaychieu}
                </div>
                {/* {item.suatChieus.map((it, idx) => (
                  <a href={`/datve/${it._id}`}>
                    <button
                      style={{
                        background: "rgb(232 229 229)",
                        color: "#9b9b9b",
                      }}
                      key={idx}
                      className="px-4 py-[6px] mx-2 text-sm rounded-md hover:opacity-80"
                    >
                      {it.gioChieu}
                    </button>
                  </a>
                ))} */}
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
