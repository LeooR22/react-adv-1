import { useFormik } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";

export const FormikYupPage = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: { firstname: "", lastname: "", email: "" },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(15, "debe de tener 15 caracteres o menos")
        .required("Requerido"),
      lastname: Yup.string()
        .max(10, "debe de tener 10 caracteres o menos")
        .required("Requerido"),
      email: Yup.string().email("Revise su email").required("Requerido"),
    }),
  });

  return (
    <div>
      <h1>Formik Yup Tutorial</h1>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input type="text" {...getFieldProps("firstname")} />
        {touched.firstname && errors.firstname && (
          <span>{errors.firstname}</span>
        )}{" "}
        <br />
        <label htmlFor="firstName">Last Name</label>
        <input type="text" {...getFieldProps("lastname")} />
        {touched.lastname && errors.lastname && (
          <span>{errors.lastname}</span>
        )}{" "}
        <br />
        <label htmlFor="firstName">Email Adress</label>
        <input type="text" {...getFieldProps("email")} />
        {touched.email && errors.email && <span>{errors.email}</span>} <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
