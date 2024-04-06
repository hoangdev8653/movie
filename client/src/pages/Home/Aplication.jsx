import Slider from "react-slick";
import Button from "../../components/Button";
import React from "react";
function Application() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div id="ungdung">
      <div
        style={{
          backgroundImage:
            "url(https://movie-booking-project.vercel.app/img/mobile/backapp.jpg)",
        }}
        className="mt-12 h-fit bg-center text-white"
      >
        <div className="h-fit mx-auto content max-w-[940px]">
          <div className="mx-0 flex flex-wrap h-auto py-10">
            <div className="w-1/2 h-full">
              <div className="h-full flex items-center justify-center">
                <div>
                  <p className="font-semibold text-3xl mb-1.5">
                    Ứng dụng tiện lợi dành cho
                  </p>
                  <p className="font-semibold text-3xl">Người yêu điện ảnh</p>
                  <br />
                  <p>
                    <p>
                      Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm
                      rạp và đổi quà hấp dẫn.
                    </p>
                  </p>
                  <br />
                  <Button className="bg-red-500 px-4 py-2 w-1/2 text-center rounded hover:bg-red-700">
                    Cài đặt Progressive App!
                  </Button>
                  <p className="my-3.5">
                    Tix có 2 phiên bản
                    <span>
                      <a className="underline decoration-1.5" href="/">
                        {" "}
                        IOS{" "}
                      </a>
                    </span>
                    và
                    <span>
                      <a className="underline decoration-1.5" href="/">
                        {" "}
                        Android{" "}
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="w-1/2 h-full text-center">
              <div className="p-0 relative">
                <img
                  className="w-full h-auto px-[28%] block"
                  src="https://movie-booking-project.vercel.app/img/mobile/mobile.png"
                  alt="iphone"
                />
                <Slider {...settings}>
                  <div className="w-full absolute overflow-x-hidden top-[-420px] left-[142px]">
                    <div style={{ float: "left" }} className="">
                      <img
                        className="w-[190px] rounded-lg outline-none  "
                        src="https://movie-booking-project.vercel.app/img/mobile/slide7.jpg"
                        alt="anh7"
                      />
                    </div>
                    <div style={{ float: "left" }} className="">
                      <img
                        className="w-[190px] rounded-lg outline-none "
                        src="https://movie-booking-project.vercel.app/img/mobile/slide16.jpg"
                        alt="anh7"
                      />
                    </div>
                    <div style={{ float: "left" }} className="">
                      <img
                        className="w-[190px] rounded-lg outline-none  "
                        src="https://movie-booking-project.vercel.app/img/mobile/slide3.jpg"
                        alt="anh7"
                      />
                    </div>
                  </div>
                </Slider>
              </div>
            </div> */}
            <div className="w-1/2 h-full ">
              <div className="relative p-0">
                <img
                  style={{ paddingLeft: "28%", paddingRight: "28%" }}
                  className="w-full block items-center"
                  src="https://movie-booking-project.vercel.app/img/mobile/mobile.png"
                  alt="phone"
                />
                <div
                  style={{ height: "99%", padding: "1.5% 29.1% 1.3% 29.3%" }}
                  className=" top-0 left-0 w-full absolute flex"
                >
                  <img
                    className="rounded-xl"
                    src="https://movie-booking-project.vercel.app/img/mobile/slide3.jpg"
                    alt="a"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Application;
