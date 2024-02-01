import React, { useCallback } from "react";
import { Tooltip } from "react-tooltip";
import {
  closebtn,
  modelabout,
  modelhome,
  modellogin,
  modelprofile,
  modelrg,
} from "./Modelrecoil";
import { useSetRecoilState } from "recoil";
const Model = ({ name, body }) => {
  const setclosel = useSetRecoilState(modellogin);
  const setcloser = useSetRecoilState(modelrg);
  const setclosea = useSetRecoilState(modelabout);
  const setclosep = useSetRecoilState(modelprofile);
  const setcloseh = useSetRecoilState(modelhome);
  const setcloseHanler = useCallback(() => {
    setclosel(false);
    setcloser(false);
    setclosep(false);
    setclosea(false);
    setcloseh(false);
  },[]);
  return (
    <>
    <Tooltip id="close-btn"/>
      <div className="modelof">  
        <div className="model">
          <div className="clsbtn">
            <button className="xbtn" data-tooltip-id="close-btn" data-tooltip-place="top" data-tooltip-content={"Close-Model"} onClick={() => setcloseHanler()}>
              ❌
            </button>
          </div>
          <div className="modelname">{name}</div>
          <div className="body">{body}</div>
          {/* <i class="fa-solid fa-bars"></i> */}
         

        </div>
      </div>
    </>
  );
};

export default Model;
