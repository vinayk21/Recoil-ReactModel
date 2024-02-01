import React, { useMemo, useState } from "react";
import Model from "./Model";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {modelprofile,modellogin,rgsdata,masteruserinfo,loginbtn,registrationbtn,Homebtn,profilebtn,profileinfomaster,alllogindata} from './Modelrecoil'
const Login = () => {
 const val = useRecoilValue(rgsdata); 
 const master = useRecoilValue(masteruserinfo);
 const [LoginEmail,setLoginEmail] =useState("");
 const [LoginPassword,setLoginPassword] =useState("");
 const setprofile = useSetRecoilState(modelprofile);     
 const setloginbtn = useSetRecoilState(loginbtn);     
 const setalllogindatass = useSetRecoilState(alllogindata);     
 const setHomebtn = useSetRecoilState(Homebtn);     
 const setprofilebtn = useSetRecoilState(profilebtn);     
 const setprofileinfo = useSetRecoilState(profileinfomaster);     
 const setregistrationbtn = useSetRecoilState(registrationbtn);     
 const setmodellogin = useSetRecoilState(modellogin);   
 const LoginHandler = () =>{
   let masterusercredidantel = master?.filter((ee)=>ee.Emailmaster === LoginEmail && ee.Passwordmaster === LoginPassword );
   let credidanteial = val?.filter((el)=>el.Email === LoginEmail && el.Password === LoginPassword);
   setalllogindatass(credidanteial);
   // if(credidanteial){
    //   alert("welcome to profile")               
    //   setmodellogin(false);
    //   setprofile(true);
      
    // }

    if(masterusercredidantel.length>=1){
      alert("welcome  master user ")
      setmodellogin(false);
      setloginbtn(false);
      setregistrationbtn(false);
      setHomebtn(true);
      setprofilebtn(true);
      setprofileinfo(true);
    }else{
      if(credidanteial.length>=1){
      alert("welcome comman user")
      setmodellogin(false)
      setloginbtn(false);
      setHomebtn(true);
      setprofilebtn(true);
      setregistrationbtn(false);
    }else{
      alert("Enter correctinfo")
    }
  }
  } 
  console.log("setprofile",val);  
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
            onChange={(e)=>setLoginEmail(e.target.value)}
          />
          <label for="exampleFormControlInput1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            onChange={(e)=>setLoginPassword(e.target.value)}
            id="exampleFormControlInput2"
          />

          <button
            type="button"
            class="btn btn-success medium"
            style={{ marginTop: "20px" }}
            onClick={()=>LoginHandler()}
          >
            Submit
          </button>
        </div>
      </>
    );
  },[LoginEmail,LoginPassword]);
  return (
    <div>
      <Model name={"LoginModel"} body={renderLoginBodyElements} />
    </div>
  );
};

export default Login;
