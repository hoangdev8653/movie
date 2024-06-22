import React from "react";
import styles from "./InfoUser.module.scss";
function InfoUser() {
  return (
    <div className="mb-4 text-base px-4 w-full">
      <form>
        <div className="mb-4">
          <label className="font-semibold ml-4">Email</label>
          <input
            className={styles.form_control}
            name="email"
            type="email"
            disabled
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="font-semibold ml-4">Tài khoản</label>
          <input
            className={styles.form_control}
            name="taikhoan"
            type="text"
            // value={account}
            // onChange={(e) => setTaikhoan(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="font-semibold ml-4">Họ và tên</label>
          <input
            className={styles.form_control}
            name="hoten"
            type="text"
            // value={username}
            // onChange={(e) => setHoten(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="font-semibold ml-4">Số điện thoại</label>
          <input
            className={styles.form_control}
            name="sodt"
            type="text"
            // value={phone}
            // onChange={(e) => setSodt(e.target.value)}
          />
        </div>
        <button type="submit" className={`${styles.btn_submit} ml-4`}>
          Cập Nhật Thông Tin
        </button>

        {/* <>
          <ChangePassword id={id} />
        </> */}
      </form>
    </div>
  );
}

export default InfoUser;
