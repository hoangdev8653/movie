import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Ratting from "../../../components/Rating";
import { Tabs } from "antd";
import DanhGia from "./reviews/DanhGia";
import LichChieu from "./LichChieu";
import ThongTin from "./reviews/thongTin/ThongTin";
import Loader from "../../../components/loader/loader";
import { movieStore } from "../../../store/Movie";
import styles from "./MovieDetail.module.scss";
import Play from "../../../components/Play";
import { reviewStore } from "../../../store/Review";

function PhimDetail() {
  const { data, getAllMovieBySlug } = movieStore();
  const review = reviewStore();
  const { slug } = useParams();

  const onChange = (key) => {};
  const items = [
    {
      key: "1",
      label: `LỊCH CHIẾU`,
      children: <LichChieu data={data} />,
    },
    {
      key: "2",
      label: `THÔNG TIN`,
      children: <ThongTin data={data} />,
    },
    {
      key: "3",
      label: `ĐÁNH GIÁ`,
      children: <DanhGia data={data} />,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getAllMovieBySlug(slug);
        await review.getReviewBySlug(slug);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  let valueCircular;
  let valueStar;
  if (!isNaN(review.averageStar) && review.averageStar !== 0) {
    valueStar = review.averageStar?.toFixed(1) * 1;
    valueCircular = valueStar * 2 * 10;
  } else {
    valueStar = 0;
  }

  const handleBookTicket = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight - window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {data && data?.length > 0 ? (
        <>
          <div
            className="pb-[50px] "
            style={{
              backgroundColor: "rgb(10, 32, 41)",
            }}
          >
            <div className="relative">
              <img
                className={styles.bg}
                src={data[0]?.hinhAnh}
                alt={data[0]?.slug}
              />
              <div className="flex justify-center ">
                <div className={styles.content}>
                  <div className="w-56 h-80 mr-2 relative">
                    <img
                      className="w-full h-full object-cover"
                      src={data[0]?.hinhAnh}
                      alt={data[0]?.slug}
                    />
                    <Play
                      className={"top-32 left-[40%]"}
                      onClick={true}
                      sourceUrl={data[0]?.trailer}
                    />
                  </div>
                  <div className="text-red-50 mt-10 ml-4">
                    <div className="flex my-2">
                      <div className="bg-red-500 mr-2 rounded">
                        <span className="px-1">C18</span>
                      </div>
                      <span>{data[0]?.tenPhim}</span>
                    </div>
                    <p>
                      {data[0]?.thoiLuong} - {data[0].theLoai}
                    </p>
                    <p>{data[0]?.ngayKhoiChieu}</p>

                    <button
                      onClick={handleBookTicket}
                      className="py-3 px-6 text-base mt-2 rounded mb-5 bg-red-500 hover:opacity-80"
                    >
                      Mua vé
                    </button>
                  </div>
                  <div className="ml-[200px] mt-[60px]">
                    <div className="w-[120px] h-[120px] text-white my-2">
                      <div className="relative">
                        <CircularProgressbar value={valueCircular || 0} />
                        <p
                          style={{ fontSize: 50 }}
                          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center"
                        >
                          {valueStar || 0}
                        </p>
                      </div>
                    </div>
                    <Ratting
                      disabled={true}
                      rating={valueStar?.toFixed(1)}
                      allowHalf={true}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.content_mobile}>
                <div className="text-red-50 mx-4 ">
                  <div className="flex my-2">
                    <div className="bg-red-500 mr-2 rounded">
                      <span className="px-1">C18</span>
                    </div>
                    <span>{data[0]?.tenPhim}</span>
                  </div>
                  <p>
                    {data[0]?.thoiLuong} - {data[0].theLoai}
                  </p>
                  <p className="my-1">{data[0]?.ngayKhoiChieu}</p>
                </div>
              </div>
            </div>

            <Tabs
              className="justify-center item-center text-white"
              defaultActiveKey="2"
              items={items}
              onChange={onChange}
              centered={true}
              tabBarGutter={80}
              tabBarStyle={{
                position: "none",
                color: "red",
                fontWeight: "600",
              }}
            />
          </div>
        </>
      ) : (
        <>
          <Loader />
        </>
      )}
    </div>
  );
}

export default PhimDetail;
