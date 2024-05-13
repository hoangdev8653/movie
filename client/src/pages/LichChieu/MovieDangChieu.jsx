import React from "react";
import SliderCustom from "../../components/SliderCustom/SliderCustom";
import Button from "../../components/Button";
import { HiOutlineTicket } from "react-icons/hi";
import { Link } from "react-router-dom";

function movieDangChieu({ movieDangChieu }) {
  return (
    <>
      <div
        id="dangChieu"
        className="my-8 max-w-[1050px] mx-auto text-center text-white"
      >
        <p className="font-bold text-2xl mb-2">Phim đang chiếu</p>
        <div className="w-full">
          <SliderCustom dots={true} showSlider={4} showSliderScroll={1}>
            {movieDangChieu &&
              movieDangChieu.map((item, index) => (
                <Link to={`/phim/${item.slug}`}>
                  <div
                    key={index}
                    className="px-[12px] pb-[30px] focus:border-none"
                  >
                    <img
                      className="rounded-lg focus:border-none w-[240px] h-[300px]"
                      src={item.hinhAnh}
                      alt={item._id}
                    />
                    <p className="mt-2 font-bold">{item.tenPhim}</p>
                    <p>
                      Thể loại phim:
                      <span className="font-semibold text-xs">
                        {" "}
                        {item.theLoai}
                      </span>
                    </p>
                    <Button className="px-3 py-2 bg-green-500 mt-2 rounded-lg text-white font-semibold flex mx-auto hover:opacity-90">
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

export default movieDangChieu;
