import React from "react";
function ShowMessage() {
  const handleLoad = () => {
    window.location.reload();
  };

  return (
    <div>
      <div
        style={{
          maxHeight: "calc(100%-64px)",
          backgroundColor: "white",
        }}
        className="z-50 absolute left-60 top-60 overflow-y-auto m-8 text-center justify-between w-fit text-base overflow-x-hidden items-center rounded-2xl max-w-3xl flex "
      >
        <div className="p-10">
          <p>
            Đã hết thời gian giữ ghế. Vui lòng thực hiện đơn hàng trong thời hạn
            100 Giây.{" "}
            <span
              onClick={handleLoad}
              className="text-red-700 cursor-pointer hover:opacity-60"
            >
              Đặt vé lại
            </span>
          </p>
        </div>
      </div>
      <div className="opacity-55 fixed inset-0 z-40 bg-black "></div>
    </div>
  );
}

export default ShowMessage;
