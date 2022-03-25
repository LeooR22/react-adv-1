import { Form, Formik } from "formik";
import { MyTextInput } from "../components";
import "../styles/styles.css";
import * as Yup from "yup";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "name debe de ser mayor a 2 caracteres")
            .max(15, "name debe ser menor que 15 caracteres")
            .required("Este campo es requerido"),
          email: Yup.string()
            .min(6, "email debe de ser mayor a 6 caracteres")
            .email("revise el email")
            .required("Este campo es requerido"),
          password1: Yup.string()
            .min(6, "password debe ser mayor que 6 caracteres")
            .required("este campo es requerido"),

          password2: Yup.string()
            .required("este campo es requerido")
            .oneOf([Yup.ref("password1")], "Las constraseñas no son iguales"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput
              label="Name"
              name="name"
              placeholder="Leonel"
              type="text"
            />
            <MyTextInput
              label="Email Adress"
              name="email"
              placeholder="yourmail@mail.com"
              type="email"
            />
            <MyTextInput
              label="Password"
              name="password1"
              type="password"
              placeholder="******"
            />
            <MyTextInput
              label="Repeat Password"
              name="password2"
              type="password"
              placeholder="******"
            />
            <button type="submit">Create</button>
            <button onClick={handleReset}>Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
