import React, { useMemo, useState } from "react";
import Model from "./Model";
import { useRecoilState } from "recoil";
import {rgsdata} from './Modelrecoil';
const Registrations = () => {
  const [Name, setName] = useState("");
  const [MobileNo, setMobileNO] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [rgsAllData,setrgsAllData] = useRecoilState(rgsdata);
  const submitHandler = (e) => {
       e.preventDefault();
       let registrationsData = {Email, MobileNo, Name, Password };
       setrgsAllData((pre)=>[...pre,registrationsData]);
       setName("");
       setMobileNO("");
       setEmail("");
       setPassword("");
  };
  console.log("rgsAllData",rgsAllData);
  const rgbody = useMemo(() => {
    return (
      <>
      
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            value={Name}
            onChange={(e) => {setName(e.target.value)}}
          />
          <label htmlFor="exampleFormControlInput2" className="form-label">
            MobileNo
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput2"
            value={MobileNo}
            onChange={(e) =>{ setMobileNO(e.target.value)}}
          />
          <label htmlFor="exampleFormControlInput3" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput3"
            placeholder="me@example.com"
            value={Email}
            onChange={(e) =>{ setEmail(e.target.value)}}
          />
          <label htmlFor="exampleFormControlInput4" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleFormControlInput4"
            value={Password}
            onChange={(e) =>{ setPassword(e.target.value)}}
          />
           
          <button
            style={{ marginTop: "20px" }}
            onClick={submitHandler}
          >
            Submit
          </button>
        </div>
      </>
    );
  }, [Name, MobileNo, Email, Password]);

  return (
    <div>
      <Model name={"RegistrationModel"} body={rgbody} />
    </div>
  );
};

export default Registrations;
