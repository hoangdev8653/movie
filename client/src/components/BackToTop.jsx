import { useState } from "react";
import BackTop from "../assets/Logo-backTop.png";
import { IoIosArrowUp } from "react-icons/io";

function BackToTop() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      className="fixed bottom-[50px] top-[30px] cursor-pointer opacity-100 overflow-hidden"
      style={{
        visibility: "visible",
        display: visible ? "inline" : "none",
      }}
      onClick={goToTop}
    >
      <img
        style={{
          right: "24px",
          width: "50px",
          bottom: "30px",
          zIndex: "5000",
          transform: "rotate(180deg)",
          transitionTimingFunction: "linear",
        }}
        className="h-12 w-12 bg-transparent fixed"
        src={BackTop}
        alt="back-to-top"
      />
    </div>
  );
}

export default BackToTop;
