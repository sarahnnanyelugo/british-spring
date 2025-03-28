import React, { useState } from "react";
import "./overview.scss";
import Hero from "../../../assets/images/viewHero.png";
import Img1 from "../../../assets/images/classSec.jpg";
import { LogoAnime } from "../../../components/LogoAnime/LogoAnime";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

export const Overview = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <>
      <div className="overview">
        <div className="banner">
          <img src={Hero} width="100%" />
        </div>
        <div className="col-md-8 offset-md-2 d-flex mt-5">
          <hr className="col-6" />
          <LogoAnime />
          <hr className="col-6" />
        </div>
        <div className="col-md-8 offset-md-2 first-head">
          <div className="d-md-flex">
            <div className="col-md-6">
              <h1>Overview</h1>
              <h3>This is School, Reimagined.</h3>
              <p>
                <strong>
                  Amazing things happen when every school day is structured to
                  support the learning and growth of each student.
                </strong>
              </p>
              <p>
                New ideas come alive. Personalities and passions emerge. School
                becomes a place that helps children discover themselves and
                understand the world around them.
              </p>
              <p>
                For more than a decade, KLA has modeled this proven, beloved
                philosophy of teaching. Our pathway from preschool to grade five
                develops children into the dynamic thinkers, creative
                collaborators, and motivated learners the world needs.
              </p>
            </div>
            <div className="col-md-6 initial-img">
              <img src={Img1} width="100%" />
            </div>
          </div>

          <div className="others">
            <h4>Designed for the way children learn best</h4>
            <p>
              Our programs are rooted in the Reggio Emilia Approach, an
              educational framework that offers children endless possibilities
              and opportunities to be in charge of their own learning.
            </p>
            <div className="d-md-flex">
              <div className="col-md-6">
                <Carousel
                  activeIndex={activeIndex}
                  onSelect={handleSelect}
                  interval={3000}
                  controls={false}
                >
                  <Carousel.Item>
                    <div
                      style={{ padding: "50px" }}
                      className="overviews"
                    ></div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div
                      style={{ padding: "50px" }}
                      className="overviews2"
                    ></div>
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="col-md-8 writeup">
                <Carousel
                  activeIndex={activeIndex}
                  onSelect={handleSelect}
                  interval={3000}
                >
                  <Carousel.Item>
                    <p>
                      Our programs are rooted in the Reggio Emilia Approach, an
                      educational framework that offers children endless
                      possibilities and opportunities to be in charge of their
                      own learning.
                    </p>
                  </Carousel.Item>
                  <Carousel.Item>
                    <p>
                      Our programs are rooted in the Reggio Emilia Approach, an
                      educational framework that offers children endless
                      possibilities and opportunities to be in charge of their
                      own learning.
                    </p>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="col-md-8 offset-md-2 row row-cols-1 row-cols-lg-2 g-2 g-lg-5 first-head">
          <div className="col">
            <div className="overview-outer ">
              <div className="inner"></div>
              {/* <img src={Hero} width="100%" /> */}
              <div className="overview-overlay">
                <center>
                  <h4>Junior Secondary</h4>
                  <p>
                    New ideas come alive. Personalities and passions emerge.
                    School becomes a place that helps children discover
                    themselves and understand the world around them.
                  </p>{" "}
                  <Link to={"/junior"}>Learn More</Link>
                </center>
              </div>
            </div>
          </div>{" "}
          <div className="col">
            <div className="overview-outer ">
              <div className="inner"></div>
              {/* <img src={Hero} width="100%" /> */}
              <div className="overview-overlay">
                <center>
                  <h4>Senior Secondary</h4>
                  <p>
                    New ideas come alive. Personalities and passions emerge.
                    School becomes a place that helps children discover
                    themselves and understand the world around them.
                  </p>{" "}
                  <Link to={"/junior"}>Learn More</Link>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
