import React from "react";
import { useParams } from "react-router-dom";
import Chair from "./Chair/Chair";
import Payment from "./payment/Payment";
function BookTicKet() {
  const { id } = useParams;
  return (
    <div className="datve w-full bg-white flex ">
      <div className="w-[70%] ">
        <Chair />
      </div>
      <div className="w-[30%]">
        <Payment />
      </div>
    </div>
  );
}

export default BookTicKet;
