import React from "react";
import { HiOutlineTicket } from "react-icons/hi";
import SliderCustom from "../../components/sliderCustom/SliderCustom";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

function movieSapChieu({ movieSapChieu }) {
  const responsiveSettings = [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 493,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ];
  return (
    <>
      <div
        id="sapChieu"
        className="my-8 max-w-[1050px] mx-auto text-center text-white"
      >
        <p className="text-white font-bold text-2xl mb-2">Phim sắp chiếu</p>
        <div className="w-full">
          <SliderCustom
            dots={true}
            showSlider={4}
            showSliderScroll={1}
            responsiveSettings={responsiveSettings}
          >
            {movieSapChieu &&
              movieSapChieu.map((item, index) => (
                <Link to={`/phim/${item.slug}`}>
                  <div key={index} className="px-[12px] pb-[30px]">
                    <img
                      className="rounded-lg"
                      src={item.hinhAnh}
                      alt={item._id}
                    />
                    <p className="mt-2 font-bold text-white">{item.tenPhim}</p>
                    <p>
                      Thể loại phim:{" "}
                      <span className="font-semibold text-xs">
                        {item.theLoai}
                      </span>
                    </p>
                    <Button className="px-3 py-2 bg-green-500 mt-2 rounded-lg text-white font-semibold flex mx-auto">
                      <HiOutlineTicket className="justify-center text-center items-center my-auto mx-[2px]" />
                      Đặt vé ngay
                    </Button>
                  </div>
                </Link>
              ))}
          </SliderCustom>
        </div>
      </div>
    </>
  );
}

export default movieSapChieu;
