import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components Tutorial</h1>

      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstname: Yup.string()
            .max(15, "debe de tener 15 caracteres o menos")
            .required("Requerido"),
          lastname: Yup.string()
            .max(10, "debe de tener 10 caracteres o menos")
            .required("Requerido"),
          email: Yup.string().email("Revise su email").required("Requerido"),
          terms: Yup.boolean().oneOf([true], "Debe de aceptar las condiciones"),
          jobType: Yup.string()
            .notOneOf(["it-jr"], "Esta opcion no es permitida")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstname" type="text" />
            <ErrorMessage name="firstname" component="span" />
            <br />
            <label htmlFor="lastname">Last name</label>
            <Field name="lastname" type="text" />
            <ErrorMessage name="lastname" component="span" />
            <br />
            <label htmlFor="email">Email</label>
            <Field name="email" type="text" />
            <ErrorMessage name="email" component="span" />
            <br />

            <label htmlFor="jobType">Job Type</label>
            <Field name="jobType" as="select">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">It Senior</option>
              <option value="it-jr">It Jr</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <br />
            <label>
              <Field name="terms" type="checkbox" />
              Terms and conditions
            </label>
            <ErrorMessage name="terms" component="span" />
            <br />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
