import React, { useEffect } from "react";
import styles from "./Overlay.module.scss";

function Overlay({ onClick }) {
  const overlay = document.getElementById("overlay");
  useEffect(() => {
    if (!overlay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [overlay]);

  return <div id="overlay" onClick={onClick} className={styles.overlay}></div>;
}

export default Overlay;
