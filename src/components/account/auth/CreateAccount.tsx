import { Form, Formik } from "formik";
import CustomTextField from "../../common/CustomTextField";
import CustomButton from "../../common/CustomButton";
import { TCreateAccountForm } from "../../../types/types";
import createAccountValidationSchema from "../../../schema/createAccountValidationSchema";

const CreateAccount = () => {
  const createAccountFormInitialValue: TCreateAccountForm = {
    email: "",
    password: "",
    name: "",
  };

  const handleSubmit = (values: TCreateAccountForm) => {
    console.log(values);
  };

  return (
    <div className="w-full h-max py-10 flex justify-center items-center">
      <Formik
        initialValues={createAccountFormInitialValue}
        validationSchema={createAccountValidationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="w-[80%] flex flex-col justify-center items-center">
          <CustomTextField
            name="name"
            label="Name"
            placeholder="Enter your name"
          />

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

export default CreateAccount;
