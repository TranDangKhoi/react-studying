import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Please enter your first name";
//   } else if (values.firstName.length > 20) {
//     errors.firstName = "Your first name must be less than 20 characters";
//   }
//   if (!values.lastName) {
//     errors.lastName = "Please enter your last name";
//   } else if (values.lastName.length > 20) {
//     errors.lastName = "Your last name must be less than 20 characters";
//   }
//   return errors;
// };
const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Your first name must be less than 20 characters")
        .required("Please enter your first name"),
      lastName: Yup.string()
        .max(10, "Your last name must be less than 10 characters")
        .required("Please enter your last name"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-10 w-full max-w-[500px] mx-auto my-5"
      autoComplete="off"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          className="p-4 rounded-lg border-2 border-gray-200"
          placeholder="Enter your first name"
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-sm text-red-500">{formik.errors.firstName}</div>
        ) : null}
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          className="p-4 rounded-lg border-2 border-gray-200"
          placeholder="Enter your last name"
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-sm text-red-500">{formik.errors.lastName}</div>
        ) : null}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white text-lg rounded-lg p-5"
      >
        Submit
      </button>
    </form>
  );
};

export default SignUpForm;
