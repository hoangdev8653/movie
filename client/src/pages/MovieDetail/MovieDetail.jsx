import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Ratting from "../../components/ratting";
import { Tabs } from "antd";
import DanhGia from "./reviews/DanhGia";
import LichChieu from "./LichChieu";
import ThongTin from "./reviews/thongTin/ThongTin";
import Loader from "../../components/loader/loader";
import { movieStore } from "../../store/movieStore";

function PhimDetail() {
  const { data, getAllMovieBySlug } = movieStore();
  const { slug } = useParams();
  const onChange = (key) => {};
  const items = [
    {
      key: "1",
      label: `LỊCH CHIẾU`,
      children: <LichChieu data={data} />,
    },
    {
      key: "2",
      label: `THÔNG TIN`,
      children: <ThongTin data={data} />,
    },
    {
      key: "3",
      label: `ĐÁNH GIÁ`,
      children: <DanhGia data={data} />,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getAllMovieBySlug(slug);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {data && data.length > 0 ? (
        <>
          <div
            className="pb-[50px]"
            style={{
              backgroundColor: "rgb(10, 32, 41)",
            }}
          >
            <div className="relative">
              <img
                className="w-full object-cover blur-md h-[830px] "
                src={data[0].hinhAnh}
                alt={data[0].slug}
              />
              <div className="flex justify-center ">
                <div className="absolute top-20 flex mx-2	">
                  <div className="w-56 h-80 mr-2 relative">
                    <img
                      className="w-full h-full anhPhim"
                      src={data[0].hinhAnh}
                      alt={data[0].slug}
                    />
                  </div>
                  <div className="text-red-50 mt-10 ml-4">
                    <div className="flex my-2">
                      <div className="bg-red-500 mr-2 rounded">
                        <span className="px-1">C18</span>
                      </div>
                      <span>{data[0].tenPhim}</span>
                    </div>

                    <p>
                      {data[0].thoiLuong} - {data[0].theLoai}
                    </p>
                    <p>{data[0].ngayKhoiChieu}</p>

                    <button className="py-3 px-6 text-base mt-2 rounded mb-5 bg-red-500 hover:opacity-80">
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
                          10
                        </p>
                      </div>
                    </div>
                    <Ratting disabled={true} rating={5} />
                  </div>
                </div>
              </div>
            </div>

            <Tabs
              className="justify-center item-center "
              defaultActiveKey="2"
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
        </>
      ) : (
        <>
          <Loader />
        </>
      )}
    </div>
  );
}

export default PhimDetail;
