import React from "react";
import SliderCustom from "../../../components/SliderCustom/SliderCustom";
function Event() {
  return (
    <div style={{ background: "#1a1d29" }} className="w-full  ">
      <div id="sale" className="max-w-[1050px] mx-auto text-white">
        <p className="font-bold text-2xl py-4 text-center">Khuyến mãi</p>
        <div className="w-full">
          <SliderCustom dots={true} showSlider={3} showSliderScroll={1}>
            <div className="px-[12px] pb-[30px]">
              <img
                className="rounded-lg"
                src="https://www.bhdstar.vn/wp-content/uploads/2023/08/Rectangle-19.png"
                alt="anh1"
              />
              <p
                style={{ color: "#B2EC0F" }}
                className="mt-2 mb-1 font-bold hover:text-green-500 cursor-pointer"
              >
                Giá vé chỉ 55k - Dành cho Fan cứng U22
              </p>
              <p className="text-sm">
                Thời gian khuyến mãi: 26/8/2023 - 26/9/2023
              </p>
            </div>
            <div className="px-[12px] pb-[30px]">
              <img
                className="rounded-lg"
                src="https://www.bhdstar.vn/wp-content/uploads/2023/08/Rectangle-18.png"
                alt="anh1"
              />
              <p
                style={{ color: "#B2EC0F" }}
                className="mt-2 mb-1 font-bold hover:text-green-500 cursor-pointer"
              >
                Chạm thẻ visa - Tặng ngay bắp lớn
              </p>
              <p className="text-sm">
                Thời gian khuyến mãi: 26/8/2023 – 26/9/2023
              </p>
            </div>
            <div className="px-[12px] pb-[30px]">
              <img
                className="rounded-lg"
                src="https://www.bhdstar.vn/wp-content/uploads/2023/08/Rectangle-21.png"
                alt="anh1"
              />
              <p
                style={{ color: "#B2EC0F" }}
                className="mt-2 mb-1 font-bold hover:text-green-500 cursor-pointer"
              >
                Quét mã QR – Thẳng tiến vào Rạp
              </p>
              <p className="text-sm">
                Thời gian khuyến mãi: 26/8/2023 – 26/9/2023
              </p>
            </div>
            <div className="px-[12px] pb-[30px]">
              <img
                className="rounded-lg"
                src="https://www.bhdstar.vn/wp-content/uploads/2023/08/Rectangle-20.png"
                alt="anh1"
              />
              <p
                style={{ color: "#B2EC0F" }}
                className="mt-2 mb-1 font-bold hover:text-green-500 cursor-pointer"
              >
                Happy day thứ 2 giá rẻ – Chỉ từ 60k/ vé
              </p>
              <p className="text-sm">
                Thời gian khuyến mãi: 26/8/2023 – 26/9/2023
              </p>
            </div>
          </SliderCustom>
        </div>
      </div>
      <div id="event" className="max-w-[1050px] mx-auto  text-white">
        <p className="font-bold text-2xl py-4 text-center">Sự kiện</p>
        <div className="w-full">
          <SliderCustom showSlider={3} showSliderScroll={1} dots={true}>
            <div className="px-[12px] pb-[30px]">
              <img
                className="rounded-lg"
                src="https://www.bhdstar.vn/wp-content/uploads/2023/08/Rectangle-19.png"
                alt="anh1"
              />
              <p
                style={{ color: "#B2EC0F" }}
                className="mt-2 mb-1 font-bold hover:text-green-500 cursor-pointer"
              >
                Giá vé chỉ 55k - Dành cho Fan cứng U22
              </p>
              <p className="text-sm">
                Thời gian khuyến mãi: 26/8/2023 - 26/9/2023
              </p>
            </div>
            <div className="px-[12px] pb-[30px]">
              <img
                className="rounded-lg"
                src="https://www.bhdstar.vn/wp-content/uploads/2023/08/Rectangle-18.png"
                alt="anh1"
              />
              <p
                style={{ color: "#B2EC0F" }}
                className="mt-2 mb-1 font-bold hover:text-green-500 cursor-pointer"
              >
                Chạm thẻ visa - Tặng ngay bắp lớn
              </p>
              <p className="text-sm">
                Thời gian khuyến mãi: 26/8/2023 – 26/9/2023
              </p>
            </div>
            <div className="px-[12px] pb-[30px]">
              <img
                className="rounded-lg"
                src="https://www.bhdstar.vn/wp-content/uploads/2023/08/Rectangle-21.png"
                alt="anh1"
              />
              <p
                style={{ color: "#B2EC0F" }}
                className="mt-2 mb-1 font-bold hover:text-green-500 cursor-pointer"
              >
                Quét mã QR – Thẳng tiến vào Rạp
              </p>
              <p className="text-sm">
                Thời gian khuyến mãi: 26/8/2023 – 26/9/2023
              </p>
            </div>
            <div className="px-[12px] pb-[30px]">
              <img
                className="rounded-lg"
                src="https://www.bhdstar.vn/wp-content/uploads/2023/08/Rectangle-20.png"
                alt="anh1"
              />
              <p
                style={{ color: "#B2EC0F" }}
                className="mt-2 mb-1 font-bold hover:text-green-500 cursor-pointer"
              >
                Happy day thứ 2 giá rẻ – Chỉ từ 60k/ vé
              </p>
              <p className="text-sm">
                Thời gian khuyến mãi: 26/8/2023 – 26/9/2023
              </p>
            </div>
          </SliderCustom>
        </div>
      </div>
    </div>
  );
}

export default Event;
