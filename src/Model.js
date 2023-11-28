import React, { useCallback } from "react";

import {
  closebtn,
  modelabout,
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
  const setcloseHanler = useCallback(() => {
    setclosel(false);
    setcloser(false);
    setclosep(false);
    setclosea(false);
  },[]);
  return (
    <>
      <div className="modelof">
        <div className="model">
          <div className="clsbtn">
            <button className="xbtn" onClick={() => setcloseHanler()}>
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
