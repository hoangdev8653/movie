import React, { useEffect, useState } from "react";
import SliderCustom from "../../components/SliderCustom/SliderCustom";
import ModalCustom from "../../components/Modal";
import { NewsStore } from "../../store/news";
import { BsFillTagsFill } from "react-icons/bs";
import { FaFacebookF, FaPinterest, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function TinTuc() {
  const { data, getAllNews } = NewsStore();
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await getAllNews();
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
      id="tintuc"
      className="py-4 text-white "
    >
      <p className="font-bold text-2xl py-4 text-center mx-1 ">Tin tức</p>

      <div className="mx-auto justify-center max-w-[1050px]">
        <div className="mx-2">
          <SliderCustom
            dots={true}
            showSlider={2}
            showSliderScroll={2}
            responsiveSettings={responsiveSettings}
          >
            {data?.length > 0 &&
              data?.map((item, index) => (
                <div key={index} className=" max-w-[500px] px-[2px]">
                  <img
                    onClick={() => handleOpenModal(item)}
                    className="w-full h-[260px] rounded object-cover"
                    src={item?.hinhAnh}
                    alt={item?.id}
                  />
                  <div className="py-3">
                    <h4 className="text-base font-bold mb-3 text-center">
                      {item?.tieuDe}
                    </h4>
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
                <div className="justify-center ">
                  <img
                    className="mx-auto w-full max-w-[320px] h-[300px] object-cover rounded-xl"
                    src={selectedItem?.hinhAnh}
                    alt={selectedItem?._id}
                  />
                  <div className="flex mx-auto gap-2 justify-center my-2">
                    <a
                      title="Share on Facebook"
                      className="my-[3px] mx-[6px] pt-[2.5px] rounded border-[0px] border-solid text-white"
                      href="/"
                    >
                      <FaFacebookF className="bg-blue-600  text-white p-[5px] rounded text-3xl hover:bg-green-500" />
                    </a>
                    <a
                      title="Share on Twitter"
                      className="my-[3px] mx-[6px] pt-[2.5px] rounded border-[0px] border-solid text-white"
                      href="/"
                    >
                      <FaXTwitter className="bg-black  text-white p-[5px] rounded text-3xl hover:bg-green-500" />
                    </a>
                    <a
                      title="Share on Pinterest"
                      className="my-[3px] mx-[6px] pt-[2.5px] rounded border-[0px] border-solid text-white"
                      href="/"
                    >
                      <FaPinterest className="bg-red-700  text-white p-[5px] rounded text-3xl hover:bg-green-500" />
                    </a>
                    <a
                      title="Share on Linkedin"
                      className="my-[3px] mx-[6px] pt-[2.5px] rounded border-[0px] border-solid text-white"
                      href="/"
                    >
                      <FaLinkedin className="bg-blue-900 text-white p-[5px] rounded text-3xl hover:bg-green-500" />
                    </a>
                  </div>
                </div>
              </div>
              <div className=" flex-1">
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

export default TinTuc;
