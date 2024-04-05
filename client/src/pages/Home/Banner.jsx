import Slider from "react-slick";

function Banner() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
  };
  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
          <h2>hoàng</h2>
          <h2>huy</h2>
          <h2>huynh</h2>
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
