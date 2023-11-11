import * as Yup from "yup";

const createAccountValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email must valid"
    ),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  name: Yup.string().required("Name is required"),
});

export default createAccountValidationSchema;
