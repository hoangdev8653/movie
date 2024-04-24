import InfoUser from "./infoUser/InfoUser";
import BookTicketHistory from "./bookTicketHistory/BookTicketHistory";
import { Tabs } from "antd";
import avartaDeafaut from "../../assets/imgDeafaut.jpg";
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
    <div>
      <div className="flex w-full">
        <div style={{ maxWidth: "25%", flex: "0 0 25%" }}>
          <div className="text-center">
            <img
              className="w-full rounded-full p-1 bg-white border-solid border-[1px] h-auto m-4 "
              src={avartaDeafaut}
              alt="avarta"
            />
            <p className="text-4xl px-4 font-bold"></p>
          </div>
          <ul className="flex flex-col rounded mx-3 my1">
            <li className="relative block py-3 px-5 bg-white border-[1px] border-solid  text-muted">
              Hoạt động
            </li>
            <li className="relative block py-3 px-5 bg-white border-[1px] border-solid  text-right">
              0
              <span className="float-left">
                <strong>Bình Luận</strong>
              </span>
            </li>
            <li className="relative block py-3 px-5 bg-white border-[1px] border-solid  text-right">
              0
              <span className="float-left">
                <strong>Bình Luận được thích</strong>
              </span>
            </li>
            <li className="relative block py-3 px-5 bg-white border-[1px] border-solid  text-right">
              0
              <span className="float-left">
                <strong>Số lần thanh toán</strong>
              </span>
            </li>
            <li className="relative block py-3 px-5 bg-white border-[2px] border-solid  text-right">
              {/* {userTicket?.tongTien.toLocaleString("en-US")} Đ */}
              100.000 đ
              <span className="float-left">
                <strong>Tổng tiền $</strong>
              </span>
            </li>
          </ul>
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
    </div>
  );
}

export default Profile;
