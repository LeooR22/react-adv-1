import { FormikErrors, useFormik } from "formik";

import "../styles/styles.css";

interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
}

export const FormikBasicPage = () => {
  const validate = ({ firstname, lastname, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!firstname) {
      errors.firstname = "Required";
    } else if (firstname.length >= 15) {
      errors.firstname = "Must be 15 characters or less";
    }

    if (!lastname) {
      errors.lastname = "Required";
    } else if (lastname.length >= 10) {
      errors.lastname = "Must be 10 characters or less";
    }

    if (!email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const { handleChange, values, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: { firstname: "", lastname: "", email: "" },
      onSubmit: (values) => {
        console.log(values);
      },
      validate,
    });

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstname"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.firstname}
        />
        {touched.firstname && errors.firstname && (
          <span>{errors.firstname}</span>
        )}{" "}
        <br />
        <label htmlFor="firstName">Last Name</label>
        <input
          type="text"
          name="lastname"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastname}
        />
        {touched.lastname && errors.lastname && <span>{errors.lastname}</span>}{" "}
        <br />
        <label htmlFor="firstName">Email Adress</label>
        <input
          type="text"
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
        />
        {touched.email && errors.email && <span>{errors.email}</span>} <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
