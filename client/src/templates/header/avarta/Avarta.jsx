import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getLocalStorage } from "../../../utils/localStorage";
import imgDeafault from "../../../assets/imgDeafaut.jpg";
import { userStore } from "../../../store/userStore";
import styles from "./Avarta.module.scss";

function Avarta() {
  const { logout } = userStore();
  const user = getLocalStorage("user");
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.text}>
      <div className="flex gap-2 text-gray-400">
        <Link to={user ? "/profile" : "/login"}>
          <div className="flex justify-center items-center gap-1 cursor-pointer hover:text-red-500">
            {user ? (
              <>
                <img
                  className={styles.avarta}
                  src={user.avarta || imgDeafault}
                />
                <p>{user.username}</p>
              </>
            ) : (
              <>
                <FaUserCircle className="w-[30px] h-[30px]" />
                <p>Đăng nhập</p>
              </>
            )}
          </div>
        </Link>
        <span className="opacity-70 my-auto">|</span>
        <Link className="my-auto" to={user ? "/login" : "/register"}>
          <div className=" justify-center items-center hover:text-red-500 cursor-pointer">
            <p onClick={user ? handleLogout : ""}>
              {user ? "Đăng Xuất" : "Đăng Kí"}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Avarta;
