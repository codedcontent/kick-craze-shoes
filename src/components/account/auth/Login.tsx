import { Formik, Form } from "formik";
import CustomTextField from "../../common/CustomTextField";
import loginValidationSchema from "../../../schema/loginValidationSchema";
import { TLoginForm } from "../../../types/types";

const Login = () => {
  const loginFormInitialValue: TLoginForm = {
    email: "",
    password: "",
  };
  return (
    <div className="w-full flex justify-center items-center">
      <Formik
        initialValues={loginFormInitialValue}
        validationSchema={loginValidationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="w-[80%] flex flex-col justify-center items-center">
          <CustomTextField
            name="email"
            label="Email"
            placeholder="Enter your email"
          />
          <CustomTextField
            name="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
          />

          {/* Other form fields go here */}
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
