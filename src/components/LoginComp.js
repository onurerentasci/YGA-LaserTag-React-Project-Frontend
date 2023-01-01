import React from "react";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import SignUp from "../pages/SignUp";
import AvatarComp from "./AvatarComp";

const schema2 = Yup.object().shape({
  eMail: Yup.string()
    .required("E-Posta alanının doldurulması zorunludur")
    .email("E-Mail formatı geçerli değil"),
});

export default function LoginComp() {
  return (
    <div>
      <Formik
        validationSchema={schema2}
        initialValues={{ eMail: "", password: "" }}
        onSubmit={(values) => {
          const data = {
            Email: values.eMail,
            Password: values.password,
          };

          const url = "https://localhost:7017/api/users/loginuser";
          axios
            .post(url, data)
            .then((result) => {
              alert(JSON.stringify(result.data));
              localStorage.setItem("email", values.eMail);
              localStorage.setItem("password", values.password);
              localStorage.setItem("access", 1);
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
            <h3>Giris Yap!</h3>
            <div className="form">
              <form noValidate onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="eMail"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
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
                <button
                  type="submit"
                  onClick={() => window.location.reload(false)}
                >
                  Giriş Yap
                </button>
              </form>
              <a href={"/signup"} element={<SignUp />}>
                Üye Değil Misin? Kayıt Ol!
              </a>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}
