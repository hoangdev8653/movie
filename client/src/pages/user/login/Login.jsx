import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./Login.module.scss";
import { useNavigate, Link } from "react-router-dom";
import { userValidate } from "../../../validations/user";
import { useFormik } from "formik";
import { userStore } from "../../../store/User";
import { CgSpinner } from "react-icons/cg";

function Login() {
  const navigate = useNavigate();
  const { login, isLoading } = userStore();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: userValidate.login,
    onSubmit: async (values) => {
      try {
        const error = await login(values);
        if (error === null) {
          setTimeout(() => {
            navigate("/");
          }, 3000);
        } else {
          return;
        }
      } catch (error) {
        console.log("Đăng nhập không thành công:", error);
      }
    },
  });

  return (
    <div className={styles.bg}>
      <div className={styles.login}>
        <div className="pt-12 px-8 pb-12 text-white">
          <div className="h-full">
            <img
              className={styles.img}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaIAAADWCAMAAACkEXY+AAACZFBMVEUAAAAAAAAAAAAAAADkNisAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADiNSn///////8AAADgNCkAAAD///////////8BAAD6+vrlNiz7Qyb///8AAADmOS3////////////9/f0AAAD8Qyb+/v7////+/v71QSb////////////4+Pj29vb////////////dMynkNyz/QED///////8AAAD8/Pz////PMCbWMij////////////////////+/v7////////u7u7////+/v7////////////////iNSv8/Pz////////////+/v79/f3mOyX////////7Qij////9/f0AAAD////mQDH+/v7////q6ur7SS29PT3////////bMyjkNyv+/v79/f3BLSP6+vr5+fldGQ78/Pz+/v7Dw8P8QiblNiv6+vr9/f3y8vLz8/MAAAD1QCbzQCXdNyP///+NjY22KiHGLiXeNCn////g4OBwcHD////Kysr8/PzILiX7+/vk5OT+/v7p6en///+8LCL////7+/vUNSLyPya7MR7U1NTR0dH///+jo6O7LCHTMSb////6+vrnOST5+fnfOiT////////FxcXBwcFiYmLFLiP////7+/v////7+/uyNB/vPSb///9fGg/o6Oinp6fPPSR9fX3MMCXpPCXsPyXz8/Pf39/Pz8+/LSJaGQ7////5QSbkNijlPyb6QibyPyXnOSj1QijzPiWxKSHRNSHcMyffOSfXOiOLJxbyPyX5QSb1QSa5Mh7DMiBqHhEjAAD7Qib///+zm8VOAAAAynRSTlMAAQIEzAYNCxgQEhQJFhsIGs39zTLNHfW1KCMCwc6xLyys15B0H/ymMS3gyeZfcVc3+nvNjASyhiyR3dDOo5mAGNKVSkQ27Qjy6sK4dwXw5NWdDcuvn1jGeCYhFL5xQhEE4NrOrWld0o9KRx0UEfiJZFlCMin4+IyKDdXRelIMBT8XEdFmKiQb99OppY9cXC8nCwnZ0M+YhoJzOzQjDQrXu4ZsUBjGl0UvGhUT0sltPh8c2Ecz99Id27J8SPmbkdNZTy7xt5RmYTwWr+DzTgAAGIJJREFUeNrs2r2LE0EYx/HMTDKzL3kFkyIo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"
              alt="ảnh lỗi"
            />
            <p className="text-center">
              Đăng Nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!
            </p>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="max-w-full relative w-full mr-3 ml-3 my-2"
          >
            <div className="mb-4 mt-4 ">
              <label className="my-1">Tài khoản</label>
              <input
                name="email"
                type="email"
                className={styles.form_control}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-center">
                {formik.errors.email}
              </div>
            )}
            <div className="mb-4 mt-4">
              <label>Mật khẩu</label>
              <input
                name="password"
                id="password"
                type="password"
                className={styles.form_control}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500  text-center">
                {formik.errors.password}
              </div>
            )}
            <span className="text-green-500  my-4 cursor-pointer ml-4">
              * Đăng ký
            </span>
            <div className="text-center p-2 relative hover:opacity-80">
              <button className={styles.buttonDN} type="submit">
                Đăng Nhập
              </button>
              {isLoading ? (
                <>
                  <CgSpinner className="absolute text-3xl top-4 right-40 animate-spin" />
                </>
              ) : (
                <></>
              )}
            </div>
          </form>
        </div>
        <Link to="/">
          <button className={`${styles.btnclose} hover:opacity-70`}>
            <span className="w-full flex">
              <AiOutlineClose className="text-white" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
