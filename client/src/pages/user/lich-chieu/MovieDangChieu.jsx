import React from "react";
import SliderCustom from "../../../components/sliderCustom/SliderCustom";
import Button from "../../../components/Button";
import { HiOutlineTicket } from "react-icons/hi";

function movieDangChieu({ movieDangChieu }) {
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
        id="dangChieu"
        className="my-8 max-w-[1050px] mx-auto text-center text-white"
      >
        <p className="font-bold text-2xl mb-2">Phim đang chiếu</p>
        <div className="w-full">
          <SliderCustom
            dots={true}
            autoplay={true}
            showSlider={4}
            showSliderScroll={2}
            responsiveSettings={responsiveSettings}
          >
            {movieDangChieu &&
              movieDangChieu.map((item, index) => (
                <div className="px-[12px] pb-[30px]">
                  <a className=" focus:border-none" href={`/phim/${item.slug}`}>
                    <div key={index}>
                      <img
                        className="rounded-lg focus:border-none w-[240px] h-[300px] mx-auto"
                        src={item.hinhAnh}
                        alt={item._id}
                      />
                      <div className="hover:opacity-80">
                        <p className="mt-2 font-bold">{item.tenPhim}</p>
                        <p>
                          Thể loại phim:
                          <span className="font-semibold text-xs">
                            {item.theLoai}
                          </span>
                        </p>
                      </div>

                      <Button className="px-3 py-2 bg-green-500 mt-2 rounded-lg text-white font-semibold flex mx-auto hover:opacity-90">
                        <HiOutlineTicket className="justify-center text-center items-center my-auto mx-[2px]" />
                        Đặt vé ngay
                      </Button>
                    </div>
                  </a>
                </div>
              ))}
          </SliderCustom>
        </div>
      </div>
    </>
  );
}

export default movieDangChieu;
