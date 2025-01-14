import React from "react";
import styles from "./InfoUser.module.scss";
import { userStore } from "../../../../store/User";
import { getLocalStorage } from "../../../../utils/localStorage";
import { useFormik } from "formik";
import { userValidate } from "../../../../validations/user";

function InfoUser() {
  const user = getLocalStorage("user");

  const { updateProfile } = userStore();

  const formik = useFormik({
    initialValues: {
      password: "",
      username: "",
      address: "",
      phone: "",
    },
    validationSchema: userValidate.updateProfile,
    onSubmit: async (values) => {
      try {
        await updateProfile(values);
        formik.resetForm();
      } catch (error) {
        console.log("Cập Nhật không thành công:", error);
      }
    },
  });

  return (
    <div className="mb-1 text-base px-4 w-full">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-2">
          <label className="font-semibold ml-4">Email</label>
          <input
            className={styles.form_control}
            name="email"
            type="email"
            disabled
            value={user?.email ?? ""}
          />
        </div>
        <div className="mb-2">
          <label className="font-semibold ml-4">Mật Khẩu</label>
          <input
            className={styles.form_control}
            name="password"
            id="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.password && formik.errors.password && (
          <div className="text-red-500 ml-44">{formik.errors.password}</div>
        )}
        <div className="mb-2">
          <label className="font-semibold ml-4">Họ và tên</label>
          <input
            className={styles.form_control}
            id="username"
            name="username"
            type="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.username && formik.errors.username && (
          <div className="text-red-500 ml-44">{formik.errors.username}</div>
        )}
        <div className="mb-2">
          <label className="font-semibold ml-4">Địa Chỉ</label>
          <input
            id="address"
            name="address"
            type="address"
            className={styles.form_control}
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.address && formik.errors.address && (
          <div className="text-red-500 ml-44 ">{formik.errors.address}</div>
        )}

        <div className="mb-2">
          <label className="font-semibold ml-4">Số điện thoại</label>
          <input
            id="phone"
            name="phone"
            type="phone"
            className={styles.form_control}
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="text-red-500 ml-44">{formik.errors.phone}</div>
          )}
        </div>

        <button type="submit" className={`${styles.btn_submit} ml-4 mt-2`}>
          Cập Nhật Thông Tin
        </button>
      </form>
    </div>
  );
}

export default InfoUser;
