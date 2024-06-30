import React, { useEffect, useState } from "react";
import SliderCustom from "../../../components/sliderCustom/SliderCustom";
import { getAllNews } from "../../../apis/news";
import ModalCustom from "../../../components/modal/Modal";
function News() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllNews();
      if (response.status === 200) {
        setData(response.data.content);
      } else {
        console.log("Fail!!!");
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
      id="tintuc"
      className="py-4 text-white "
    >
      <p className="font-bold text-2xl py-4 text-center mx-1 ">Tin tức</p>

      <div className=" mx-auto justify-center max-w-[1050px]">
        <div className="mx-2">
          <SliderCustom
            dots={true}
            showSlider={2}
            showSliderScroll={2}
            responsiveSettings={responsiveSettings}
          >
            {data.length > 0 &&
              data.map((item, index) => (
                <div key={index} className=" max-w-[500px] px-[2px]">
                  <img
                    onClick={() => handleOpenModal(item)}
                    className="w-full h-[260px] rounded object-cover"
                    src={item.hinhAnh}
                    alt={item.id}
                  />
                  <div className="py-3">
                    <h4 className="text-base font-bold mb-3 text-center">
                      {item.tieuDe}
                    </h4>
                  </div>
                </div>
              ))}
          </SliderCustom>
          {selectedItem && (
            <ModalCustom
              item={selectedItem}
              onClose={() => setSelectedItem(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default News;
