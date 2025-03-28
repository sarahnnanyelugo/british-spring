import React from "react";
import { Facilities } from "../../../components/Facilities/Facilities";
import { LogoAnime } from "../../../components/LogoAnime/LogoAnime";
import "./facilities.scss";
export const OurFacilities = () => {
  return (
    <div className="facilities-page">
      <div className="banner"></div>
      <div className="col-md-8 offset-md-2 d-flex mt-5">
        <hr className="col-6" />
        <LogoAnime />
        <hr className="col-6" />
      </div>{" "}
      <div className="col-md-12">
        <Facilities />
      </div>
    </div>
  );
};
