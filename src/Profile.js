import React, { useCallback, useEffect, useMemo, useState } from "react";
import 'react-tooltip/dist/react-tooltip.css'
import Model from "./Model";
import { modellogin, modelprofile,rgsdata ,masteruserinfoforprofile,prfinfo,profileinfomaster,alllogindata} from "./Modelrecoil";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Tooltip } from 'react-tooltip'
import Tablehoc from "./Tablehoc";
const Profile = () => {
  const [Alltablevalues,setAlltablevalues] = useRecoilState(masteruserinfoforprofile);
  const [Allrgsdata,setALlrgsdata] = useRecoilState(rgsdata);
   const [profileinfo,setprofileinfo] = useRecoilState(prfinfo);
  const setlo = useSetRecoilState(modellogin);
  const setpo = useSetRecoilState(modelprofile);
  const valmasterinfo = useRecoilState(profileinfomaster); 
  const valcredidanteial = useRecoilState(alllogindata); 
  const tableHader = ["Email","MobileNo","Name","Password","login&Rg"];
  let lgrg = tableHader.includes("login&Rg");
  // console.log("lgrg",Alltablevalues);
  const btn =useMemo(()=>{
    return (
      <>
      <button className="rgsymbol">RG</button>
      </>
    )
  },[])   
  const mapss = () =>{
      if(valmasterinfo[0]===true && lgrg ===true){
        return [ Alltablevalues ,btn ];
      }else{
        return [valcredidanteial[0], btn];
      }
  }

  const profile = useMemo(() => {
    return (
      <>
          <div className="aboutbody">
          <div>
            <h3
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontStyle: "initial",
                color: "cadetblue",
              }}
            >
              Profile
            </h3>
          <Tablehoc mapss={mapss} tableHader={tableHader}/>
          </div>
        </div>
      </>
    );
  }, []);
  return (
    <>
      <Model name={"ProfileModel"} body={profile} />
    </>
  );
};

export default Profile;
