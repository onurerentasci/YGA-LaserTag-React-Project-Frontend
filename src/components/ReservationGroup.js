import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ReservationGroup() {
  return (
    <div className="reservation-container">
      <div className="button-group">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic radio toggle large button group"
        />
        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio1"
          autocomplete="off"
          checked
        />
        <label class="btn btn-outline-primary" for="btnradio1">
          Laser Tag
        </label>

        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio2"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="btnradio2">
          PlayStation
        </label>

        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio3"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="btnradio3">
          PC
        </label>
      </div>
    </div>
  );
}
