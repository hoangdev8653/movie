import React from "react";
import { IoCloseOutline } from "react-icons/io5";

function ButtonClose({ className, onClick }) {
  return (
    <div onClick={onClick} className={`${className} fixed  z-50 `}>
      <IoCloseOutline className=" opacity-60 hover:opacity-40 cursor-pointer rounded-full  text-5xl font-bold" />
    </div>
  );
}

export default ButtonClose;
