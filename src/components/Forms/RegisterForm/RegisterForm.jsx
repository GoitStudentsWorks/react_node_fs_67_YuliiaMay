import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const userSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().min(6).email().required(),
  password: Yup.string().required(),
  confirmPassword: Yup.string().required(),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <Form autoComplete="off">
        <Field type="text" name="name" placeholder="Name"></Field>
        <ErrorMessage name="name" component="div" />
        <Field type="text" name="email" placeholder="Email"></Field>
        <ErrorMessage name="email" component="div" />
        <Field type="password" name="password" placeholder="Password"></Field>
        <ErrorMessage name="password" component="div" />
        <Field
          type="password"
          name="confirmPassword"
          placeholder="confirmPassword"
        ></Field>
        <ErrorMessage name="confirmPassword" component="div" />
        <button type="submit">Registration</button>
        {/* <p>Already have a account?</p> */}
        <Link to="/login">
          Already have a account? <span>Login</span>
        </Link>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
