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
import { modelabout, modellogin, modelhome, modelprofile, modelrg,profilebtn,loginbtn,registrationbtn,displaybtn,Homebtn } from "./Modelrecoil";
import Home from "./Home";
function App() {
  const [loginmodel, setLoginmodel] = useRecoilState(modellogin);
  const [rgmodel, setRgmodel] = useRecoilState(modelrg);
  const [modelhomes, setmodelhomes] = useRecoilState(modelhome);
  const [about, setAbout] = useRecoilState(modelabout);
  const [profile, setProfile] = useRecoilState(modelprofile);
  const [profilebtnshow, setProfilebtnshow] = useRecoilState(profilebtn);
  const [loginbtnshow, setloginbtnshow] = useRecoilState(loginbtn);
  const [displaybtnshow, setdisplaybtnnshow] = useRecoilState(displaybtn);
  const [Homebtnshow, setHomebtnshow] = useRecoilState(Homebtn);
  const [registrationbtnshow, setregistrationbtnshow] = useRecoilState(registrationbtn);
  const [hamberger, setHamberger] = useState(false);
  const [hambergerIcons, setHambergerIcons] = useState(true);
// console.log("profilebtnshow",registrationbtnshow);

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
  const homeHandler = useCallback(()=>{
         setmodelhomes(true);
  },[])
  const displayHandler = useCallback(()=>{

  },[])

  return (
    <div className="App">
      <div className="mainbtn">
      { loginbtnshow && <button onClick={() => loginHandler()}>Login</button>}
       { registrationbtnshow && <button  onClick={() => rgHandler()}>Registration</button>}
      { Homebtnshow && <button onClick={()=>homeHandler()}>Home</button>}
      <button onClick={()=>aboutHandler()}>About</button>
      { displaybtnshow && <button onClick={()=>displayHandler()}>display</button>}
      { profilebtnshow && <button onClick={()=>profileHandler()}>Profile</button> }
      </div>
      {loginmodel && <Login/>}
      {rgmodel&& <Registrations/>}
      {about&& <About/>}
      {modelhomes&& <Home/>}
      {profile&& <Profile/>}
      {hamberger&&<Hambegers/>}
      <div className="hamberger">
      {hambergerIcons?<GiHamburgerMenu  onClick={()=>HambergerHandler()}/>:<IoCloseSharp onClick={()=>{setHamberger(!hamberger);setHambergerIcons(true)}}/>}
      </div>
    </div>
  );
}

export default App;
