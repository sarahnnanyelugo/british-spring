import React from "react";
import Img1 from "../../../assets/images/lib.jpg";
import Img2 from "../../../assets/images/lab.jpg";
import Img3 from "../../../assets/images/court.jpg";
import Img4 from "../../../assets/images/casual.jpg";
import Hero from "../../../assets/images/lib.jpg";
import { LogoAnime } from "../../../components/LogoAnime/LogoAnime";

import "./vision.scss";
export const VisionMission = () => {
  return (
    <>
      <div className="vision-div">
        <div className="banner">
          <img src={Hero} width="100%" />
        </div>
        <div className="col-md-8 offset-md-2" style={{ marginTop: "80px" }}>
          <div className="d-flex">
            <hr className="col-md-6" />
            <LogoAnime />
            <hr className="col-md-6" />
          </div>
          <h1>Our Vision and Values</h1>
          <p>
            The Birmingham Community Charter High School is a thriving,
            collaborative community that provides an academically challenging,
            personalized, and supportive environment that prepares individual
            students to be the best version of themselves and pursue their post
            high school academic and career goals.
          </p>
          <div className="d-md-flex">
            <div className="col-md-4" style={{ padding: "10px" }}>
              <div className="cream">
                <h4>Integrity </h4>
                <p>Moral and good character are built in us</p>
              </div>
            </div>
            <div className="col-md-4" style={{ padding: "10px" }}>
              <img src={Img1} width="100%" />
              <div className="long">
                <h3>Respect </h3>
                <p>– Civility and high regards for one another are focal.</p>
              </div>
            </div>
            <div className="col-md-4" style={{ padding: "10px" }}>
              <div className="cream">
                <h3>Fairness – </h3>
                <p>Just and equal treatment defines us.</p>
              </div>
            </div>
          </div>{" "}
          <div className="d-md-flex">
            <div className="col-md-4 move" style={{ padding: "10px" }}>
              {" "}
              <img src={Img2} width="100%" />
              <div className="cream">
                <h3>Trustworthy –</h3>
                <p> Transparency and dependability drive our goals.</p>
              </div>
            </div>
            <div className="col-md-4 mid" style={{ padding: "10px" }}>
              <img src={Img1} width="100%" />
              <div className="cream">
                <h3>Accountability</h3>
                <p>
                  – Ethics and willingness to be judged on performance guide our
                  conduct.
                </p>
              </div>
            </div>
            <div className="col-md-4 move" style={{ padding: "10px" }}>
              {" "}
              <img src={Img3} width="100%" />
              <div className="cream">
                <h3>Leadership</h3>
                <p>
                  – Our goals, future, and motivation are with a clear vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
