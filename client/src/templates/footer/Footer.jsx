import styles from "./Footer.module.scss";
import {
  cgv,
  bhd,
  galaxycine,
  cinestar,
  lotte,
  megagas,
  bt,
  dongdacinema,
  touch,
  cnx,
  startLight,
  dcine,
  zalo,
  payoo,
  vcb,
  agribank,
  vib,
  ivb,
  go,
  laban,
  apple,
  facebook,
  zaloPay,
  android,
  logo,
} from "../../image";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.copyRight}>
          <div className={styles.info_section}>
            <ul>
              <p className="text-white">TIX</p>
              <div>
                <a href="/">FAQ</a>
              </div>
              <div>
                <a href="/">
                  <p>Brand</p> <p>Guidelines</p>
                </a>
              </div>
            </ul>
            <ul>
              <div className="mb-2">
                <a href="/">Thỏa thuận sử dụng</a>
              </div>
              <div className="mt-4">
                <a href="/">Chính sách đổi trả</a>
              </div>
            </ul>
          </div>
          <div className={styles.partner}>
            <p className="text-white">Đối tác</p>
            <div className="grid grid-cols-5 ">
              <img className="rounded-full w-8 h-8 m-1" src={cgv} alt="cgv" />
              <img className="rounded-full w-8 h-8 m-1" src={bhd} alt="bhd" />
              <img
                className="rounded-full w-8 h-8 m-1"
                src={galaxycine}
                alt="galaxycine"
              />
              <img
                className="rounded-full w-8 h-8 m-1"
                src={cinestar}
                alt="cinestar"
              />
              <img
                className="rounded-full w-8 h-8 m-1"
                src={lotte}
                alt="lotte"
              />
              <img
                className="rounded-full w-8 h-8 m-1"
                src={megagas}
                alt="megagas"
              />
              <img className="rounded-full w-8 h-8 m-1" src={bt} alt="betta" />
              <img
                className="rounded-full w-8 h-8 m-1"
                src={dongdacinema}
                alt="dong-da-cinema"
              />
              <img
                className="rounded-full w-8 h-8 m-1"
                src={touch}
                alt="touch"
              />
              <img className="rounded-full w-8 h-8 m-1" src={cnx} alt="cnx" />
              <img
                className="rounded-full w-8 h-8 m-1"
                src={startLight}
                alt="start-light"
              />
              <img
                className="rounded-full w-8 h-8 m-1"
                src={dcine}
                alt="dcine"
              />
              <img className="rounded-full w-8 h-8 m-1" src={zalo} alt="zalo" />
              <img
                className="rounded-full w-8 h-8 m-1"
                src={payoo}
                alt="payoo"
              />
              <img className="rounded-full w-8 h-8 m-1" src={vcb} alt="vcb" />
              <img
                className="rounded-full w-8 h-8 m-1"
                src={agribank}
                alt="agribank"
              />
              <img className="rounded-full w-8 h-8 m-1" src={vib} alt="vib" />
              <img className="rounded-full w-8 h-8 m-1" src={ivb} alt="ivb" />
              <img className="rounded-full w-8 h-8 m-1" src={go} alt="go" />
              <img
                title="laban"
                className="rounded-full w-8 h-8 m-1"
                src={laban}
                alt="laban"
              />
            </div>
          </div>
          <div className={styles.socal_media}>
            <div>
              <p className="text-white mx-4 mb-2">MOBILE APP</p>
              <div className="flex gap-8">
                <img className="w-7 h-7" src={apple} alt="apple" />
                <img className="w-7 h-7" src={android} alt="android" />
              </div>
            </div>
            <div>
              <p className="text-white mx-4 mb-2">SOCIAL APP</p>
              <div className="flex gap-8">
                <img className="w-7 h-7" src={facebook} alt="facebook" />
                <a href="https://zalo.me/0766640006">
                  <img className="w-7 h-7" src={zaloPay} alt="zalo" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.infoCompany}>
          <img
            className="w-15 h-10 rounded-lg mx-auto"
            src="https://movie-booking-project.vercel.app/img/logo-connect/zion-logo.jpg"
            alt="ion"
          />
          <div className="text-white mx-auto">
            <p>
              TIX - SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZIONĐịa chỉ: Z06 Đường số 13,
              Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.Giấy
              chứng nhận đăng ký kinh doanh số: 0101659783,đăng ký thay đổi lần
              thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành
              phố Hồ Chí Minh cấp.Số Điện Thoại (Hotline): 1900 545 436
            </p>
            <span>Email: support@tix.vn</span>
          </div>
          <img
            className="w-28 h-16 mx-auto"
            src="https://movie-booking-project.vercel.app/img/media/certificate.png"
            alt="✅"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
