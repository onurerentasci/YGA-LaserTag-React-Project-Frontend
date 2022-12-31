import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  firstName: Yup.string().required("İsim alanının doldurulması zorunludur"),
  lastName: Yup.string().required("Soyisim alanının doldurulması zorunludur"),
  phoneNumber: Yup.string()
    .required("Telefon alanının doldurulması zorunludur")
    .min(11, "0 ile başlayan geçerli bir numara giriniz"),
  eMail: Yup.string()
    .required("E-Posta alanının doldurulması zorunludur")
    .email("E-Mail formatı geçerli değil"),
  password: Yup.string()
    .required("Parola alanının doldurulması zorunludur")
    .min(8, "Parolanız en az 8 karakterden oluşmak zorundadır!"),
});

export default function SignUpComponent() {
  const navigate = useNavigate();
  const isLoggedIn = () => {
    if (axios.result == true) {
      navigate("/reservation");
    } else {
    }
  };
  return (
    <div className="signup-container">
      <div className="row g-0 text-center">
        <Formik
          validationSchema={schema}
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            password: "",
          }}
          onSubmit={(values) => {
            const data = {
              firstName: values.firstName,
              lastName: values.lastName,
              eMail: values.eMail,
              phoneNumber: values.phoneNumber,
              password: values.password,
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
                    type="tel"
                    maxLength={11}
                    name="phoneNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phoneNumber}
                    placeholder="05xxxxxxxxx"
                    className="form-control inp_text"
                    id="phoneNumber"
                  />
                  <p className="error">
                    {errors.phoneNumber &&
                      touched.phoneNumber &&
                      errors.phoneNumber}
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
                  <button id="signup" type="submit" onClick={isLoggedIn}>
                    KAYDOL
                  </button>
                </form>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}
