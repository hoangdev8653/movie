import Slider from "react-slick";
import LogoLoader from "../../components/loader/loader";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./banner.module.scss";
function Banner() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
  };
  const [isLogoLoader, setIsLogoLoader] = useState(false);
  return (
    <div>
      {isLogoLoader ? (
        <LogoLoader />
      ) : (
        <>
          <div>
            <Slider {...settings}>
              <img
                className={styles.banner}
                src="https://movie-booking-project.vercel.app/img/carousel/gai-gia-lam-chieu.jpg"
                alt="banner"
              />
              <img
                className={styles.banner}
                src="https://movie-booking-project.vercel.app/img/carousel/lua-deu-gap-lua-dao.jpg"
                alt="banner"
              />
              <img
                className={styles.banner}
                src="https://movie-booking-project.vercel.app/img/carousel/gai-gia-lam-chieu.jpg"
                alt="banner"
              />
            </Slider>
          </div>
        </>
      )}
    </div>
  );
}

export default Banner;
