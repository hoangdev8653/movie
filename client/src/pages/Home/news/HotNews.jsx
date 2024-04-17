import React from "react";

function HotNews() {
  return (
    <div className="mx-0 flex">
      <div style={{ maxWidth: "50%", flex: "0 0 50%", marginLeft: "16px" }}>
        <a href="/">
          <img
            style={{ width: "100%", height: "auto", borderRadius: "5px" }}
            src="https://s3img.vcdn.vn/123phim/2021/03/an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat-fast-furious-mien-song-nuoc-16170881088272.png"
            alt="ảnh lỗi"
          />
          <div className="py-3">
            <h4
              style={{
                fontSize: "17px",
                fontWeight: "bold",
                marginBottom: "0.75rem",
              }}
            >
              Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt:
              48H đậm chất
            </h4>
            <p style={{ fontSize: "14px", color: "#6c757d" }}>
              Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt
              đuổi gây cấn thót tim fans hâm mộ
            </p>
          </div>
        </a>
      </div>

      <div style={{ maxWidth: "50%", flex: "0 0 50%", marginLeft: "16px" }}>
        <a href="/">
          <img
            style={{ width: "100%", height: "auto", borderRadius: "5px" }}
            src="https://s3img.vcdn.vn/123phim/2021/03/mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam-16170160290762.png"
            alt="ảnh lỗi"
          />
          <div className="py-3">
            <h4
              style={{
                fontSize: "17px",
                fontWeight: "bold",
                marginBottom: "0.75rem",
              }}
            >
              [MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] - GỌI TÊN NHỮNG PHIM ĐIỆN ẢNH
              NỔI...
            </h4>
            <p style={{ fontSize: "14px", color: "#6c757d" }}>
              Cư dân nơi khác đang sắp "gato nổ mắt" với dân sài thành khi sắp
              tới đây thành phố HCM sẽ đón chào 1 rạp chiếu phim theo phong cách
              Artistic Urban Lifestyle đầu tiên tại Việt Nam!
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default HotNews;
