import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const userSchema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
});

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
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
        <Field type="text" name="email" placeholder="Email"></Field>
        <ErrorMessage name="email" component="div" />
        <Field type="password" name="password" placeholder="Password"></Field>
        <ErrorMessage name="password" component="div" />
        <button type="submit">Login</button>
        {/* <p>Already have a account?</p> */}
        <Link to="/register">
          Does not have an account? <span>Registration</span>
        </Link>
      </Form>
    </Formik>
  );
};
export default LoginForm;
