import * as yup from "yup";

export const FormRegisterSchema = yup.object().shape({
  username: yup.string().required("نباید خالی باشد :("),
  email: yup
    .string()
    .email(" ایمیل نامعتبر است :(")
    .required("نباید خالی باشد :("),
  password: yup.string().required("نباید خالی باشد :("),
  confirmPassword: yup.string().required("پسورد یکی نیست "),
});
