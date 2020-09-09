import React from "react";
import { useFormik } from "formik";

function FormikForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      let error = {};
      if (!values.email) error.email = "Email is Required";
      if (!values.password) error.password = "Password is Required";
      return error;
    },
  });
  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <label>
          Enter User Email:
          <input
            id="email"
            type="text"
            placeholder="Enter Your Email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email ? <div className='error'>{formik.errors.email}</div> : ""}
        </label>
        <br /> <br />
        <label>
          Enter Your password:
          <input
            id="password"
            type="password"
            placeholder="Enter Your passeord"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
    {formik.errors.password ? <div className="error">{formik.errors.password}</div> : ""}

        </label>
        <br /> <br />
        <input type="submit" onChange={formik.handleSubmit} />
      </form>
    </div>
  );
}

export default FormikForm;
