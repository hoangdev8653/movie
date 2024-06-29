import { useState, useEffect } from "react";
import styles from "./Menu.module.scss";
import { MdOutlineChevronRight } from "react-icons/md";
import { IoMenuOutline } from "react-icons/io5";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleShowMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);
  return (
    <div className="">
      <div className={styles.menu}>
        <ul className="flex gap-4 font-medium">
          <a href="/lich-chieu/">
            <li className={styles.item}>Lịch chiếu</li>
          </a>
          <a href="/he-thong-rap">
            <li className={styles.item}>Hệ thống rạp</li>
          </a>
          <a href="/news">
            <li className={styles.item}>Tin Tức</li>
          </a>
          <a href="/khuyen-mai-su-kien">
            <li className={styles.item}>Khuyến mãi/Sự kiện</li>
          </a>
        </ul>
      </div>
      <div onClick={handleShowMenu} className={styles.menu_mobile}>
        <div className="relative">
          <div className=" hover:opacity-50">
            <IoMenuOutline className="text-2xl" />
          </div>
          {isOpen ? (
            <div style={{ maxHeight: "100vh" }}>
              <div className="absolute bg-white text-black z-50 top-[-20px] right-[-10px] w-[220px] h-screen">
                <div className="flex py-2  pl-1 justify-center items-center">
                  <a
                    className="hover:text-red-500 flex justify-center items-center"
                    href="/profile"
                  >
                    <img
                      className="rounded-full w-[32px] h-[32px] mx-1"
                      src="https://i.pravatar.cc/300?u=hhoang1072003@gmail.com"
                      alt="avarta"
                    />
                    <span className="mr-1">Huỳnh Huy Hoàng</span>
                  </a>
                  <p onClick={handleShowMenu} className="ml-3">
                    <MdOutlineChevronRight className="text-2xl hover:border-solid hover:rounded-full  hover:border-gray-400 hover:bg-gray-200 hover:text-red-500" />
                  </p>
                </div>
                <div className="py-2">
                  <div className="w-full cursor-pointer block p-4 hover:bg-gray-100">
                    <span className=" font-medium ">Lịch Chiếu</span>
                  </div>
                  <div className="w-full cursor-pointer block p-4 hover:bg-gray-100">
                    <span className=" font-medium"> Hệ Thống Rạp</span>
                  </div>
                  <div className="w-full cursor-pointer block p-4 hover:bg-gray-100">
                    <span className=" font-medium">Tin Tức</span>
                  </div>
                  <div className="w-full cursor-pointer block p-4  hover:bg-gray-100">
                    <span className=" font-medium">Khuyến Mãi/Sự Kiện</span>
                  </div>
                  <div className="w-full cursor-pointer block p-4 hover:bg-gray-100 border-t-[0.5px] border-gray-400">
                    <span className=" font-medium"> Đăng Xuất</span>
                  </div>
                </div>
              </div>
              <div className={styles.overlay}></div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Menu;
