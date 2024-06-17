import styles from "./Menu.module.scss";
import { IoMenu } from "react-icons/io5";

function Menu() {
  return (
    <div className="">
      <div className={styles.menu}>
        <ul className="flex gap-4 font-medium">
          <a href="/lich-chieu/">
            <li className={styles.item}>Lịch chiếu</li>
          </a>
          <a href="/he-thong-rap">
            <li className={styles.item}>Hệ thống rạp</li>
          </a>
          <a href="/news">
            <li className={styles.item}>Tin Tức</li>
          </a>
          <a href="/khuyen-mai-su-kien">
            <li className={styles.item}>Khuyến mãi/Sự kiện</li>
          </a>
        </ul>
      </div>
      <div className={styles.menu_mobile}>
        <IoMenu className="text-3xl" />
      </div>
    </div>
  );
}

export default Menu;
