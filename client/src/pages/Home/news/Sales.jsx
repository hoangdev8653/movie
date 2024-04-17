import React from "react";

function Sales() {
  return (
    <div className="mx-0 flex">
      <div className="w-1/2 ml-4" style={{ flex: "0 0 50%" }}>
        <a href="/">
          <img
            style={{ width: "100%", height: "auto", borderRadius: "5px" }}
            src="https://s3img.vcdn.vn/123phim/2021/04/bhd-59k-ve-ca-tuan-16190002421777.jpg"
            alt="ảnh lỗi"
          />
          <div className="py-3">
            <h4
              className="font-bold"
              style={{
                fontSize: "17px",
                marginBottom: "0.75rem",
              }}
            >
              BHD 59K/VÉ CẢ TUẦN !!!
            </h4>
            <p style={{ fontSize: "14px", color: "#6c757d" }}>
              Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé
              khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.
            </p>
          </div>
        </a>
      </div>

      <div style={{ maxWidth: "50%", flex: "0 0 50%", marginLeft: "16px" }}>
        <a href="/">
          <img
            style={{ width: "100%", height: "auto", borderRadius: "5px" }}
            src="https://s3img.vcdn.vn/123phim/2020/11/tix-1k-ve-ngai-chi-gia-ve-16045662877511.jpg"
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
              TIX 1K/VÉ NGẠI CHI GIÁ VÉ
            </h4>
            <p style={{ fontSize: "14px", color: "#6c757d" }}>
              Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02
              voucher thanh toán Zalopay thả ga
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Sales;
