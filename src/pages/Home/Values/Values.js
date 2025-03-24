import React, { useEffect, useRef, useState } from "react";
import "./values.scss";
import St1 from "../../../assets/images/college.webp";
import St2 from "../../../assets/images/eyfs4.webp";
import St3 from "../../../assets/images/primary.webp";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import Logo from "../../../assets/images/logo.jpeg";
import { GoDotFill } from "react-icons/go";
import { LogoAnime } from "../../../components/LogoAnime/LogoAnime";

export const Values = () => {
  const [inViewHeading, setInViewHeading] = useState(true);
  const [inViewImage, setInViewImage] = useState(true); // New state for image animation

  const [activeIndex, setActiveIndex2] = useState(1);
  const headingRef = useRef(null);

  const handleClick2 = (index) => {
    setActiveIndex2(index);
    setInViewHeading(false); // Reset animation state
    setInViewImage(false);

    setTimeout(() => {
      setInViewHeading(true);
      setInViewImage(true);
    }, 100);
  };

  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  const checkActive2 = (index, className) =>
    activeIndex === index ? className : "";

  return (
    <>
      <div className="business-pricing-tab col-md-12">
        <center>
          <div className="col-md-6">
            <LogoAnime />

            <h1>
              Learning that is as <span>joyful</span> as it is{" "}
              <span>challenging</span>
            </h1>
          </div>
        </center>
        <div className="offset-md-2 divi-intro">
          <p>
            <span>
              <GoDotFill />
            </span>
            THREE DIVISIONS - ONE COMMUNITY
            <span>
              <GoDotFill />
            </span>
          </p>
        </div>
        <div className="tabs offset-md-2">
          <button
            className={`tab eyfs ${checkActive2(1, "active2")}`}
            onClick={() => handleClick2(1)}
          >
            OVERVIEW
          </button>
          <button
            className={`tab pri ${checkActive2(2, "active2")}`}
            onClick={() => handleClick2(2)}
            style={{ marginLeft: "20px" }}
          >
            <small>age:6-11 yrs</small> <br />
            JUNIOR SECONDARY
          </button>
          <button
            className={`tab sec ${checkActive2(3, "active2")}`}
            onClick={() => handleClick2(3)}
            style={{ marginLeft: "20px" }}
          >
            <small>age:12-17 yrs</small>
            <br />
            SENIOR SECONDARY
          </button>
        </div>
        <div className="panels col-md-8 offset-md-2">
          <div className={`panel ${checkActive(1, "active2")}`}>
            <div className="d-flex">
              <div
                className="col-md-7 col-10"
                style={{
                  transform: inViewImage
                    ? "translateY(0)"
                    : "translateY(-100px)", // Slide down from top
                  opacity: inViewImage ? 1 : 0,
                  transition: "transform 1s ease, opacity 1s ease",
                }}
              >
                <img src={St2} width="100%" />
              </div>
              <div
                className="col-md-5 category-details col-10"
                ref={headingRef}
              >
                <div
                  style={{
                    transform: inViewHeading
                      ? "translateX(0)"
                      : "translateX(100px)",
                    opacity: inViewHeading ? 1 : 0,
                    transition: "transform 1s ease, opacity 1s ease",
                  }}
                >
                  {" "}
                  <h2>EYFS</h2>
                  <p>
                    EYFS students enter a world of choice, from their curricular
                    pursuits to their extra-curricular interests. By building
                    relationships, learning balance, and embracing challenge,
                    they emerge ready to find success beyond TAS.
                  </p>
                  <Link>
                    Explore More
                    <div className="cat-link">
                      <center>
                        <FaArrowRight className="icon" />
                      </center>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={`panel ${checkActive(2, "active2")}`}>
            <div className="d-flex">
              <div
                className="col-md-7 col-10"
                style={{
                  transform: inViewImage
                    ? "translateY(0)"
                    : "translateY(-100px)", // Slide down from top
                  opacity: inViewImage ? 1 : 0,
                  transition: "transform 1s ease, opacity 1s ease",
                }}
              >
                <img src={St3} width="100%" />
              </div>
              <div
                className="col-md-5 category-details col-10"
                ref={headingRef}
              >
                <div
                  style={{
                    transform: inViewHeading
                      ? "translateX(0)"
                      : "translateX(100px)",
                    opacity: inViewHeading ? 1 : 0,
                    transition: "transform 1s ease, opacity 1s ease",
                  }}
                >
                  {" "}
                  <h2>Primary School</h2>
                  <p>
                    Upper School students enter a world of choice, from their
                    curricular pursuits to their extra-curricular interests. By
                    building relationships, learning balance, and embracing
                    challenge, they emerge ready to find success beyond TAS.
                  </p>
                  <Link>
                    Explore More
                    <div className="cat-link">
                      <center>
                        <FaArrowRight className="icon" />
                      </center>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={`panel ${checkActive(3, "active2")}`}>
            <div className="d-flex">
              <div
                className="col-md-7 col-10"
                style={{
                  transform: inViewImage
                    ? "translateY(0)"
                    : "translateY(-100px)", // Slide down from top
                  opacity: inViewImage ? 1 : 0,
                  transition: "transform 1s ease, opacity 1s ease",
                }}
              >
                <img src={St1} width="100%" />
              </div>
              <div
                className="col-md-5 category-details col-10"
                ref={headingRef}
              >
                <div
                  style={{
                    transform: inViewHeading
                      ? "translateX(0)"
                      : "translateX(100px)",
                    opacity: inViewHeading ? 1 : 0,
                    transition: "transform 1s ease, opacity 1s ease",
                  }}
                >
                  {" "}
                  <h2>Upper School</h2>
                  <p>
                    Upper School students enter a world of choice, from their
                    curricular pursuits to their extra-curricular interests. By
                    building relationships, learning balance, and embracing
                    challenge, they emerge ready to find success beyond TAS.
                  </p>
                  <Link>
                    Explore More
                    <div className="cat-link">
                      <center>
                        <FaArrowRight className="icon" />
                      </center>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
