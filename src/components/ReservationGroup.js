import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SignUp from "../pages/SignUp";
import TimeGrid from "./TimeGrid";
import axios from "axios";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("E-Posta alanının doldurulması zorunludur")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Parola alanının doldurulması zorunludur")
    .min(8, "Parolanız en az 8 karakterden oluşmak zorundadır!"),
});

export default function ReservationGroup() {
  return (
    <div className="reservation-container">
      <div className="row g-0 text-center">
        <div className="col-sm-6 col-md-8 ">
          <h6>Almak istediginiz hizmeti seçiniz!</h6>
          <Formik
            initialValues={{
              picked: "",
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ values }) => (
              <Form>
                <div
                  className="choice"
                  role="group"
                  aria-labelledby="my-radio-group"
                >
                  <label>
                    <Field type="radio" name="choice" value="LaserTag" />
                    LaserTag
                  </label>
                  <label>
                    <Field type="radio" name="choice" value="Playstation" />
                    PlayStation
                  </label>
                  <label>
                    <Field type="radio" name="choice" value="PC" />
                    PC
                  </label>
                </div>
              </Form>
            )}
          </Formik>
          <Formik
            validationSchema={schema}
            initialValues={{ phoneNumber: "" }}
            onSubmit={(values) => {
              const data = {
                phoneNumber: values.phoneNumber,
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
              <div className="phoneNumber">
                <h6>Telefon Numaranızı Yazınız</h6>
                <form noValidate onSubmit={handleSubmit}>
                  <input
                    type="tel"
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
                </form>
              </div>
            )}
          </Formik>
          <div>
            <Formik
              initialValues={{
                picked: "",
              }}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
              }}
            >
              {({ values }) => (
                <Form>
                  <h6>Gün seçiniz</h6>
                  <div
                    className="choice"
                    role="group"
                    aria-labelledby="my-radio-group"
                  >
                    <label>
                      <Field type="radio" name="period" value="Pazartesi" />
                      Pazartesi
                    </label>
                    <label>
                      <Field type="radio" name="period" value="Sali" />
                      Salı
                    </label>
                    <label>
                      <Field type="radio" name="period" value="Carsamba" />
                      Çarşamba
                    </label>
                    <label>
                      <Field type="radio" name="period" value="Persembe" />
                      Perşembe
                    </label>
                    <label>
                      <Field type="radio" name="period" value="Cuma" />
                      Cuma
                    </label>
                    <label>
                      <Field type="radio" name="period" value="Cumartesi" />
                      Cumartesi
                    </label>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <h6>Saatler</h6>
          <div className="time-grid">
            <TimeGrid />
          </div>
          <div>
            <div className="submit-button">
              <button type="submit" className="button-36" role="button">
                Rezervasyon
              </button>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-4">
          <Formik
            validationSchema={schema}
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              const data = {
                Name: values.email,
                Fiyat: values.password,
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
                <h3>Giris Yap!</h3>
                <div className="form">
                  <form noValidate onSubmit={handleSubmit}>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="E-Posta"
                      className="form-control inp_text"
                      id="email"
                    />
                    <p className="error">
                      {errors.email && touched.email && errors.email}
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
                    <button type="submit">Giriş Yap</button>
                  </form>
                  <a href={"/signup"} element={<SignUp />}>
                    Üye Değil Misin? Kayıt Ol!
                  </a>
                </div>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
