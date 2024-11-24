import { logo } from "../../image";
import Menu from "./menu/Menu";
import Avarta from "./avarta/Avarta";
function Header() {
  return (
    <div
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      }}
      className="w-full bg-white"
    >
      <div className="mx-8 justify-between items-center flex py-2">
        <a href="/">
          <div className="logo">
            <img className="w-[50px] h-[50px]" src={logo} alt="logo" />
          </div>
        </a>
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
