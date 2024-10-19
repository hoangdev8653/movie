import InfoUser from "./infoUser/InfoUser";
import BookTicketHistory from "./bookTicketHistory/BookTicketHistory";
import { Tabs } from "antd";
import avartaDeafaut from "../../../assets/Default_avatar_profile.jpg";
import styles from "./Profile.module.scss";
import { BookTicket } from "../../../store/BookTicket";
import { formatPrice } from "../../../utils/forrmatPriceVn";
import UpdateAvarta from "./UpdateAvarta";
import { useState } from "react";
import { getLocalStorage } from "../../../utils/localStorage";

function Profile() {
  const { paymentlenght, totalPrice } = BookTicket();
  const user = getLocalStorage("user");
  const avarta = user?.avarta;
  const [isOpen, setIsOpen] = useState(false);
  const onChange = (key) => {};
  const items = [
    {
      key: "1",
      label: `THÔNG TIN TÀI KHOẢN`,
      children: <InfoUser />,
    },
    {
      key: "2",
      label: `LỊCH SỬ ĐẶT VÉ`,
      children: <BookTicketHistory />,
    },
  ];

  return (
    <div className={styles.content}>
      <div className={styles.forYou}>
        <div className="text-center my-4">
          <img
            className="w-[100px] h-[100px] rounded-full p-1  object-cover text-center mx-auto my-1 "
            src={avarta !== "" ? avarta : avartaDeafaut}
            alt="avarta"
          />
          <p
            className="bg-green-500 text-white font-bold px-[8px] py-[8px] rounded w-[50%] text-center mx-auto cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            Cập Nhật{" "}
          </p>
          {isOpen ? <UpdateAvarta onClose={() => setIsOpen(false)} /> : <></>}
        </div>
        <div>
          <ul className="flex flex-col rounded mx-3 my-1">
            <li className="relative  py-3 px-5 bg-white border-[1px] border-solid  text-muted">
              Hoạt động
            </li>
            <li className="relative  py-3 px-5 bg-white border-[1px] border-solid flex justify-between">
              <div className="">
                <strong>Bình Luận</strong>
              </div>
              <div>0</div>
            </li>
            <li className="relative  py-3 px-5 bg-white border-[1px] border-solid flex justify-between">
              <div className="">
                <strong>Bình Luận Được Yêu Thích</strong>
              </div>
              <div>0</div>
            </li>
            <li className="relative  py-3 px-5 bg-white border-[1px] border-solid flex justify-between">
              <div className="">
                <strong>Số Lần Thanh Toán</strong>
              </div>
              <div>{paymentlenght}</div>
            </li>
            <li className="relative  py-3 px-5 bg-white border-[1px] border-solid flex justify-between">
              <div className="">
                <strong>Tổng Tiền</strong>
              </div>
              <div>{formatPrice(totalPrice)}</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4 ml-8" style={{ width: "75%" }}>
        <Tabs
          defaultActiveKey="2"
          items={items}
          onChange={onChange}
          tabBarStyle={{ color: "red", marginLeft: "32px" }}
        />
      </div>
    </div>
  );
}

export default Profile;
