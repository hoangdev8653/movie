import React from "react";
import SliderCustom from "../../../components/SliderCustom/SliderCustom";
import "./Banner.css";
function Banner() {
  return (
    <div className="w-full overflow-x-hidden overflow-y-hidden ">
      <SliderCustom dots={true} showSlider={1} showSliderScroll={1}>
        <img
          src="https://movie-booking-project.vercel.app/img/carousel/gai-gia-lam-chieu.jpg"
          alt="text"
        />
        <img
          src="https://movie-booking-project.vercel.app/img/carousel/lua-deu-gap-lua-dao.jpg"
          alt="text"
        />
        <img
          src="https://movie-booking-project.vercel.app/img/carousel/than-bip-jack-chot.jpg"
          alt="text"
        />
        <img
          src="https://movie-booking-project.vercel.app/img/carousel/gai-gia-lam-chieu.jpg"
          alt="text"
        />
      </SliderCustom>
    </div>
  );
}

export default Banner;
