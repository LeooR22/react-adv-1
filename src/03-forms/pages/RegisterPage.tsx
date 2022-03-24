import { FormEvent } from "react";
import { useForm } from "../hooks/useform";
import "../styles/styles.css";

export const RegisterPage = () => {
  const {
    formData,
    onChange,
    resetForm,
    isValidEmail,
    name,
    password1,
    password2,
    email,
  } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate onSubmit={onSubmit}>
        <input
          name="name"
          placeholder="Name"
          type="text"
          onChange={onChange}
          value={name}
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}{" "}
        <input
          name="email"
          placeholder="Email"
          type="email"
          onChange={onChange}
          value={email}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Email no es valido</span>}
        <input
          name="password1"
          placeholder="Password"
          type="password"
          onChange={onChange}
          value={password1}
        />
        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}{" "}
        {password1.trim().length <= 6 && password1.trim().length > 0 && (
          <span>La constraseña tiene que tener 6 caracteres</span>
        )}{" "}
        <input
          name="password2"
          placeholder="Repeat Password"
          type="password"
          onChange={onChange}
          value={password2}
        />
        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}{" "}
        {password2.trim().length > 0 && password1 !== password2 && (
          <span>Las contraseñas deben de ser iguales</span>
        )}{" "}
        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset Form
        </button>
      </form>
    </div>
  );
};
