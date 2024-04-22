import React from "react";
import styles from "./loader.module.scss";
function LogoLoader() {
  return (
    <div className={styles.logo_loader}>
      <img
        src="https://movie-booking-project.vercel.app/img/logoTixLoading.png"
        alt="logoloader"
      />
    </div>
  );
}

export default LogoLoader;
