import React from "react";
import "./footer.scss";
import Logo from "../../assets/images/app-logo.png";
import Cam from "../../assets/images/cambr.png";
import Acs from "../../assets/images/acs.png";
import Bc from "../../assets/images/bc.png";
import Edu from "../../assets/images/edu.png";
import Hex from "../../assets/images/tech-hub-logo.jpeg";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsYoutube } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

import Prefooter from "./Prefooter";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="footer-body">
      {" "}
      <Prefooter />
      <footer>
        <div className="footer-inner">
          <svg
            id="wave"
            style={{ transform: "rotate(0deg)", transition: "0.3s" }}
            viewBox="0 0 1440 270"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stop-color="#252C6A" offset="0%"></stop>
                <stop stop-color="#252C6A" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              style={{ transform: "translate(0, 0px)", opacity: 1 }}
              fill="url(#sw-gradient-0)"
              d="M0,162L80,171C160,180,320,198,480,171C640,144,800,72,960,67.5C1120,63,1280,126,1440,162C1600,198,1760,207,1920,198C2080,189,2240,162,2400,157.5C2560,153,2720,171,2880,184.5C3040,198,3200,207,3360,216C3520,225,3680,234,3840,238.5C4000,243,4160,243,4320,202.5C4480,162,4640,81,4800,58.5C4960,36,5120,72,5280,99C5440,126,5600,144,5760,144C5920,144,6080,126,6240,126C6400,126,6560,144,6720,157.5C6880,171,7040,180,7200,166.5C7360,153,7520,117,7680,99C7840,81,8000,81,8160,90C8320,99,8480,117,8640,112.5C8800,108,8960,81,9120,90C9280,99,9440,144,9600,157.5C9760,171,9920,153,10080,144C10240,135,10400,135,10560,139.5C10720,144,10880,153,11040,144C11200,135,11360,108,11440,94.5L11520,81L11520,270L11440,270C11360,270,11200,270,11040,270C10880,270,10720,270,10560,270C10400,270,10240,270,10080,270C9920,270,9760,270,9600,270C9440,270,9280,270,9120,270C8960,270,8800,270,8640,270C8480,270,8320,270,8160,270C8000,270,7840,270,7680,270C7520,270,7360,270,7200,270C7040,270,6880,270,6720,270C6560,270,6400,270,6240,270C6080,270,5920,270,5760,270C5600,270,5440,270,5280,270C5120,270,4960,270,4800,270C4640,270,4480,270,4320,270C4160,270,4000,270,3840,270C3680,270,3520,270,3360,270C3200,270,3040,270,2880,270C2720,270,2560,270,2400,270C2240,270,2080,270,1920,270C1760,270,1600,270,1440,270C1280,270,1120,270,960,270C800,270,640,270,480,270C320,270,160,270,80,270L0,270Z"
            ></path>
          </svg>
          <div className="footer-links">
            <div className="col-md-8 offset-md-2 d-md-flex">
              <div className="col-md-4">
                <img src={Logo} className="footer-logo" />
                <p>
                  Taipei American School (TAS) is one of Asia's top independent
                  schools providing a high-quality, well-rounded American-based
                  education from PreK to Grade 12 offering both the IB Diploma
                  and AP Courses.
                </p>
                <div className="partners d-flex">
                  {" "}
                  <img src={Cam} width="80px" />
                  <img src={Acs} width="70px" />
                  <img src={Bc} width="70px" />
                  <img src={Edu} width="70px" />
                </div>
              </div>
              <div className="col-md-8 ">
                <div className="d-flex">
                  {" "}
                  <div className="col-md-4 offset-md-1">
                    <h5>Contact Us</h5>
                    <p>
                      1, British Spring Estate Road, Nkwelle Awka, Anambra State
                    </p>
                    <p>
                      Springfield Academy, 30 New Nkisi Road, GRA Onitsha
                      Anambra state
                    </p>
                    <p>+234703286144</p>
                    <p>+2347032861442</p>
                  </div>
                  <div className="col-md-5 offset-md-2 col-5 offset-1">
                    <h5>Useful Links</h5>
                    <ul className="list-unstyled">
                      <li>
                        <Link to={"/"}>Mission & Values</Link>
                      </li>{" "}
                      <li>
                        <Link to={"/"}>Our History</Link>
                      </li>{" "}
                      <li>
                        <Link to={"/"}>School Leadership</Link>
                      </li>{" "}
                      <li>
                        <Link to={"/"}>How to Apply</Link>
                      </li>{" "}
                      <li>
                        <Link to={"/"}>News</Link>
                      </li>
                    </ul>
                    <ol className="list-unstyled list-inline socials">
                      <li className="list-inline-item">
                        <Link to={"/"}>
                          <FaFacebook />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to={"/"}>
                          <GrInstagram />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to={"/"}>
                          <FaXTwitter />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to={"/"}>
                          <BsYoutube />
                        </Link>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className=" offset-md-2  offset-md-4 d-flex sign-off">
                  {" "}
                  <Link to={"/"}>
                    {" "}
                    Powered by <img src={Hex} width="100px" />
                  </Link>
                  <Link to={"/"}>Privacy Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
