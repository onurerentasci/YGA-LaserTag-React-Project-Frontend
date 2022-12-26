import React from "react";

export default function TimeGrid() {
  return (
    <div>
      <div role="group" className="r1 d-flex justify-content-evenly">
        <input
          type="checkbox"
          className="btn-check"
          id="btncheck1"
          autoComplete="off"
        />
        <label className="btn btn-success" htmlFor="btncheck1">
          10.00-11.00
        </label>

        <input
          type="checkbox"
          className="btn-check"
          id="btncheck2"
          autoComplete="off"
        />
        <label className="btn btn-success" htmlFor="btncheck2">
          11.00-12.00
        </label>

        <input
          type="checkbox"
          className="btn-check"
          id="btncheck3"
          autoComplete="off"
        />
        <label className="btn btn-success" htmlFor="btncheck3">
          12.00-13.00
        </label>

        <input
          type="checkbox"
          className="btn-check"
          id="btncheck4"
          autoComplete="off"
        />
        <label className="btn btn-success" htmlFor="btncheck4">
          13.00-14.00
        </label>
      </div>
      <div role="group" className="r2 d-flex justify-content-evenly">
        <input
          type="checkbox"
          className="btn-check"
          id="btncheck5"
          autoComplete="off"
        />
        <label className="btn btn-success" htmlFor="btncheck5">
          14.00-15.00
        </label>
        <input
          type="checkbox"
          className="btn-check"
          id="btncheck6"
          autoComplete="off"
        />
        <label className="btn btn-success" htmlFor="btncheck6">
          15.00-16.00
        </label>
        <input
          type="checkbox"
          className="btn-check"
          id="btncheck7"
          autoComplete="off"
        />
        <label className="btn btn-success" htmlFor="btncheck7">
          16.00-17.00
        </label>
        <input
          type="checkbox"
          className="btn-check"
          id="btncheck8"
          autoComplete="off"
        />
        <label className="btn btn-success" htmlFor="btncheck8">
          17.00-18.00
        </label>
      </div>
    </div>
  );
}
