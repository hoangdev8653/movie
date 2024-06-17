import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "../customArrows";
import "./SliderCustom.jsx";
function SliderCustom({
  children,
  dots,
  showSlider,
  showSliderScroll,
  responsiveSettings,
}) {
  let settings = {
    dots: dots,
    infinite: true,
    speed: 500,
    slidesToShow: showSlider,
    slidesToScroll: showSliderScroll,
    responsive: responsiveSettings,
  };
  return <Slider {...settings}>{children}</Slider>;
}

export default SliderCustom;
