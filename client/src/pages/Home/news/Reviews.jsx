import React from "react";

function Reviews() {
  return (
    <div className="mx-0 flex">
      <div style={{ maxWidth: "50%", flex: "0 0 50%", marginLeft: "16px" }}>
        <a href="/">
          <img
            style={{ width: "100%", height: "auto", borderRadius: "5px" }}
            src="https://s3img.vcdn.vn/123phim/2020/08/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png"
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

      <div style={{ maxWidth: "50%", flex: "0 0 50%", marginLeft: "16px" }}>
        <a href="/">
          <img
            style={{ width: "100%", height: "auto", borderRadius: "5px" }}
            src="https://s3img.vcdn.vn/123phim/2020/08/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png"
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
              Review: Dinh Thự Oan Khuất (Ghost Of War)
            </h4>
            <p style={{ fontSize: "14px", color: "#6c757d" }}>
              Tuy là bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự Oan Khuất
              vẫn chưa đủ để đem khán giả trở lại phòng vé
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Reviews;
