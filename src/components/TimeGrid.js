import React from "react";

export default function TimeGrid() {
  return (
    <div>
      <div role="group" class="r1 d-flex justify-content-evenly">
        <input
          type="checkbox"
          class="btn-check"
          id="btncheck1"
          autocomplete="off"
        />
        <label class="btn btn-success" for="btncheck1">
          10.00-11.00
        </label>

        <input
          type="checkbox"
          class="btn-check"
          id="btncheck2"
          autocomplete="off"
        />
        <label class="btn btn-success" for="btncheck2">
          11.00-12.00
        </label>

        <input
          type="checkbox"
          class="btn-check"
          id="btncheck3"
          autocomplete="off"
        />
        <label class="btn btn-success" for="btncheck3">
          12.00-13.00
        </label>

        <input
          type="checkbox"
          class="btn-check"
          id="btncheck4"
          autocomplete="off"
        />
        <label class="btn btn-success" for="btncheck4">
          13.00-14.00
        </label>
      </div>
      <div role="group" class="r2 d-flex justify-content-evenly">
        <input
          type="checkbox"
          class="btn-check"
          id="btncheck5"
          autocomplete="off"
        />
        <label class="btn btn-success" for="btncheck5">
          14.00-15.00
        </label>
        <input
          type="checkbox"
          class="btn-check"
          id="btncheck6"
          autocomplete="off"
        />
        <label class="btn btn-success" for="btncheck6">
          15.00-16.00
        </label>
        <input
          type="checkbox"
          class="btn-check"
          id="btncheck7"
          autocomplete="off"
        />
        <label class="btn btn-success" for="btncheck7">
          16.00-17.00
        </label>
        <input
          type="checkbox"
          class="btn-check"
          id="btncheck8"
          autocomplete="off"
        />
        <label class="btn btn-success" for="btncheck8">
          17.00-18.00
        </label>
      </div>
    </div>
  );
}
