import React from "react";
import { LogoAnime } from "../../../components/LogoAnime/LogoAnime";
import "./who-we-are.scss";
import Img1 from "../../../assets/images/classSec.jpg";
import { Link } from "react-router-dom";
export const WhoWeAre = () => {
  return (
    <>
      <div className="who-we-are2">
        <div className="banner"></div>
        <div className="col-md-8 offset-md-2 d-flex mt-5">
          <hr className="col-6" />
          <LogoAnime />
          <hr className="col-6" />
        </div>
        <div className="col-md-8 offset-md-2 d-md-flex">
          <div className="col-md-6">
            <h1>About Us</h1>
            <p>
              <strong>
                British Spring offers a child-centered, hands-on approach to
                teaching and learning that’s unlike any other school in the
                region.
              </strong>
            </p>
            <p>
              When learning is fueled by each child’s innate creativity and
              capacity for wonder, education becomes a life-changing experience.
              Children who are encouraged to chart their own learning journeys
              as they explore the world around them grow into dynamic thinkers,
              creative collaborators, and motivated learners who follow their
              passions to remarkable futures.{" "}
            </p>
            <p>
              {" "}
              This is the cornerstone of the KLA Academy experience. Here,
              intentionally-designed learning studios support the different
              stages of child development from preschool through grade five,
              inviting students to create, ask questions, and grow into kind,
              empathetic, resilient citizens of the world.{" "}
            </p>
          </div>
          <div className="col-md-6 second-div">
            <img src={Img1} width="100%" />
          </div>
        </div>
        <div className="col-md-8 offset-md-2 d-md-flex education">
          <div className="col-md-6 exp">
            {/* <img src={Img1} width="100%" /> */}
          </div>
          <div className="col-md-6 ">
            <h4>This is Education, Experienced.</h4>
            <p>
              And it’s happening every day at British Spring College. We invite
              you to see what it’s like to learn and grow with us.{" "}
            </p>
            <Link to={"/"}>Take a Tour</Link>{" "}
            <Link to={"/contact"}>Contact Us</Link>
            <Link to={"/apply"}>Apply</Link>
          </div>
        </div>
      </div>
    </>
  );
};
