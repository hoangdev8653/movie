import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { getLocalStorage } from "../../../utils/localStorage";
import { getLichChieuByMovieId } from "../../../apis/lichChieu";

function LichChieu(props) {
  const user = getLocalStorage("user");
  const [lichChieu, setLichChieu] = useState([]);
  const { TabPane } = Tabs;
  const movieId = props.data[0]?._id;

  useEffect(() => {
    const fetchData = async () => {
      const response = await getLichChieuByMovieId(movieId);
      if (response.status === 200) {
        setLichChieu(response.data.content);
      } else {
        setLichChieu([]);
      }
    };
    fetchData();
  }, [movieId]);

  const groupedByHeThongRap = lichChieu.reduce((acc, item) => {
    const heThongRapId = item.gioChieuId.ngayChieuId.rapId.heThongRapId._id;
    const heThongRap = item.gioChieuId.ngayChieuId.rapId.heThongRapId;
    const ngayChieu = item.gioChieuId.ngayChieuId.ngaychieu;
    const tenRap = item.gioChieuId.ngayChieuId.rapId.tenRap;
    const hinhAnhRap = item.gioChieuId.ngayChieuId.rapId.hinhAnh;
    const diaChiRap = item.gioChieuId.ngayChieuId.rapId.diaChi;
    const gioChieu = item.gioChieuId.gioChieu;
    const gioChieuId = item.gioChieuId._id;

    if (!acc[heThongRapId]) {
      acc[heThongRapId] = {
        heThongRap,
        ngayChieu: {},
      };
    }

    if (!acc[heThongRapId].ngayChieu[ngayChieu]) {
      acc[heThongRapId].ngayChieu[ngayChieu] = [];
    }

    acc[heThongRapId].ngayChieu[ngayChieu].push({
      tenRap,
      hinhAnhRap,
      diaChiRap,
      gioChieu,
      gioChieuId,
    });

    return acc;
  }, {});

  return (
    <div
      id="lichchieuphim"
      className="flex bg-white text-black rounded-xl w-[90%] mx-auto max-w-[600px] pb-16"
    >
      {lichChieu && lichChieu.length > 0 ? (
        <Tabs tabPosition="left">
          {Object.keys(groupedByHeThongRap).map((heThongRapId, index) => {
            const heThongRap = groupedByHeThongRap[heThongRapId].heThongRap;
            const ngayChieuGroup = groupedByHeThongRap[heThongRapId].ngayChieu;

            return (
              <TabPane
                tab={
                  <div className="flex gap-2 mt-6">
                    <img
                      className="w-10 h-10 rounded-full mx-1"
                      src={heThongRap.logo}
                      alt={heThongRap.maHeThongRap}
                    />
                    <span className="text-base font-normal">
                      {heThongRap.tenHeThongRap}
                    </span>
                  </div>
                }
                key={index}
              >
                <Tabs tabPosition="top">
                  {Object.keys(ngayChieuGroup).map((ngayChieu, idx) => (
                    <TabPane
                      tab={<span className="text-base">{ngayChieu}</span>}
                      key={idx}
                    >
                      {ngayChieuGroup[ngayChieu].map((item, index) => (
                        <div
                          key={index}
                          className="mb-4 border-b border-solid border-[rgba(222,226,230)]"
                        >
                          <div className="flex gap-2">
                            <div>
                              <img
                                className="w-14 h-14 rounded"
                                src={item.hinhAnhRap}
                                alt="ảnh"
                              />
                            </div>
                            <div>
                              <p className="text-green-600 font-semibold text-lg">
                                {item.tenRap}
                              </p>
                              <p className="text-xs opacity-60">
                                {item.diaChiRap}
                              </p>
                            </div>
                          </div>

                          <div className="mt-2 mb-4">
                            <a
                              href={`/datve/${item.gioChieuId}`}
                              className="px-[10px] font-semibold py-1 cursor-pointer text-[#9b9b9b] border border-[#e4e4e4] bg-[rgba(246,246,246,.5)] rounded hover:text-red-500"
                            >
                              {item.gioChieu}
                            </a>
                          </div>
                        </div>
                      ))}
                    </TabPane>
                  ))}
                </Tabs>
              </TabPane>
            );
          })}
        </Tabs>
      ) : (
        <div className="font-bold text-black rounded-xl w-full mt-4 mb-[-32px]">
          <p className="max-w-[540px] text-center mx-auto">
            Không có lịch chiếu nào
          </p>
        </div>
      )}
    </div>
  );
}

export default LichChieu;
