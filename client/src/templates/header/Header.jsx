import Logo from "../../assets/headTixLogo.png";
import Menu from "./menu/Menu";
import Avarta from "./avarta/Avarta";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div
      style={{
        boxShadow:
          "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
      }}
      className="w-full bg-white"
    >
      <div className="mx-8 justify-between items-center flex py-2">
        <Link to="/">
          <div className="logo">
            <img className="w-[50px] h-[50px]" src={Logo} alt="logo" />
          </div>
        </Link>
        <div>
          <Menu />
        </div>
        <div className="avarta">
          <Avarta />
        </div>
      </div>
    </div>
  );
}

export default Header;
