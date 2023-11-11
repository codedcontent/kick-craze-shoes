import { Field, ErrorMessage, FieldProps } from "formik";
import React from "react";

type CustomTextFieldProps = {
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
};

const CustomTextField = ({
  label,
  name,
  disabled,
  placeholder,
  ...props
}: CustomTextFieldProps & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="mb-4 w-full">
      {label && (
        <label htmlFor={name} className="block text-sm font-bold mb-1">
          {label}
        </label>
      )}

      <Field name={name}>
        {({ field, meta }: FieldProps) => (
          <>
            <input
              {...field}
              type="text"
              id={name}
              placeholder={placeholder}
              disabled={disabled}
              className={`w-full p-2 border ${
                meta.touched && meta.error
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md focus:outline-none focus:ring focus:border-primary-2 focus:ring-primary-1 focus:ring-offset-2 ${
                disabled ? "bg-gray-100" : ""
              }`}
              {...props}
            />
          </>
        )}
      </Field>
      <ErrorMessage
        name={name}
        component="p"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
};

export default CustomTextField;
