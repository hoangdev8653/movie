import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
function Avarta() {
  return (
    <div className="avarta">
      <div className="flex gap-2 text-gray-400 text-lg">
        <Link to="/login">
          <div className="flex justify-center items-center gap-1 cursor-pointer hover:text-red-500">
            <FaUserCircle className="w-[30px] h-[30px]" />
            <p>Đăng nhập</p>
          </div>
        </Link>
        <span className="opacity-70">|</span>
        <Link to="/register">
          <div className=" justify-center items-center hover:text-red-500 cursor-pointer">
            <p>Đăng kí</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Avarta;
