import React, { useMemo } from "react";
import Model from "./Model";

const Registrations = () => {
  const rgbody = useMemo(() => {
    return (
      <>
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
          />
          <label for="exampleFormControlInput1" class="form-label">
            MobileNo
          </label>
          <input
            type="tel"
            class="form-control"
            id="exampleFormControlInput1"
          />
            <label for="exampleFormControlInput1" class="form-label">Email</label>
             <input type="email" class="form-control" id="exampleFormControlInput1" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
          <label for="exampleFormControlInput1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleFormControlInput1"
          />

          <button
            type="button"
            class="btn btn-success medium"
            style={{ marginTop: "20px" }}
          >
            Submit
          </button>
        </div>
      </>
    );
  },[]);
  return (
    <div>
      <Model name={"RegistrationModel"} body={rgbody} />
    </div>
  );
};

export default Registrations;
