import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "../customArrows";
import "./SliderCustom.jsx";
function SliderCustom({ children, dots, showSlider, showSliderScroll }) {
  let settings = {
    dots: dots,
    infinite: true,
    speed: 500,
    slidesToShow: showSlider,
    slidesToScroll: showSliderScroll,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return <Slider {...settings}>{children}</Slider>;
}

export default SliderCustom;
