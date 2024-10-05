import { useState, useEffect } from "react";
import styles from "./Menu.module.scss";
import { MdOutlineChevronRight } from "react-icons/md";
import { IoMenuOutline } from "react-icons/io5";
import { getLocalStorage } from "../../../utils/localStorage";
import { Default_avatar_profile } from "../../../image";
import { userStore } from "../../../store/User";
import { useLocation } from "react-router-dom";

function Menu() {
  const user = getLocalStorage("user");
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = userStore();

  const location = useLocation();

  const handleShowMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = async () => {
    await logout();
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
    <div>
      <div className={styles.menu}>
        <ul className="flex gap-4 font-medium">
          <a href="/lich-chieu/">
            <li
              className={`${styles.item} ${
                location.pathname == "/lich-chieu/" ? "text-red-400" : ""
              }`}
            >
              Lịch chiếu
            </li>
          </a>
          <a href="/he-thong-rap">
            <li
              className={`${styles.item} ${
                location.pathname == "/he-thong-rap" ? "text-red-400" : ""
              }`}
            >
              Hệ Thống Rạp
            </li>
          </a>
          <a href="/news">
            <li
              className={`${styles.item} ${
                location.pathname == "/news" ? "text-red-400" : ""
              }`}
            >
              Tin Tức
            </li>
          </a>
          <a href="/khuyen-mai-su-kien">
            <li
              className={`${styles.item} ${
                location.pathname == "/khuyen-mai-su-kien" ? "text-red-400" : ""
              }`}
            >
              Khuyến Mãi/Sự Kiện
            </li>
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
                  {user ? (
                    <a
                      className="hover:text-red-500 flex justify-center items-center"
                      href="/profile"
                    >
                      <img
                        className="rounded-full w-[32px] h-[32px] mx-1"
                        src={user.avarta ? user.avarta : Default_avatar_profile}
                        alt="avarta"
                      />
                      <span className="mr-1">{user.username}</span>
                    </a>
                  ) : (
                    <a
                      className="hover:text-red-500 flex justify-center items-center"
                      href="/login"
                    >
                      <img
                        className="rounded-full w-[32px] h-[32px] mx-2"
                        src={Default_avatar_profile}
                        alt="avarta"
                      />
                      <span className="mr-1">Đăng Nhập</span>
                    </a>
                  )}
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
                  <div className="w-full cursor-pointer block p-4 hover:bg-gray-100">
                    <span className=" font-medium">Khuyến Mãi/Sự Kiện</span>
                  </div>

                  <div className="w-full cursor-pointer block p-4 hover:bg-gray-100 border-t-[0.5px] border-gray-400">
                    {user ? (
                      <a
                        onClick={handleLogout}
                        href="/login"
                        className=" font-medium"
                      >
                        Đăng Xuất
                      </a>
                    ) : (
                      <a href="/register" className=" font-medium">
                        Đăng Ký
                      </a>
                    )}
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
