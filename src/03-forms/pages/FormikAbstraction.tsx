import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyCheckbox, MySelect, MyTextInput } from "../components/";

import "../styles/styles.css";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction Tutorial</h1>

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
            <MyTextInput
              label="First Name"
              name="firstname"
              placeholder="Leonel"
            />

            <MyTextInput
              label="Last Name"
              name="lastname"
              placeholder="Rivas"
            />
            <MyTextInput
              label="Email Adress"
              name="email"
              placeholder="leo@gmail.com"
            />

            <MySelect label={"Job Type"} name={"jobType"}>
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">It Senior</option>
              <option value="it-jr">It Jr</option>
            </MySelect>

            <MyCheckbox label="Terms & conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
