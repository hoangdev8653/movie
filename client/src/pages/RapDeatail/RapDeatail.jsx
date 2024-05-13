import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";
import { FaFacebookF, FaPinterest, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { getRapByHeThongRap, getRapById } from "../../apis/rap";

function RapDeatail() {
  const [data, setData] = useState([]);
  const { mahethong } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await getRapByHeThongRap(mahethong);
      console.log(response);
      setData(response.data.content);
    };
    fetchData();
  }, [mahethong]);

  const handleChangeRap = (id, e) => {
    e.preventDefault();
    console.log(id);
    const fetchApi = async () => {
      try {
        const response = await getRapById(id);
        if (response.status === 200) {
          console.log(response);
          setData(response.data.content);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  };
  console.log(data.length);

  return (
    <>
      {data && data.length > 0 ? (
        <div
          style={{
            background: "rgb(26, 29, 41)",
            borderTop: "3px solid #454D6A",
          }}
          className="w-full "
        >
          <div className="max-w-[1300px] mx-auto justify-between py-8">
            <p className="text-white text-center flex justify-center pt-4">
              BHĐ Star{" "}
              <span className="mt-[4px]">
                <GrFormNextLink />
              </span>{" "}
              Rạp Phim
              <span className="mt-[4px]">
                <GrFormNextLink />
              </span>
              Đà Nẵng
              <span className="mt-[4px]">
                <GrFormNextLink />
              </span>
              {data[0].tenRap}
            </p>
            <p className="font-bold text-white text-3xl text-center py-2">
              Hệ Thống Rap
            </p>
            <div className="my-4 flex gap-4">
              <div
                style={{ borderColor: "#454D6A" }}
                className=" w-[65%] h-auto border-solid border-[1px] rounded"
              >
                <div className="px-4 my-4 text-white">
                  <h1 className="text-green-600 text-2xl font-bold">
                    {data[0].tenRap}
                  </h1>
                  <p className="text-xl font-bold text-white py-2 uppercase">
                    {data[0].tenRap}
                  </p>
                  <div className="py-2 ">
                    <span className="font-semibold">Địa chỉ : </span>
                    <span>{data[0].diaChi}</span>
                  </div>
                  <img width="815" src={data[0].hinhAnh} alt="image" />
                  <p className="text-lg font-bold my-2">Các quy định giá vé</p>
                  <div className="my-4">
                    <p>
                      - Giá vé trẻ em áp dụng cho trẻ em có chiều cao dưới 1,3m.
                      Yêu cầu trẻ em có mặt khi mua vé. Trẻ em dưới 0,7m sẽ được
                      miễn phí vé khi mua cùng 01 vé người lớn đi kèm theo.
                      Không áp dụng kèm với chương trình khuyến mãi ưu đãi về
                      giá vé khác
                    </p>
                    <p>
                      – Giá vé thành viên U22 chỉ áp dụng cho thành viên dưới 22
                      tuổi khi mua vé. Không áp dụng kèm với chương trình khuyến
                      mãi ưu đãi về giá vé khác. Mỗi thẻ thành viên U22 được áp
                      dụng giá vé ưu đãi tối đa 02 vé/ngày
                    </p>
                    <p>
                      – Ngày lễ: 1/1, Giổ Tổ Hùng Vương 10/3 Âm Lịch, 30/4, 1/5,
                      02 ngày Lễ Quốc Khánh
                    </p>
                    <p>– Giá vé Tết Âm Lịch sẽ được áp dụng riêng.</p>
                    <p>
                      – Suất chiếu đặc biệt áp dụng giá vé theo khung giờ của
                      ngày. Không áp dụng các giá vé ưu đãi dành cho U22,
                      Privilege Voucher/Staff Voucher, Happy Day. Trong trường
                      hợp Suất chiếu đặc biệt cùng ngày với Happy Day sẽ áp dụng
                      giá vé của Thứ 3
                    </p>
                  </div>
                  <div className="flex gap-2 my-2">
                    <a
                      title="Share on Facebook"
                      className="my-[3px] mx-[6px] pt-[2.5px] rounded border-[0px] border-solid text-white"
                      href="/"
                    >
                      <FaFacebookF className="bg-blue-600  text-white p-[5px] rounded text-3xl hover:bg-green-500" />
                    </a>
                    <a
                      title="Share on Twitter"
                      className="my-[3px] mx-[6px] pt-[2.5px] rounded border-[0px] border-solid text-white"
                      href="/"
                    >
                      <FaXTwitter className="bg-black  text-white p-[5px] rounded text-3xl hover:bg-green-500" />
                    </a>
                    <a
                      title="Share on Pinterest"
                      className="my-[3px] mx-[6px] pt-[2.5px] rounded border-[0px] border-solid text-white"
                      href="/"
                    >
                      <FaPinterest className="bg-red-700  text-white p-[5px] rounded text-3xl hover:bg-green-500" />
                    </a>
                    <a
                      title="Share on Linkedin"
                      className="my-[3px] mx-[6px] pt-[2.5px] rounded border-[0px] border-solid text-white"
                      href="/"
                    >
                      <FaLinkedin className="bg-blue-900 text-white p-[5px] rounded text-3xl hover:bg-green-500" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex-1 text-white ">
                <div className="px-4 py-4 border-[1px] border-solid border-green-400 rounded">
                  <p className="font-semibold text-xl text-center">
                    Địa điểm khác
                  </p>
                  {data.map((item, index) => (
                    <a
                      key={index}
                      href={`/rap-phim/${item.slug}`}
                      className="flex my-4 gap-2"
                    >
                      <img
                        onClick={() => handleChangeRap(item._id, e)}
                        className="rounded w-[30px] h-[30px]"
                        src={item.heThongRapId.logo}
                      />
                      <span className="  text-lg hover:text-green-600">
                        {item.tenRap}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p>loadding ........</p>
        </div>
      )}
    </>
  );
}

export default RapDeatail;