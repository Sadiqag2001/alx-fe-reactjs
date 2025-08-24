import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Yup validation schema
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Formik Form Submitted:", values);
        alert("Registration Successful!");
        resetForm();
      }}
    >
      {() => (
        <Form className="p-4 border rounded-md w-80 mx-auto">
          <h2 className="text-xl font-bold mb-4">Register with Formik</h2>

          {/* Username */}
          <div className="mb-3">
            <label>Username:</label>
            <Field name="username" type="text" className="border p-2 w-full" />
            <ErrorMessage
              name="username"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label>Email:</label>
            <Field name="email" type="email" className="border p-2 w-full" />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label>Password:</label>
            <Field
              name="password"
              type="password"
              className="border p-2 w-full"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;