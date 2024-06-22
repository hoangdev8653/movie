import InfoUser from "./infoUser/InfoUser";
import BookTicketHistory from "./bookTicketHistory/BookTicketHistory";
import { Tabs } from "antd";
import avartaDeafaut from "../../assets/imgDeafaut.jpg";
import styles from "./Profile.module.scss";

function Profile() {
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
        <div className="text-center">
          <img
            className="w-[60%] rounded-full p-1 bg-white border-solid border-[1px] h-auto m-4 text-center mx-auto "
            src={avartaDeafaut}
            alt="avarta"
          />
          <p className="text-4xl px-4 font-bold"></p>
        </div>
        <div>
          <ul className="flex flex-col rounded mx-3 my1">
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
              <div>0</div>
            </li>
            <li className="relative  py-3 px-5 bg-white border-[1px] border-solid flex justify-between">
              <div className="">
                <strong>Tổng Tiền</strong>
              </div>
              <div>0</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4 ml-8" style={{ width: "75%" }}>
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          tabBarStyle={{ color: "red", marginLeft: "32px" }}
        />
      </div>
    </div>
  );
}

export default Profile;
