import React from "react";
import { useFormik } from "formik";
import * as yup from 'yup'; // for everything


function FormikCopy() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: yup.object({
      email: yup.string().email().required('This field is required.'), 
      password: yup.string()
          .min(6, 'Password is too short.')
          .max(12, 'Password is too long.')
          .required('This field is required.')
    })
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

export default FormikCopy;
