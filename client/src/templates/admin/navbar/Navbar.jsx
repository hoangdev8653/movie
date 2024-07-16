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
import { GiTheater } from "react-icons/gi";

function Navbar() {
  return (
    <div className="w-full max-w-[20%] border-r-[2px] h-screen overflow-auto border-solid border-gray-300 ">
      <div className="m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50">
        <GoHome className="text-2xl" />
        <Link to="/DashBoard/">Dashboard</Link>
      </div>
      <div className="m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50">
        <GiTheater className="text-2xl" />
        <Link to="/DashBoard/theater-system">Theater System</Link>
      </div>
      <div className="m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50">
        <MdOutlineMovie className="text-2xl" />
        <Link to="/DashBoard/movie">Movies</Link>
      </div>
      <div className="m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50">
        <TbBrandCinema4D className="text-2xl" />
        <Link to="/DashBoard/rap">Cinemas</Link>
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
          <Link to="/register">Sign Up</Link>
        </div>
        <div className="m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50">
          <IoMdLogIn className="text-2xl" />
          <Link to="/login">Sign In</Link>
        </div>
        <div className="m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50">
          <RiLockPasswordFill className="text-2xl" />
          <Link to="/forgot-password">Forgot Password</Link>
        </div>
        <div className="m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50">
          <MdLockReset className="text-2xl" />
          <Link to="/reset-password">Reset Password</Link>
        </div>
      </div>
      <div className="my-2">
        <p className="m-2 p-3">Settings</p>
        <div className="m-2 p-3 cursor-pointer hover:bg-gray-300 rounded-md text-black flex items-center gap-2 opacity-50">
          <CgProfile className="text-2xl" />
          <Link to="/dashboard/user">Person Settings</Link>
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
