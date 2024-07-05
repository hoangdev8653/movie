import React, { useEffect, useState } from "react";
import styles from "./Payment.module.scss";
import Bill from "./bill/Bill";
import { formatPrice } from "../../../../utils/forrmatPriceVn";
import { getLocalStorage } from "../../../../utils/localStorage";

function payment({ data, arrayGhe }) {
  const [datVe, setDatVe] = useState(false);
  const [price, setPrice] = useState(0);
  const [radio, setRadio] = useState(null);
  const user = getLocalStorage("user");
  const handleClickRadio = (e) => {
    setRadio(e.target.value);
  };
  const id = data._id;
  // console.log(arrayGhe);
  useEffect(() => {
    if (arrayGhe.length === 0) {
      setRadio(null);
      setPrice(0);
    } else {
      setPrice(data?.suatChieuId?.giaVe * arrayGhe.length);
    }
  }, [arrayGhe]);
  return (
    <div className={styles.payment}>
      <div className="mx-auto my-4 text-center">
        <p className="text-green-500 font-semibold text-4xl">
          {formatPrice(price)}
        </p>
      </div>
      <div className="my-3 border-b-[1px] border-t-[1px] border-gray-200">
        <div className="my-2 ">
          <p className="font-semibold text-black">
            {data?.suatChieuId?.movieId?.tenPhim}
          </p>
          <p className="font-medium my-2">{data?.suatChieuId?.rapId?.tenRap}</p>
          <p className="font-medium">
            <span>{data?.gioChieu}</span>
            <span> - </span>
            <span>{data?.suatChieuId?.ngaychieu}</span>
          </p>
        </div>
      </div>
      <div className="my-3 border-b-[1px]  border-gray-200">
        <div className="my-2 flex justify-between">
          <div className="text-red-500">Ghế {arrayGhe.join(", ")}</div>
          <div className="text-green-500 font-semibold">
            {formatPrice(price)}
          </div>
        </div>
      </div>
      <div className="my-3 border-b-[1px]  border-gray-200">
        <div className="my-2">
          <div className="text-gray-400 font-medium">Email</div>
          <div className="text-black font-medium">{user.email}</div>
        </div>
      </div>
      <div className="my-3 border-b-[1px]  border-gray-200">
        <div className="my-2">
          <div className="text-gray-400 font-medium">Phone</div>
          <div className="text-black font-medium">{user.phone}</div>
        </div>
      </div>
      <div className="my-3 border-b-[1px]  border-gray-200">
        <div className="my-2 flex justify-between">
          <div>
            <div className="text-gray-400 font-medium">Mã giảm giá</div>
            <div className="text-black font-medium">
              {" "}
              Tạm thời không hỗ trợ...
            </div>
          </div>
          <div className="justify-center text-center my-auto">
            <div className="bg-gray-400 px-[6px] py-1 text-white rounded">
              Áp dụng
            </div>
          </div>
        </div>
      </div>
      <div className="my-2  border-gray-200">
        <div className="mt-2 mb-8">
          <div className="text-gray-400 font-medium my-2">
            Hình thức thanh toán
          </div>
          {arrayGhe && arrayGhe.length > 0 ? (
            <>
              {/* <div className="mt-4">
                <form>
                  <div className="flex">
                    <input
                      // onClick={handleClickRadio}
                      onChange={handleClickRadio}
                      type="radio"
                      id="method"
                      name="method"
                      value="ZALOPAY"
                      // checked={radio === "zaloPay"}
                    />
                    <img
                      className="max-w-[40px] mx-[15px] rounded"
                      src="https://movie-booking-project.vercel.app/img/bookticket/zalo.jpg"
                      alt="zalopay"
                    />
                    <p className=" my-auto">Thanh toán qua ZaloPay</p>
                  </div>
                  <div className="flex ">
                    <input
                      onChange={handleClickRadio}
                      type="radio"
                      id="method"
                      name="method"
                      value="VISA"
                    />
                    <img
                      className="max-w-[40px] mx-[15px] rounded"
                      src="https://movie-booking-project.vercel.app/img/bookticket/visa.png"
                      alt="visa"
                    />
                    <p className="my-auto">Visa, Master, JCB</p>
                  </div>
                  <div className="flex">
                    <input
                      onChange={handleClickRadio}
                      id="method"
                      type="radio"
                      name="method"
                      value="ATM"
                    />
                    <img
                      className="max-w-[40px] mx-[15px] rounded"
                      src="https://movie-booking-project.vercel.app/img/bookticket/atm.png"
                      alt="atm"
                    />
                    <p className="my-auto">Thẻ ATM nội địa</p>
                  </div>
                  <div className="flex">
                    <input
                      onChange={handleClickRadio}
                      id="method"
                      type="radio"
                      name="method"
                      value="PAYYOO"
                    />
                    <img
                      className="max-w-[40px] mx-[15px] rounded"
                      src="https://movie-booking-project.vercel.app/img/bookticket/cuahang.png"
                      alt="payoo"
                    />
                    <p className="my-auto">Thanh toán tại cửa hàng tiện ích</p>
                  </div>
                </form>
              </div> */}
              <Bill totalPrice={price} arrayGhe={arrayGhe} id={id} />
            </>
          ) : (
            <>
              <div className="text-red-500 font-medium">
                Vui lòng chọn ghế để hiển thị phương thức thanh toán phù hợp
              </div>
            </>
          )}
        </div>
      </div>
      <div className="text-center  pb-[30px] flex">
        <img
          className="w-4 h-4 mr-2"
          src="https://movie-booking-project.vercel.app/img/bookticket/exclamation.png"
          alt="warning"
        />
        <div>
          <span>Vé đã mua không thể đổi hoặc hoàn tiền</span>
          <span> Mã vé sẽ được gửi qua tin nhắn </span>
          <span className="text-orange-300"> ZMS</span>
          <span> (tin nhắn Zalo) và</span>
          <span className="text-orange-300"> Email</span> đã nhập.
        </div>
      </div>

      <div className="fixed right-0  text-center bottom-0 w-[30%]">
        <div
          onClick={() => setDatVe(true)}
          style={
            radio !== null && arrayGhe.length > 0
              ? {
                  backgroundImage:
                    " linear-gradient(223deg, rgb(180, 236, 81) 0px, rgb(66, 147, 33) 100%)",
                }
              : { backgroundColor: "rgb(175, 175, 175)" }
          }
          className=" text-white py-4 cursor-pointer text-2xl"
        >
          Đặt vé
        </div>
      </div>
      {datVe ? (
        <>
          <Bill />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default payment;
