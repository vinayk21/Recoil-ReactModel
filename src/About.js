import React, { useMemo } from "react";
import Model from "./Model";

const About = () => {
  const about = useMemo(() => {
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
              Your Mission
            </h3>
            <p>
              {" "}
              You don’t need to outright say, “our mission is ____,” but you
              should convey the mission of your business in your About Us copy.
              This is key for attracting talent, as well as leads that have
              Corporate Social Responsibility (CSR) goals.
            </p>
          </div>
        </div>
      </>
    );
  },[]);
  return (
    <>
      <Model name={"AboutModel"} body={about} />
    </>
  );
};

export default About;
