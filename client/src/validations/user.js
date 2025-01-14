import * as Yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const register = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string().min(6).required("Password is Required"),
  phone: Yup.string()
    .required("Phone number is Required")
    .matches(phoneRegExp, "Phone number is not valid"),
  username: Yup.string().min(3).required("User name is Required"),
  address: Yup.string().required("Address is Required"),
});

const login = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string()
    .min(6, "Password at least 6 character ")
    .required("Password is Required"),
});

const forgotPassword = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
});

const resetPassword = Yup.object().shape({
  password: Yup.string().min(6).required("Password is Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password Required"),
});

const updatePassword = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password at least 6 character ")
    .required("Password is Required"),
  newPassword: Yup.string()
    .min(6, "New Password at least 6 character ")
    .required("Password is Required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("newPassword"), null],
    "Passwords must match"
  ),
});

const updateProfile = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password at least 6 character ")
    .required("Password is Required"),
  phone: Yup.string()
    .required("Phone number is Required")
    .matches(phoneRegExp, "Phone number is not valid"),
  username: Yup.string().min(3).required("User name is Required"),
  address: Yup.string().required("Address is Required"),
});

export const userValidate = {
  register,
  login,
  forgotPassword,
  resetPassword,
  updatePassword,
  updateProfile,
};
