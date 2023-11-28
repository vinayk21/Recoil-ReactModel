import { useCallback, useMemo, useState } from "react";
import "./App.css";
import Model from "./Model";
import Login from "./Login";
import Registrations from "./Registrations";
import About from "./About";
import Hambegers from "./Hambegers";
import Profile from "./Profile";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

import {useRecoilState}  from "recoil";
import { modelabout, modellogin, modelprofile, modelrg } from "./Modelrecoil";
function App() {
  const [loginmodel, setLoginmodel] = useRecoilState(modellogin);
  const [rgmodel, setRgmodel] = useRecoilState(modelrg);
  const [about, setAbout] = useRecoilState(modelabout);
  const [profile, setProfile] = useRecoilState(modelprofile);
  const [hamberger, setHamberger] = useState(false);
  const [hambergerIcons, setHambergerIcons] = useState(true);


  const loginHandler = useCallback(() => {
    setLoginmodel(true);
  },[]);
  const rgHandler =useCallback(() =>{
    setRgmodel(true)
  },[])
  const aboutHandler = useCallback(() =>{
    setAbout(true)
  },[])
  const profileHandler = useCallback(() =>{
    setProfile(true)
  },[])
  const HambergerHandler = useCallback(() =>{
    setHamberger(!hamberger)
    setHambergerIcons(false)
  },[])
  // console.log("loginmode",loginmodel);

  return (
    <div className="App">
      <div className="mainbtn">
      <button onClick={() => loginHandler()}>Login</button>
      <button  onClick={() => rgHandler()}>Registration</button>
      <button onClick={()=>aboutHandler()}>About</button>
      <button onClick={()=>profileHandler()}>Profile</button>
      </div>
      {loginmodel && <Login/>}
      {rgmodel&& <Registrations/>}
      {about&& <About/>}
      {profile&& <Profile/>}
      {hamberger&&<Hambegers/>}
      <div className="hamberger">
      {hambergerIcons?<GiHamburgerMenu onClick={()=>HambergerHandler()}/>:<IoCloseSharp onClick={()=>{setHamberger(!hamberger);setHambergerIcons(true)}}/>}
      </div>
    </div>
  );
}

export default App;
