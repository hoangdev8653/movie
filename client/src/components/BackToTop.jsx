import { useState } from "react";
import BackTop from "../assets/Logo-backTop.png";

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
        className="h-12  bg-transparent fixed right-6 w-12 bottom-8 z-[5000] transform rotate-180 transition ease-linear"
        src={BackTop}
        alt="back-to-top"
      />
    </div>
  );
}

export default BackToTop;
