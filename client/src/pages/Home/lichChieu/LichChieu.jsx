import React from "react";
import { HiOutlineTicket } from "react-icons/hi";
import { BsExclamationCircle } from "react-icons/bs";
import SliderCustom from "../../../components/SliderCustom/SliderCustom";
import Button from "../../../components/Button";
function LichChieu() {
  return (
    <div style={{ background: "#1a1d29" }} className="w-full ">
      <div className="border-t-2 border-gray-300"></div>
      <div
        id="dangChieu"
        className="my-8 max-w-[1050px] mx-auto text-center text-white"
      >
        <p className="font-bold text-2xl mb-2">Phim đang chiếu</p>
        <div className="w-full">
          <SliderCustom dots={true} showSlider={4} showSliderScroll={1}>
            <div className="px-[12px] pb-[30px]">
              <img
                className="rounded-lg"
                src="https://www.bhdstar.vn/wp-content/uploads/2024/03/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp.jpg"
                alt="anh1"
              />
              <p className="mt-2 font-bold">KUNG FU PANDA 4</p>
              <p>
                Thể loại phim: <span className="font-semibold">Animation</span>
              </p>
              <Button className="px-3 py-2 bg-green-500 mt-2 rounded-lg text-white font-semibold flex mx-auto">
                <HiOutlineTicket className="justify-center text-center items-center my-auto mx-[2px]" />
                Đặt vé ngay
              </Button>
            </div>
            <div className="px-[12px] pb-[30px]">
              <img
                className="rounded-lg"
                src="https://www.bhdstar.vn/wp-content/uploads/2024/03/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp.jpg"
                alt="anh1"
              />
              <p className="mt-2 font-bold">KUNG FU PANDA 4</p>
              <p>
                Thể loại phim: <span className="font-semibold">Animation</span>
              </p>
              <div className="flex justify-center">
                <Button className="px-3 py-2 bg-green-500 mt-2 rounded-lg text-white font-semibold flex hover:opacity-75">
                  <HiOutlineTicket className="justify-center text-center items-center my-auto mx-[2px]" />
                  Đặt vé ngay
                </Button>
                <a title="KUNG FU PANDA 4" href="/" className="mx-2 my-auto">
                  <BsExclamationCircle />
                </a>
              </div>
            </div>
            <div className="px-[12px] pb-[30px]">
              <img
                className="rounded-lg"
                src="https://www.bhdstar.vn/wp-content/uploads/2024/03/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp.jpg"
                alt="anh1"
              />
              <p className="mt-2 font-bold">KUNG FU PANDA 4</p>
              <p>
                Thể loại phim: <span className="font-semibold">Animation</span>
              </p>
              <Button className="px-3 py-2 bg-green-500 mt-2 rounded-lg text-white font-semibold flex mx-auto">
                <HiOutlineTicket className="justify-center text-center items-center my-auto mx-[2px]" />
                Đặt vé ngay
              </Button>
            </div>
            <div className="px-[12px] pb-[30px]">
              <img
                className="rounded-lg"
                src="https://www.bhdstar.vn/wp-content/uploads/2024/03/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp.jpg"
                alt="anh1"
              />
              <p className="mt-2 font-bold">KUNG FU PANDA 4</p>
              <p>
                Thể loại phim: <span className="font-semibold">Animation</span>
              </p>
              <Button className="px-3 py-2 bg-green-500 mt-2 rounded-lg text-white font-semibold flex mx-auto">
                <HiOutlineTicket className="justify-center text-center items-center my-auto mx-[2px]" />
                Đặt vé ngay
              </Button>
            </div>
            <div className="px-[12px] pb-[30px]">
              <img
                className="rounded-lg"
                src="https://www.bhdstar.vn/wp-content/uploads/2024/03/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp.jpg"
                alt="anh1"
              />
              <p className="mt-2 font-bold">KUNG FU PANDA 4</p>
              <p>
                Thể loại phim: <span className="font-semibold">Animation</span>
              </p>
              <Button className="px-3 py-2 bg-green-500 mt-2 rounded-lg text-white font-semibold flex mx-auto">
                <HiOutlineTicket className="justify-center text-center items-center my-auto mx-[2px]" />
                Đặt vé ngay
              </Button>
            </div>
            <div className="px-[12px] pb-[30px]">
              <img
                className="rounded-lg"
                src="https://www.bhdstar.vn/wp-content/uploads/2024/03/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp.jpg"
                alt="anh1"
              />
              <p className="mt-2 font-bold">KUNG FU PANDA 4</p>
              <p>
                Thể loại phim: <span className="font-semibold">Animation</span>
              </p>
              <Button className="px-3 py-2 bg-green-500 mt-2 rounded-lg text-white font-semibold flex mx-auto">
                <HiOutlineTicket className="justify-center text-center items-center my-auto mx-[2px]" />
                Đặt vé ngay
              </Button>
            </div>
          </SliderCustom>
        </div>
      </div>
      <div className="border-t-2 border-gray-300"></div>
      <div
        id="sapChieu"
        className="my-8 max-w-[1050px] mx-auto text-center text-white"
      >
        <p className="text-white font-bold text-2xl mb-2">Phim sắp chiếu</p>
        <div className="w-full">
          <SliderCustom dots={true} showSlider={4} showSliderScroll={1}>
            <div className="px-[12px] pb-[30px]">
              <img
                className="rounded-lg"
                src="https://www.bhdstar.vn/wp-content/uploads/2024/03/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp.jpg"
                alt="anh1"
              />
              <p className="mt-2 font-bold text-white">KUNG FU PANDA 4</p>
              <p>
                Thể loại phim: <span className="font-semibold">Animation</span>
              </p>
              <Button className="px-3 py-2 bg-green-500 mt-2 rounded-lg text-white font-semibold flex mx-auto">
                <HiOutlineTicket className="justify-center text-center items-center my-auto mx-[2px]" />
                Đặt vé ngay
              </Button>
            </div>
            <div className="px-[12px] pb-[30px]">
              <img
                className="rounded-lg"
                src="https://www.bhdstar.vn/wp-content/uploads/2024/03/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp.jpg"
                alt="anh1"
              />
              <p className="mt-2 font-bold">KUNG FU PANDA 4</p>
              <p>
                Thể loại phim: <span className="font-semibold">Animation</span>
              </p>
              <div className="flex justify-center">
                <Button className="px-3 py-2 bg-green-500 mt-2 rounded-lg text-white font-semibold flex hover:opacity-75">
                  <HiOutlineTicket className="justify-center text-center items-center my-auto mx-[2px]" />
                  Đặt vé ngay
                </Button>
                <a title="KUNG FU PANDA 4" href="/" className="mx-2 my-auto">
                  <BsExclamationCircle />
                </a>
              </div>
            </div>
            <div className="px-[12px] pb-[30px]">
              <img
                className="rounded-lg"
                src="https://www.bhdstar.vn/wp-content/uploads/2024/03/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp.jpg"
                alt="anh1"
              />
              <p className="mt-2 font-bold">KUNG FU PANDA 4</p>
              <p>
                Thể loại phim: <span className="font-semibold">Animation</span>
              </p>
              <Button className="px-3 py-2 bg-green-500 mt-2 rounded-lg text-white font-semibold flex mx-auto">
                <HiOutlineTicket className="justify-center text-center items-center my-auto mx-[2px]" />
                Đặt vé ngay
              </Button>
            </div>
            <div className="px-[12px] pb-[30px]">
              <img
                className="rounded-lg"
                src="https://www.bhdstar.vn/wp-content/uploads/2024/03/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp.jpg"
                alt="anh1"
              />
              <p className="mt-2 font-bold">KUNG FU PANDA 4</p>
              <p>
                Thể loại phim: <span className="font-semibold">Animation</span>
              </p>
              <Button className="px-3 py-2 bg-green-500 mt-2 rounded-lg text-white font-semibold flex mx-auto">
                <HiOutlineTicket className="justify-center text-center items-center my-auto mx-[2px]" />
                Đặt vé ngay
              </Button>
            </div>
            <div className="px-[12px] pb-[30px]">
              <img
                className="rounded-lg"
                src="https://www.bhdstar.vn/wp-content/uploads/2024/03/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp.jpg"
                alt="anh1"
              />
              <p className="mt-2 font-bold">KUNG FU PANDA 4</p>
              <p>
                Thể loại phim: <span className="font-semibold">Animation</span>
              </p>
              <Button className="px-3 py-2 bg-green-500 mt-2 rounded-lg text-white font-semibold flex mx-auto">
                <HiOutlineTicket className="justify-center text-center items-center my-auto mx-[2px]" />
                Đặt vé ngay
              </Button>
            </div>
            <div className="px-[12px] pb-[30px]">
              <img
                className="rounded-lg"
                src="https://www.bhdstar.vn/wp-content/uploads/2024/03/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp.jpg"
                alt="anh1"
              />
              <p className="mt-2 font-bold">KUNG FU PANDA 4</p>
              <p>
                Thể loại phim: <span className="font-semibold">Animation</span>
              </p>
              <Button className="px-3 py-2 bg-green-500 mt-2 rounded-lg text-white font-semibold flex mx-auto">
                <HiOutlineTicket className="justify-center text-center items-center my-auto mx-[2px]" />
                Đặt vé ngay
              </Button>
            </div>
          </SliderCustom>
        </div>
      </div>
    </div>
  );
}

export default LichChieu;
