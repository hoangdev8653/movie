import React from "react";
import { useFormik } from "formik";
import { userValidate } from "../../validations/user";
import { userStore } from "../../store/User";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const { forgotPassword } = userStore();
  const Navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: userValidate.forgotPassword,
    onSubmit: async (values) => {
      try {
        const error = await forgotPassword(values);
        if (!error) {
          setTimeout(() => {
            Navigate("/login");
          }, 3000);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="dark:bg-gray-900 min-h-screen">
      <main
        id="content"
        role="main"
        className="w-full  max-w-md mx-auto p-6 h-full"
      >
        <div className="mt-32 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Forgot password?
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Remember your password?
                <a
                  className="text-blue-600 decoration-2 hover:underline font-medium"
                  href="/login"
                >
                  {""} Login here
                </a>
              </p>
            </div>

            <div className="mt-5">
              <form onSubmit={formik.handleSubmit}>
                <div className="grid gap-y-4">
                  <div>
                    <label
                      for="email"
                      className="block text-sm font-bold ml-1 mb-2 dark:text-white"
                    >
                      Email address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <div className="text-red-500  text-center mt-1">
                          {formik.errors.email}
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={formik.errors.email && formik.touched.email}
                    className={`py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold  text-white  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 ${
                      formik.errors.email && formik.touched.email
                        ? "bg-blue-300"
                        : "bg-blue-500 hover:bg-blue-600"
                    }`}
                  >
                    Send Code
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ForgotPassword;
