import React from "react";
import Avarta from "../../templates/header/avarta/Avarta";
import { logo } from "../../image";
import { IoIosSearch } from "react-icons/io";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";
import BackToTop from "../../components/BackToTop";

function Layout({ children }) {
  return (
    <div>
      <div
        style={{
          boxShadow: "rgba(21, 34, 50, 0.08) 0px 1px 4px 0px",
        }}
        className="w-full bg-white"
      >
        <div className="mx-8 justify-between items-center flex py-2">
          <a href="/">
            <div className="logo">
              <img className="w-[50px] h-[50px]" src={logo} alt="logo" />
            </div>
          </a>
          <div className=" flex">
            <IoIosSearch className="justify-center text-center items-center text-3xl mx-1 opacity-60 hover:opacity-30 cursor-pointer" />
            <input className="" type="text" placeholder="Search...." />
          </div>
          <div className="avarta">
            <Avarta />
          </div>
        </div>
      </div>
      <div className="flex bg-gray-50 ">
        <Navbar />
        <div className="flex-1">
          <Outlet />
          <BackToTop />
        </div>
      </div>
    </div>
  );
}

export default Layout;
