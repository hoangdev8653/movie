import Slider from "react-slick";

function Banner() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <h2>hoang</h2>
      <h2>a</h2>
      <h2>hoangb</h2>
      <h2>hoangc</h2>
    </Slider>
  );
}

export default Banner;
