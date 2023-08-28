import * as Yup from "yup";

export const signupSchema = Yup.object({
  name: Yup.string().min(1).max(20).required("Please Enter Your Name"),
  mobile: Yup.number()
    .min(1000000000)
    .max(9999999999)
    .required("Please Enter Your Mobile Number"),
  email: Yup.string().email().required("Please Enter Your Email"),
  dob: Yup.date().required("Age is a required feild"),
  password: Yup.string().min(6).required("Please Enter Your Password"),
  cnfPassword: Yup.string()
    .required("Please fill this as same as password")
    .oneOf([Yup.ref("password"), null, "Password does not matched"]),
});
