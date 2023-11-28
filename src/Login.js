import React, { useMemo, useState } from "react";
import Model from "./Model";

const Login = () => {
  
  const renderLoginBodyElements = useMemo(() => {
    return (
      <>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email
          </label>
          <input
          name="email"
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
          />
          <label for="exampleFormControlInput1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleFormControlInput2"
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
      <Model name={"LoginModel"} body={renderLoginBodyElements} />
    </div>
  );
};

export default Login;
