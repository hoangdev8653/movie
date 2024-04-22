import React from "react";

function DanhGia() {
  return (
    <div
      id="lichchieuphim"
      style={{
        minHeight: "513px",
        borderRadius: "10px",
        width: "822px",
        marginLeft: "25%",
      }}
      className="flex bg-white text-black rounded-xl"
    >
      <div
        style={{ borderRight: "1px solid rgba(0,0,0,0.12)" }}
        className="w-1/3 "
      ></div>
      <div className="w-2/3 mx-3 my-3 text-lg">
        {" "}
        Hiện tại không có lịch chiếu
      </div>
    </div>
  );
}

export default DanhGia;
