import React from "react";
import { Tabs } from "antd";
import Sales from "./Sales";
import Reviews from "./Reviews";
import HotNews from "./HotNews";

function News() {
  const tabPosition = "top";
  const onChange = (key) => {};
  const items = [
    {
      key: "1",
      label: `Điện ảnh 24h`,
      children: <HotNews />,
    },
    {
      key: "2",
      label: `Review`,
      children: <Reviews />,
    },
    {
      key: "3",
      label: `khuyến mãi`,
      children: <Sales />,
    },
  ];
  return (
    <div
      id="tintuc"
      className=" m-auto mt-[100px] justify-center max-w-[940px]"
    >
      <Tabs
        className="justify-center item-center"
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        tabPosition={tabPosition}
        centered={true}
        tabBarGutter={80}
        tabBarStyle={{ color: "black", fontWeight: "600" }}
      />
      <div className="w-full flex flex-wrap">
        <div className="w-1/3 mr-3.5">
          <a href="/">
            <img
              className="w-full rounded-md"
              src="https://s3img.vcdn.vn/123phim/2021/03/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png"
              alt=""
            />
          </a>
          <div className="pt-4">
            <a href="/">
              <h4 className="text-base font-bold mb-2.5">
                PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và màn
                trả thù...
              </h4>
              <p style={{ color: " #6c757d", fontSize: "13px" }}>
                Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng mục
                nữ chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự nghiệp của
                cô trong phim
              </p>
            </a>
          </div>
        </div>
        <div className="w-1/3 mr-3.5">
          <a href="/">
            <img
              className="w-full rounded-md"
              src="https://s3img.vcdn.vn/123phim/2021/03/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png"
              alt=""
            />
          </a>
          <div className="pt-4">
            <a href="/">
              <h4 className="text-base font-bold mb-2.5">
                VỪA ĐẸP TRAI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM "BÀN TAY DIỆT
                QUỶ"...
              </h4>
              <p style={{ color: " #6c757d", fontSize: "13px" }}>
                Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về năng
                lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo Sik, tác
                phẩm kinh dị – hành
              </p>
            </a>
          </div>
        </div>
        <div className="flex-1">
          <a href="/">
            <div className=" mb-3 flex">
              <img
                className="w-[70.58px] h-[70.58px] mr-3"
                src="https://s3img.vcdn.vn/123phim/2021/01/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg"
                alt=""
              />
              <p>Khai trương rạp xịn giá ngon, chuẩn Xì-tai Sài gòn</p>
            </div>
            <div className=" mb-3 flex">
              <img
                className="w-[70.58px] h-[70.58px] mr-3"
                src="https://s3img.vcdn.vn/123phim/2020/11/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056939435004.png"
                alt=""
              />
              <p>"Bóc tem" tổ hợp giải trí mới tanh của giới hà thành</p>
            </div>
            <div className=" mb-3 flex">
              <img
                className="w-[70.58px] h-[70.58px] mr-3"
                src="https://s3img.vcdn.vn/123phim/2020/11/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png"
                alt=""
              />
              <p>
                Tuyệt trang máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công
                chiếu
              </p>
            </div>
            <div className=" mb-3 flex">
              <img
                className="w-[70.58px] h-[70.58px] mr-3"
                src="https://s3img.vcdn.vn/123phim/2020/10/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041584850247.jpg"
                alt=""
              />
              <p>HUỲNH HUY HOÀNG CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THUYẾT KẾ</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default News;
