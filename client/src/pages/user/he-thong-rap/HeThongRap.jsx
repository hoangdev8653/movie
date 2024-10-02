import React, { useEffect, useState } from "react";
import styles from "./HeThongRap.module.scss";
import { AiOutlineLike } from "react-icons/ai";
import { CiShare2 } from "react-icons/ci";
import { getAllHeThongRap } from "../../../apis/heThongRap";
function HeThongRap() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllHeThongRap();
      if (response.status === 200) {
        setData(response.data.content);
      } else {
        console.log("Can not Call Api");
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ background: "#1a1d29" }} className="w-full">
      <div className="max-w-[1080px] text-center mx-auto">
        <p className="font-semibold text-2xl text-white pt-4">Hệ thống rạp</p>
        <div
          className={`${styles.layout} text-white text-center justify-center`}
        >
          {data?.length > 0 &&
            data?.map((item, index) => (
              <div key={index} className=" my-8 ">
                <a href={`/rap-phim/${item?.maHeThongRap}`}>
                  <img
                    className="text-center mx-auto cursor-pointer w-[243px] h-[243px] object-cover border-solid border-[0.5px] rounded-full border-gray-600"
                    src={item?.logo}
                    alt={item?.maHeThongRap}
                  />
                </a>
                <p className="font-semibold my-2 text-left flex gap-1 justify-center">
                  <span className="hover:text-green-500">
                    {item?.tenHeThongRap}
                  </span>
                  <span className="my-auto hover:opacity-75 cursor-pointer">
                    <AiOutlineLike />
                  </span>
                </p>
                <div className="flex gap-2 justify-center">
                  <a href={`/rap-phim/${item?.maHeThongRap}`}>
                    <div
                      style={{ background: "#B2EC0F" }}
                      className="px-2 py-2 rounded-md font-semibold cursor-pointer hover:opacity-85"
                    >
                      Thông tin chi tiết
                    </div>
                  </a>
                  <div className="px-2 py-2 rounded-md font-semibold flex border-[1px] border-green-500 cursor-pointer hover:opacity-80">
                    <CiShare2 />
                    <span className="mx-[2px]">Chia Sẽ</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default HeThongRap;
