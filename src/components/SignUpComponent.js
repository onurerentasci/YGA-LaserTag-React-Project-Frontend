import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  firstName: Yup.string().required("İsim alanının doldurulması zorunludur"),
  lastName: Yup.string().required("Soyisim alanının doldurulması zorunludur"),
  eMail: Yup.string()
    .required("E-Posta alanının doldurulması zorunludur")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Parola alanının doldurulması zorunludur")
    .min(8, "Parolanız en az 8 karakterden oluşmak zorundadır!"),
});

export default function SignUpComponent() {
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    eMail: "",
  });

  useEffect(() => {
    console.log(value.firstName);
    console.log(value.lastName);
    console.log(value.eMail);
  });

  function handleChange(e) {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="signup-container">
      <div className="row g-0 text-center">
        <Formik
          validationSchema={schema}
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            const data = {
              firstName: values.firstName,
              lastName : value.lastName,
              eMail: value.eMail,
              password: value.password
            };

            const url = "https://localhost:7184/api/user";
            axios
              .post(url, data)
              .then((result) => {
                alert(JSON.stringify(result.data));
              })
              .catch((error) => {
                alert(error);
              });
            alert(JSON.stringify(values));
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <div className="login">
              <h3>Kayıt Ol!</h3>
              <div className="form">
                <form noValidate onSubmit={handleSubmit}>
                {/* input ad */}
                <input
                    type="firstName"
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    placeholder="İsim"
                    className="form-control inp_text"
                    id="firstName"
                  />
                  <p className="error">
                    {errors.firstName && touched.firstName && errors.firstName}
                  </p>
                  {/* İnput soyad */}
                  <input
                    type="lastName"
                    name="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    placeholder="Soyisim"
                    className="form-control inp_text"
                    id="lastName"
                  />
                  <p className="error">
                    {errors.lastName && touched.lastName && errors.lastName}
                  </p>
                  <input
                    type="eMail"
                    name="eMail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.eMail}
                    placeholder="E-Posta"
                    className="form-control inp_text"
                    id="eMail"
                  />
                  <p className="error">
                    {errors.eMail && touched.eMail && errors.eMail}
                  </p>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Parola"
                    className="form-control"
                  />
                  <p className="error">
                    {errors.password && touched.password && errors.password}
                  </p>
                  <button type="submit">KAYDOL</button>
                </form>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}
