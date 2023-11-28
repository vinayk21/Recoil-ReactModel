import React, { useCallback, useMemo } from "react";
import Model from "./Model";
import { modellogin, modelprofile } from "./Modelrecoil";
import { useSetRecoilState } from "recoil";

const Profile = () => {

  const setlo = useSetRecoilState(modellogin);
  const setpo = useSetRecoilState(modelprofile);
  const openLoginMOdel = useCallback(() => {
    setpo(false);
    setlo(true);
  }, []);
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
            <p>
              {" "}
              Most people choose to include their full name, including surname,
              at the start of their bio. However, if your website URL or
              personal brand is already your full name, you can shorten it to
              just your first name. Your position: your current position and the
              tasks you're responsible for should get a mention
            </p>
          </div>
          <div className="lbtn">
            <button className="lmodellogin" onClick={() => openLoginMOdel()}>
              OpenLoginModel
            </button>
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
