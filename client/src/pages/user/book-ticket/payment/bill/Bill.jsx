import React from "react";
import imgDeafaut from "../../../../../assets/imgDeafaut.jpg";
import { Link } from "react-router-dom";
import styles from "./Bill.module.scss";
import { IoMdClose } from "react-icons/io";

function Bill() {
  return (
    <div className="">
      <div className={`${styles.bill} z-50`}>
        <div className={styles.wrapper}>
          <div className="w-full p-10 text-center leading-7 z-100">
            <div className="flex gap-4">
              <div className="w-2/6 ">
                <img
                  style={{ width: "80%" }}
                  className="rounded"
                  src={imgDeafaut}
                  alt="image-movie"
                />
              </div>
              <div className="flex-1">
                <p className="text-lg relative">Join wick</p>
                <p className="text-green-500 font-medium">
                  <span>Lotte</span>
                </p>
                <p className="text-gray-400">Đà nẵng</p>
                <table className="w-full mt-2">
                  <tbody>
                    <tr>
                      <td valign="top">Suất chiếu:</td>
                      <td valign="top">
                        10h30
                        {" - "}
                        23-04-2024
                      </td>
                    </tr>
                    <tr>
                      <td valign="top">Phòng:</td>
                      <td valign="top">cgv</td>
                    </tr>
                    <tr>
                      <td valign="top">Ghế:</td>
                      <td valign="top">10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <div className="mt-6 ">
                <h3 className="mb-2 text-2xl">Thông Tin Đặt Vé</h3>
                <table className="w-full mt-3 mb-4 text-black coll">
                  <tbody>
                    <tr>
                      <td align="top">Họ tên:</td>
                      <td>huỳnh huy hoàng</td>
                    </tr>
                    <tr>
                      <td align="top">Điện thoại:</td>
                      <td>huỳnh huy hoàng</td>
                    </tr>
                    <tr>
                      <td align="top">Email:</td>
                      <td>huỳnh huy hoàng</td>
                    </tr>
                    <tr>
                      <td align="top">Trạng thái:</td>
                      <td>
                        Đã đặt thành công qua{" "}
                        <span className="text-orange-400"></span>
                      </td>
                    </tr>
                    <tr>
                      <td align="top">Tổng tiền:</td>
                      {/* <td>{totalTicket.toLocaleString("en-US")} đ</td> */}
                      <td>100.000</td>
                    </tr>
                  </tbody>
                </table>
                <p className="font-semibold italic">
                  Kiểm tra lại vé đã mua trong thông tin tài khoản của bạn !
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex pb-8 justify-evenly ">
            <button className={styles.bt}>Mua vé Phim Này</button>

            <Link to="/">
              <button className={styles.bt}>Quay về trang chủ</button>
            </Link>
          </div>
        </div>
        <div
          onClick={() => window.location.reload()}
          className="absolute top-0 z-50 right-[-20px]"
        >
          <IoMdClose className="text-5xl rounded-full border-solid border-[2px] border-black cursor-pointer hover:opacity-60" />
        </div>
      </div>
      <div>
        <div className="opacity-55 fixed inset-0 z-40 bg-black"></div>
      </div>
    </div>
  );
}

export default Bill;
