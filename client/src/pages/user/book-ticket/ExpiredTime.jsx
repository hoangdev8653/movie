import React, { useEffect, useState } from "react";
import ShowMessage from "./ShowMesssage";

function ExpiredTime({ arrayGhe }) {
  const [expiredTime, setExpiredTime] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (arrayGhe.length > 0 && expiredTime === 0 && !showMessage) {
      setExpiredTime(10);
    }
    if (expiredTime > 0) {
      const timerId = setTimeout(() => {
        setExpiredTime((prevTime) => prevTime - 1);
      }, 1000);
      if (expiredTime === 1 && arrayGhe.length > 0 && !showMessage) {
        setShowMessage(true);
      }
      return () => clearTimeout(timerId);
    }
  }, [expiredTime, arrayGhe.length, showMessage]);

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
