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
      style={{
        position: "fixed",
        bottom: "50px",
        right: "30px",
        cursor: "pointer",
        transition: "opacity 0.2s linear 0s, visibility",
        opacity: "1",
        visibility: "visible",
        display: visible ? "inline" : "none",
      }}
      onClick={goToTop}
    >
      <img
        style={{
          right: "10px",
          width: "50px",
          bottom: "30px",
          zIndex: "5000",
          position: "fixed",
          transform: "rotate(180deg)",
          transitionTimingFunction: "linear",
        }}
        className="h-12 w-12 bg-transparent"
        src={BackTop}
        alt="back-to-top"
      />
    </div>
  );
}

export default BackToTop;
