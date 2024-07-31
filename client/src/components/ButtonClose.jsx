import React from "react";
import { IoCloseOutline } from "react-icons/io5";

function ButtonClose({ className }) {
  return (
    <div className={`${className} fixed text-white z-50 `}>
      <IoCloseOutline className="  opacity-60 hover:opacity-40 cursor-pointer rounded-full border-solid border-2 text-5xl " />
    </div>
  );
}

export default ButtonClose;
