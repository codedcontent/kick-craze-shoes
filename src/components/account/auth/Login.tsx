import { Formik, Form } from "formik";
import CustomTextField from "../../common/CustomTextField";
import loginValidationSchema from "../../../schema/loginValidationSchema";
import { TLoginForm } from "../../../types/types";
import CustomButton from "../../common/CustomButton";

const Login = () => {
  const loginFormInitialValue: TLoginForm = {
    email: "",
    password: "",
  };

  const handleSubmit = (values: TLoginForm) => {
    console.log(values);
  };

  return (
    <div className="w-full h-max py-10 flex justify-center items-center">
      <Formik
        initialValues={loginFormInitialValue}
        validationSchema={loginValidationSchema}
        onSubmit={handleSubmit}
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

          <CustomButton title="Submit" type="submit" />
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
