import React, { useEffect, useState } from "react";
import ShowMessage from "./ShowMesssage";

function ExpiredTime() {
  const [expiredTime, setExpiredTime] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (expiredTime > 0) {
      setTimeout(() => {
        setExpiredTime(expiredTime - 1);
      }, 1000);
      return clearTimeout(() => {});
    } else {
      setShowMessage(false);
      return;
    }
  }, [expiredTime]);

  return (
    <div>
      <p className="text-gray-300 text-sm">Thời Gian Giữ ghế</p>
      <p className="text-red-400 font-semibold text-4xl text-center">
        {expiredTime}
      </p>
      {showMessage ? (
        <>
          <ShowMessage />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ExpiredTime;
