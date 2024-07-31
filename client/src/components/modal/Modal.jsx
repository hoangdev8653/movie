import React, { useEffect } from "react";
import styles from "./Modal.module.scss";
import { FaFacebookF, FaPinterest, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { BsFillTagsFill } from "react-icons/bs";
import Overlay from "../overlay/Overlay";

function ModalCustom({ item, onClose }) {
  const overlay = document.getElementById("overlay");
  useEffect(() => {
    if (!overlay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [overlay]);

  return (
    <div className="relative">
      <div className={styles.bg}>
        <div className="mx-4 ">
          <img
            className="rounded-lg h-auto"
            src={item.hinhAnh}
            alt={item._id}
          />
          <div className="flex mx-auto gap-2 justify-center my-2">
            <a
              title="Share on Facebook"
              className="my-[3px] mx-[6px] pt-[2.5px] rounded border-[0px] border-solid text-white"
              href="/"
            >
              <FaFacebookF className="bg-blue-600  text-white p-[5px] rounded text-3xl hover:bg-green-500" />
            </a>
            <a
              title="Share on Twitter"
              className="my-[3px] mx-[6px] pt-[2.5px] rounded border-[0px] border-solid text-white"
              href="/"
            >
              <FaXTwitter className="bg-black  text-white p-[5px] rounded text-3xl hover:bg-green-500" />
            </a>
            <a
              title="Share on Pinterest"
              className="my-[3px] mx-[6px] pt-[2.5px] rounded border-[0px] border-solid text-white"
              href="/"
            >
              <FaPinterest className="bg-red-700  text-white p-[5px] rounded text-3xl hover:bg-green-500" />
            </a>
            <a
              title="Share on Linkedin"
              className="my-[3px] mx-[6px] pt-[2.5px] rounded border-[0px] border-solid text-white"
              href="/"
            >
              <FaLinkedin className="bg-blue-900 text-white p-[5px] rounded text-3xl hover:bg-green-500" />
            </a>
          </div>
        </div>
        <div className="mx-4">
          <h1 className="text-green-600">{item.tieuDe}</h1>
          <p className="my-1">{item.thoiGian}</p>

          <p className="flex gap-2 my-2">
            <BsFillTagsFill className="text-green-600 text-xl" />
            <span className="uppercase">{item.kieuNoiDung}</span>
          </p>
          <p className="font-medium">{item.noiDung}</p>
        </div>
      </div>
      <div className="fixed top-5 z-50 right-10">
        <div onClick={onClose} className="absolute ">
          <IoMdClose className="font-bold text-3xl cursor-pointer hover:opacity-70 text-white" />
        </div>
      </div>
      <Overlay onClick={onClose} />
    </div>
  );
}

export default ModalCustom;
