import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import imgageDeafaut from "../../../assets/imgDeafaut.jpg";
import Payment from "./payment/Payment";
import "./BookTicket.css";
import { suatChieuStore } from "../../../store/SuatChieu";
import ExpiredTime from "./ExpiredTime";
import { getLocalStorage } from "../../../utils/localStorage";

function BookTicKet() {
  const { id } = useParams();
  const [arrayGhe, setArrayGhe] = useState([]);
  const { data, getGioChieuById } = suatChieuStore();
  const user = getLocalStorage("user");

  useEffect(() => {
    const fetchData = async () => {
      await getGioChieuById(id);
    };
    fetchData();
  }, [id]);

  function handleAddClass(soGhe) {
    setArrayGhe((prevArrayGhe) => {
      const newArrayGhe = [...prevArrayGhe];
      const selectedsoGhe = newArrayGhe.indexOf(soGhe);
      if (selectedsoGhe !== -1) {
        newArrayGhe.splice(selectedsoGhe, 1);
      } else {
        newArrayGhe.push(soGhe);
      }
      return newArrayGhe;
    });

    const ghe = document.querySelectorAll(".status")[soGhe - 1];
    if (ghe.classList.contains("gheDangChon")) {
      ghe.classList.remove("gheDangChon");
    } else {
      ghe.classList.add("gheDangChon");
    }
  }
  return (
    <div className="datve w-full bg-white flex ">
      <div className="w-[70%]">
        <div className="w-full">
          <div style={{ boxShadow: " 0 0 15px rgb(0 0 0 / 30%)" }}>
            <div className="ml-8 flex-grow-0 flex-shrink-0 flex-basis-80 px-[10px] pt-[10px] pb-[20px] flex justify-between ">
              <ol className="flex items-center w-full ">
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
                  <p className="absolute top-14 left-[-16px]">CHỌN GHẾ</p>
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
                  <p className="absolute top-14 left-[-16px]">THANH TOÁN</p>
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
                  <p className="absolute top-14 left-[-16px]">KẾT QUẢ ĐẶT VÉ</p>
                </li>
              </ol>
              <a
                href="/profile"
                className="mx-4 cursor-pointer  flex-grow-0 flex-shrink-0 flex-basis-150"
              >
                <img
                  className="rounded-full w-[60px] h-[60px] object-cover mx-auto mb-2"
                  src={imgageDeafaut}
                  alt="avarta"
                />
                <div className="w-full mx-4 text-base text-gray-400 font-medium">
                  {user.username}
                </div>
              </a>
            </div>
          </div>
          <div className="chair flex mt-4">
            <div
              style={{
                backgroundImage: `url(${data?.suatChieuId?.movieId?.hinhAnh})`,
              }}
              className="top-[100px] left-0 w-[7.5%] h-full fixed object-cover bg-no-repeat mt-[20px] bg-cover"
            >
              <div className="w-full h-full opacity-65"></div>
            </div>
            <div className="screen py-0 px-[10%] relative block ml-[10%] w-full">
              <div className="flex mb-2 justify-between mx-2">
                <div className="flex">
                  <img
                    className="w-[50px] h-[50px] rounded-full"
                    src={data?.ngayChieuId?.rapId?.hinhAnh}
                    alt={data?.ngayChieuId?.rapId?._id}
                  />
                  <div className="ml-3">
                    <p className="text-green-400 font-bold">
                      {data?.ngayChieuId?.rapId?.tenRap}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span>{data?.gioChieu}</span>
                      <span> - </span>
                      <span>{data?.ngayChieuId?.ngaychieu}</span>
                    </p>
                  </div>
                </div>
                <ExpiredTime />
              </div>
              <div className="overflow-x-auto overflow-y-hidden">
                <div className="min-w-[600px]">
                  <div className="w-full">
                    <img
                      src="https://movie-booking-project.vercel.app/img/bookticket/screen.png"
                      alt="screen"
                    />
                  </div>
                  <div className="ghe">
                    {data?.danhSachGhe?.map((item, index) => (
                      <div key={index} className="py-0 px-[10%]">
                        <button
                          disabled={item.trangThai === "DaDat" ? true : false}
                          onClick={() => handleAddClass(item.soGhe)}
                          className={`${
                            item.trangThai === "Trong"
                              ? "gheThuong cursor-pointer"
                              : "gheDaChon "
                          }    status relative inline-block`}
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
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 mb-8 mx-20">
                    <div>
                      <div className="gheThuong relative inline-block ml-8 ">
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
                      <div className="gheDangChon  relative inline-block ml-8 ">
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
                      <div className="gheDaChon  inline-block ml-6  ">
                        <svg
                          className="svg_color"
                          focusable="false"
                          viewBox="0 0 24 24"
                          width={30}
                          aria-hidden="true"
                        >
                          <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H4c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1z"></path>
                        </svg>
                      </div>
                      <p>Ghế Đã Mua</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[30%]">
        <Payment data={data} arrayGhe={arrayGhe} />
      </div>
    </div>
  );
}

export default BookTicKet;
