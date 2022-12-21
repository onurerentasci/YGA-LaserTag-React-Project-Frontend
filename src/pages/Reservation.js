import React from "react";
import ReservationGroup from "../components/ReservationGroup"

export default function Reservation() {
  return (
    <div className="about-container">
      <h1>Rezervasyon</h1>;
      <h4>Rezervasyon yapmak istediginiz hizmeti seçiniz</h4>
      <div className="line"></div>
      <ReservationGroup />
    </div>
  );
}
