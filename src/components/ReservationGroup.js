import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import AvatarComp from "./AvatarComp";
import LoginComp from "./LoginComp";

const schema = Yup.object().shape({
  phoneNumber: Yup.string().required(
    "Telefon alanının doldurulması zorunludur"
  ),
});


export default function ReservationGroup() {
  return (
    <div className="reservation-container">
      <div className="row g-0 text-center">
        <div className="col-sm-6 col-md-8 ">
          <Formik
            validationSchema={schema}
            initialValues={{
              service: "",
              phoneNumber: "",
              date: "",
              period: "",
            }}
            onSubmit={(values) => {
              const data = {
                service: values.service,
                phoneNumber: values.phoneNumber,
                date: values.date,
                period: values.period,
              };

              const url = "https://localhost:7184/api/user";
              axios
                .post(url, data)
                .then((result) => {
                  console.log(JSON.stringify(result.data)); {/*alert(JSON.stringify(result.data));*/}
                })
                .catch((error) => {
                  alert(error);
                });
              console.log(JSON.stringify(values)); {/*alert(JSON.stringify(values));*/}
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
              <div className="reservation-form">
                <form noValidate onSubmit={handleSubmit}>
                  <div
                    className="choice"
                    role="group"
                    aria-labelledby="my-radio-group"
                  >
                    <h6>Almak istediginiz hizmeti seçiniz!</h6>
                    <label>
                      <Field type="radio" name="service" value={"laserTag"} />
                      LaserTag
                    </label>
                    <label>
                      <Field type="radio" name="service" value={"playstation"} />
                      Playstation
                    </label>
                    <label>
                      <Field type="radio" name="service" value={"pc"} />
                      PC
                    </label>
                  </div>
                  <div className="phoneNumber">
                    <h6>Telefon Numaranızı Yazınız</h6>
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
                  </div>
                  <p className="error">
                    {errors.phoneNumber &&
                      touched.phoneNumber &&
                      errors.phoneNumber}
                  </p>
                  <div
                    className="choice"
                    role="group"
                    aria-labelledby="my-radio-group"
                  >
                    <h6>Gün Seçiniz</h6>
                    <label>
                      <Field type="radio" name="date" value={"pazartesi"} />
                      Pazartesi
                    </label>
                    <label>
                      <Field type="radio" name="date" value={"sali"} />
                      Salı
                    </label>
                    <label>
                      <Field type="radio" name="date" value={"carsamba"} />
                      Çarşamba
                    </label>
                    <label>
                      <Field type="radio" name="date" value={"persembe"} />
                      Perşembe
                    </label>
                    <label>
                      <Field type="radio" name="date" value={"cuma"} />
                      Cuma
                    </label>
                    <label>
                      <Field type="radio" name="date" value={"cumartesi"} />
                      Cumartesi
                    </label>
                  </div>
                  <div
                    className="choice"
                    role="group"
                    aria-labelledby="my-radio-group"
                  >
                    <h6>Lütfen Saat Seçiniz</h6>
                    <div>
                      <label>
                        <Field type="radio" name="period" value={"period1"} />
                        10.00-11.00
                      </label>
                      <label>
                        <Field type="radio" name="period" value={"period2"} />
                        11.00-12.00
                      </label>
                      <label>
                        <Field type="radio" name="period" value={"period3"} />
                        12.00-13.00
                      </label>
                      <label>
                        <Field type="radio" name="period" value={"period4"} />
                        13.00-14.00
                      </label>
                    </div>
                    <div>
                      <label>
                        <Field type="radio" name="period" value={"period5"} />
                        14.00-15.00
                      </label>
                      <label>
                        <Field type="radio" name="period" value={"period6"} />
                        15.00-16.00
                      </label>
                      <label>
                        <Field type="radio" name="period" value={"period7"} />
                        16.00-17.00
                      </label>
                      <label>
                        <Field type="radio" name="period" value={"period8"} />
                        17.00-18.00
                      </label>
                    </div>
                  </div>

                  <div className="submit-button">
                    <button type="submit" className="button-36">
                      Rezervasyon
                    </button>
                  </div>
                </form>
              </div>
            )}
          </Formik>
        </div>

        <div className="col-6 col-md-4">
          {/* login */}
          {localStorage.getItem("access") == 1 ? <AvatarComp/> : <LoginComp/>}
        </div>
      </div>
    </div>
  );
}
