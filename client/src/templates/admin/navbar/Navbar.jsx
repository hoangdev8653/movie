import React from "react";
import { GoHome } from "react-icons/go";
import { MdOutlineMovie, MdOutlineTimer } from "react-icons/md";
import { TbBrandCinema4D } from "react-icons/tb";
import { LuTicket } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { IoMdLogIn } from "react-icons/io";
import { GoQuestion } from "react-icons/go";
import { IoPersonAddOutline } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdLockReset } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full max-w-[20%] border-r-[2px] h-screen overflow-auto border-solid border-gray-300 ">
      <div className="m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50">
        <GoHome className="text-2xl" />
        <Link to="/DashBoard/">Dashboard</Link>
      </div>
      <div className="m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50">
        <MdOutlineMovie className="text-2xl" />
        <Link to="/DashBoard/movie">Movies</Link>
      </div>
      <div className="m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50">
        <TbBrandCinema4D className="text-2xl" />
        <span>Cinemas</span>
      </div>
      <div className="m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50">
        <MdOutlineTimer className="text-2xl" />
        <span>Showtimes</span>
      </div>
      <div className="m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50">
        <LuTicket className="text-2xl" />
        <span>My Tickets</span>
      </div>
      <div className="my-2">
        <p className="m-2 p-3">Authentication</p>
        <div className="m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50">
          <IoPersonAddOutline className="text-2xl" />
          <span>Sign Up</span>
        </div>
        <div className="m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50">
          <IoMdLogIn className="text-2xl" />
          <span>Sign In</span>
        </div>
        <div className="m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50">
          <RiLockPasswordFill className="text-2xl" />
          <span>Forgot Password</span>
        </div>
        <div className="m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50">
          <MdLockReset className="text-2xl" />
          <span>Reset Password</span>
        </div>
      </div>
      <div className="my-2">
        <p className="m-2 p-3">Settings</p>
        <div className="m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50">
          <CgProfile className="text-2xl" />
          <span>Person Settings</span>
        </div>
        <div className="m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50">
          <GoQuestion className="text-2xl" />
          <span>Contact Us</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
