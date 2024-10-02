import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "../customArrows";
function SliderCustom({
  children,
  dots,
  showSlider,
  showSliderScroll,
  responsiveSettings,
  autoplay,
  nextArrow: SampleNextArrow,
  prevArrow: SamplePrevArrow,
}) {
  let settings = {
    dots: dots,
    infinite: true,
    autoplay: autoplay,
    speed: 500,
    slidesToShow: showSlider,
    slidesToScroll: showSliderScroll,
    responsive: responsiveSettings,
  };
  return (
    <div className="overflow-hidden">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

export default SliderCustom;
