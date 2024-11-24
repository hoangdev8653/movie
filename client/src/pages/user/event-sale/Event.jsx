import React, { useEffect, useState } from "react";
import SliderCustom from "../../../components/SliderCustom/SliderCustom";
import ModalCustom from "../../../components/Modal";
import { EventAndSaleStore } from "../../../store/EventAndSale";
import { BsFillTagsFill } from "react-icons/bs";
import { FaFacebookF, FaPinterest, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Event() {
  const { eventData, getAllEvent } = EventAndSaleStore();
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getAllEvent();
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const handleOpenModal = (item) => {
    setSelectedItem(item);
  };

  const responsiveSettings = [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
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
    <div
      style={{ background: "rgb(26, 29, 41)" }}
      id="event"
      className="py-4 text-white "
    >
      <p className="font-bold text-2xl py-4 text-center mx-1 ">Sự kiện</p>

      <div className="mx-auto justify-center max-w-[1050px]">
        <div className="mx-2">
          <SliderCustom
            dots={true}
            showSlider={3}
            showSliderScroll={2}
            responsiveSettings={responsiveSettings}
          >
            {eventData?.length > 0 &&
              eventData?.map((item, index) => (
                <div key={index} className="px-3 pb-[30px] relative">
                  <img
                    onClick={() => handleOpenModal(item)}
                    className=" rounded-lg object-cover"
                    src={item?.hinhAnh}
                    alt={item?.id}
                  />
                  <div className="py-3">
                    <p className="text-base font-bold mb-3 text-center text-green-600">
                      {item?.tieuDe}
                    </p>
                    <p className="text-sm text-center">
                      Thời gian khuyến mãi: {item?.thoiGian}
                    </p>
                  </div>
                </div>
              ))}
          </SliderCustom>
        </div>
      </div>
      {selectedItem && (
        <ModalCustom
          className="lg:max-w-[70%]"
          onClose={() => {
            handleOpenModal(null);
          }}
        >
          <div className="relative items-center mx-auto">
            <div className="flex flex-wrap m-4 gap-4 max-w-full md:flex-nowrap">
              <div className="w-full md:max-w-[33%] ">
                <div className="justify-center">
                  <img
                    className="mx-auto w-full max-w-[320px] h-auto object-contain rounded-xl"
                    src={selectedItem?.hinhAnh}
                    alt={selectedItem?._id}
                  />
                  <div className="flex mx-auto gap-2 justify-center my-2">
                    <a
                      title="Share on Facebook"
                      className="my-[3px] mx-[6px] pt-[2.5px] rounded border-0 text-white"
                      href="/"
                    >
                      <FaFacebookF className="bg-blue-600 text-white p-[5px] rounded text-3xl hover:bg-green-500" />
                    </a>
                    <a
                      title="Share on Twitter"
                      className="my-[3px] mx-[6px] pt-[2.5px] rounded border-0 text-white"
                      href="/"
                    >
                      <FaXTwitter className="bg-black text-white p-[5px] rounded text-3xl hover:bg-green-500" />
                    </a>
                    <a
                      title="Share on Pinterest"
                      className="my-[3px] mx-[6px] pt-[2.5px] rounded border-0 text-white"
                      href="/"
                    >
                      <FaPinterest className="bg-red-700 text-white p-[5px] rounded text-3xl hover:bg-green-500" />
                    </a>
                    <a
                      title="Share on Linkedin"
                      className="my-[3px] mx-[6px] pt-[2.5px] rounded border-0 text-white"
                      href="/"
                    >
                      <FaLinkedin className="bg-blue-900 text-white p-[5px] rounded text-3xl hover:bg-green-500" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:flex-1">
                <div className="mx-4">
                  <h1 className="text-green-600">{selectedItem.tieuDe}</h1>
                  <p className="my-1">{selectedItem.thoiGian}</p>

                  <p className="flex gap-2 my-2">
                    <BsFillTagsFill className="text-green-600 text-xl" />
                    <span className="uppercase">
                      {selectedItem.kieuNoiDung}
                    </span>
                  </p>
                  <p className="font-medium">{selectedItem.noiDung}</p>
                </div>
              </div>
            </div>
          </div>
        </ModalCustom>
      )}
    </div>
  );
}
export default Event;
