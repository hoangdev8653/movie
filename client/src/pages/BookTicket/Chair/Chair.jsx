import React, { useEffect, useState } from "react";
import imgageDeafaut from "../../../assets/imgDeafaut.jpg";
import styles from "./Chair.module.scss";
import ShowMessage from "./ShowMesssage";
function chair() {
  const [showMessage, setShowMessage] = useState(false);
  const [expiredTime, setExpiredTime] = useState(10);
  useEffect(() => {
    if (expiredTime > 0) {
      setTimeout(() => {
        setExpiredTime(expiredTime - 1);
      }, 1000);
      return clearTimeout(() => {});
    } else {
      setShowMessage(false);
      return;
    }
  }, [expiredTime]);

  const Ghe = [
    {
      stt: 1,
    },
    {
      stt: 2,
    },
    {
      stt: 3,
    },
    {
      stt: 4,
    },
    {
      stt: 5,
    },
    {
      stt: 6,
    },
    {
      stt: 7,
    },
    {
      stt: 8,
    },
    {
      stt: 9,
    },
    {
      stt: 10,
    },
    {
      stt: 11,
    },
    {
      stt: 12,
    },
    {
      stt: 13,
    },
    {
      stt: 14,
    },
    {
      stt: 15,
    },
    {
      stt: 16,
    },
    {
      stt: 17,
    },
    {
      stt: 18,
    },
    {
      stt: 19,
    },
    {
      stt: 20,
    },
    {
      stt: 21,
    },
    {
      stt: 22,
    },
    {
      stt: 23,
    },
    {
      stt: 24,
    },
    {
      stt: 25,
    },
    {
      stt: 26,
    },
    {
      stt: 27,
    },
    {
      stt: 28,
    },
    {
      stt: 29,
    },
    {
      stt: 30,
    },
    {
      stt: 31,
    },
    {
      stt: 32,
    },
    {
      stt: 33,
    },
    {
      stt: 34,
    },
    {
      stt: 35,
    },
    {
      stt: 36,
    },
    {
      stt: 37,
    },
    {
      stt: 38,
    },
    {
      stt: 39,
    },
    {
      stt: 40,
    },
    {
      stt: 41,
    },
    {
      stt: 42,
    },
    {
      stt: 43,
    },
    {
      stt: 44,
    },
    {
      stt: 45,
    },
    {
      stt: 46,
    },
    {
      stt: 47,
    },
    {
      stt: 48,
    },
    {
      stt: 49,
    },
    {
      stt: 50,
    },
    {
      stt: 51,
    },
    {
      stt: 52,
    },
    {
      stt: 53,
    },
    {
      stt: 54,
    },
    {
      stt: 55,
    },
    {
      stt: 56,
    },
    {
      stt: 57,
    },
    {
      stt: 58,
    },
    {
      stt: 59,
    },
    {
      stt: 60,
    },
    {
      stt: 61,
    },
    {
      stt: 62,
    },
    {
      stt: 63,
    },
    {
      stt: 64,
    },
    {
      stt: 65,
    },
    {
      stt: 66,
    },
    {
      stt: 67,
    },
    {
      stt: 68,
    },
    {
      stt: 69,
    },
    {
      stt: 70,
    },
    {
      stt: 71,
    },
    {
      stt: 72,
    },
    {
      stt: 73,
    },
    {
      stt: 74,
    },
    {
      stt: 75,
    },
    {
      stt: 76,
    },
    {
      stt: 77,
    },
    {
      stt: 78,
    },
    {
      stt: 79,
    },
    {
      stt: 80,
    },
    {
      stt: 81,
    },
    {
      stt: 82,
    },
    {
      stt: 83,
    },
    {
      stt: 84,
    },
    {
      stt: 85,
    },
    {
      stt: 86,
    },
    {
      stt: 87,
    },
    {
      stt: 88,
    },
    {
      stt: 89,
    },
    {
      stt: 90,
    },
    {
      stt: 91,
    },
    {
      stt: 92,
    },
    {
      stt: 93,
    },
    {
      stt: 94,
    },
    {
      stt: 95,
    },
    {
      stt: 96,
    },
    {
      stt: 97,
    },
    {
      stt: 98,
    },
    {
      stt: 99,
    },
    {
      stt: 100,
    },
  ];
  return (
    <div className="w-full">
      <div style={{ boxShadow: " 0 0 15px rgb(0 0 0 / 30%)" }}>
        <div className="ml-32 px-[10px] pt-[10px] pb-[20px] flex justify-between">
          <ol className="flex items-center w-full">
            <li className="relative flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
              <span className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                <svg
                  className="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
              </span>
              <p style={{ left: "-16px" }} className="absolute top-14">
                CHỌN GHẾ
              </p>
            </li>
            <li className="relative flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
              <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                <svg
                  className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                </svg>
              </span>
              <p style={{ left: "-20px" }} className="absolute top-14">
                THANH TOÁN
              </p>
            </li>
            <li className="relative flex items-center w-full">
              <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                <svg
                  className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                </svg>
              </span>
              <p style={{ left: "-36px" }} className="absolute top-14">
                KẾT QUẢ ĐẶT VÉ{" "}
              </p>
            </li>
          </ol>
          <div className="mx-4 justify-center cursor-pointer ">
            <img
              className="rounded-full w-[60px] h-[60px] object-cover mx-auto mb-2"
              src={imgageDeafaut}
              alt="avarta"
            />
            <div className="w-full mx-4 text-base text-gray-400 font-medium">
              Huỳnh Huy Hoàng
            </div>
          </div>
        </div>
      </div>
      <div className="chair flex mt-4">
        <div
          style={{
            backgroundImage:
              "url(http://movie0706.cybersoft.edu.vn/hinhanh/john-wick-iiisssssssssxxxssssssssssssssssssss_gp09.jpg)",
          }}
          className="top-[100px] left-0 w-[7.5%] h-full fixed object-cover bg-no-repeat mt-[20px] bg-cover"
        >
          <div className="w-full h-full opacity-65"></div>
        </div>
        <div className="screen py-0 px-[10%] relative block ml-[10%] w-full">
          <div className="flex mb-2 justify-between">
            <div className="flex">
              <img
                className="w-[50px] h-[50px] rounded-full"
                src="https://movie-booking-project.vercel.app/img/logo-theater/bhd.png"
                alt="he-thong-rap"
              />
              <div className="ml-3">
                <p className="text-green-400 font-bold">
                  BDH Star Cineplex <span className="text-black">- 3/2</span>
                </p>
                <p className="text-sm text-gray-600">Thứ sáu - 03:10 - Rạp 2</p>
              </div>
            </div>
            <div>
              <p className="text-gray-300 text-sm">Thời Gian Giữ ghế</p>
              <p className="text-red-400 font-semibold text-4xl text-center">
                {expiredTime}
              </p>
            </div>
          </div>
          <div className="overflow-x-auto overflow-y-hidden">
            <div className="min-w-[600px]">
              <div className="w-full">
                <img
                  src="https://movie-booking-project.vercel.app/img/bookticket/screen.png"
                  alt="screen"
                />
              </div>
              <div className={styles.ghe}>
                {Ghe.map((item, index) => (
                  <div key={index} className="py-0 px-[10%]">
                    <div
                      className={`${styles.gheThuong} cursor-pointer relative inline-block`}
                    >
                      <svg
                        className="MuiSvgIcon-root jss1144"
                        focusable="false"
                        viewBox="0 0 24 24"
                        width={30}
                        aria-hidden="true"
                        style={{ color: "rgb(62, 81, 93)" }}
                      >
                        <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H4c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1z"></path>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 mb-8 mx-20">
                <div>
                  <div
                    className={`${styles.gheThuong} cursor-pointer relative inline-block ml-8 `}
                  >
                    <svg
                      className="MuiSvgIcon-root jss1144"
                      focusable="false"
                      viewBox="0 0 24 24"
                      width={30}
                      aria-hidden="true"
                      style={{ color: "rgb(62, 81, 93)" }}
                    >
                      <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H4c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1z"></path>
                    </svg>
                  </div>
                  <p>Ghế Thường</p>
                </div>
                <div>
                  <div
                    className={`${styles.gheDangChon} cursor-pointer relative inline-block ml-8 `}
                  >
                    <svg
                      className="MuiSvgIcon-root jss1144"
                      focusable="false"
                      viewBox="0 0 24 24"
                      width={30}
                      aria-hidden="true"
                      style={{ color: "rgb(62, 81, 93)" }}
                    >
                      <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H4c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1z"></path>
                    </svg>
                  </div>
                  <p>Ghế Đang Chọn</p>
                </div>
                <div className="relative">
                  <div
                    className={`${styles.gheDaChon} cursor-pointer inline-block ml-6  `}
                  >
                    <svg
                      className={`${styles.svg_color}`}
                      focusable="false"
                      viewBox="0 0 24 24"
                      width={30}
                      aria-hidden="true"
                    >
                      <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H4c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1z"></path>
                    </svg>
                  </div>
                  <p>Ghế Đã Mua</p>
                  <div className={styles.close}>X</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showMessage ? (
        <>
          <ShowMessage />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default chair;
