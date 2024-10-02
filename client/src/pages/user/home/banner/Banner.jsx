import React, { useEffect } from "react";
import SliderCustom from "../../../../components/SliderCustom/SliderCustom.jsx";
import "./Banner.css";
import { movieStore } from "../../../../store/Movie.js";

function Banner() {
  const { getAllBanner, data } = movieStore();
  useEffect(() => {
    getAllBanner();
  }, []);
  return (
    <div className="w-full overflow-x-hidden overflow-y-hidden ">
      <SliderCustom dots={true} showSlider={1} showSliderScroll={1}>
        {data &&
          data?.map((item, index) => (
            <img
              className="h-screen w-full object-cover object-center"
              key={index}
              src={item?.movieId?.hinhAnh}
              alt={item?.movieId?.tenPhim}
            />
          ))}
      </SliderCustom>
    </div>
  );
}

export default Banner;
