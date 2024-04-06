import { useEffect, useState } from "react";
import Logo from "../assets/headTixLogo.png";
function BackToTop() {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.screenY > 400) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div onClick={goToTop} className="bg-red-400">
      {isShow ? (
        <>
          <img src={Logo} alt="logo" />
        </>
      ) : null}
    </div>
  );
}

export default BackToTop;
