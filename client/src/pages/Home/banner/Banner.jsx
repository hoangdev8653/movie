import React, { useEffect, useState } from "react";
import SliderCustom from "../../../components/SliderCustom/SliderCustom";
import "./Banner.css";
import { getAllBanner } from "../../../apis/movie.js";
function Banner() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllBanner();
        setData(response.data.content);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="w-full overflow-x-hidden overflow-y-hidden ">
      <SliderCustom dots={true} showSlider={1} showSliderScroll={1}>
        {data &&
          data.map((item, index) => (
            <img
              className="h-screen w-full object-fill object-center"
              key={index}
              src={item.movieId.hinhAnh}
              alt={item.movieId.tenPhim}
            />
          ))}
      </SliderCustom>
    </div>
  );
}

export default Banner;
