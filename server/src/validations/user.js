import joi from "joi";

const register = (data) => {
  const register = joi.object({
    email: joi.string().email().lowercase().required(),
    password: joi
      .string()
      .min(6)
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    username: joi.string().min(3).max(30),
    phone: joi
      .string()
      .length(10)
      .pattern(/^[0-9]+$/),
  });
  return register.validate(data);
};

export const userValidate = { register };
