import React from "react";
import { SectionHeading } from "../../../components/SectionHeading/SectionHeading";
import "./gallery.scss";
import { TbHandFingerDown } from "react-icons/tb";
import Hero from "../../../assets/images/happy-students.jpeg";
import Img from "../../../assets/images/academicHero.jpg";
import Img2 from "../../../assets/images/classSec.jpg";
import Img3 from "../../../assets/images/lab.jpg";
import Img4 from "../../../assets/images/welcome-hero.jpg";
import Img5 from "../../../assets/images/court.jpg";
import Img6 from "../../../assets/images/boarding.jpg";
import Img7 from "../../../assets/images/lib.jpg";

export const Gallery = () => {
  return (
    <>
      <div className="gallery-div">
        <div className="banner">
          <div class="gallery">
            <span style={{ "--i": 1 }}>
              <img src={Hero} alt="" />
            </span>
            <span style={{ "--i": 2 }}>
              <img src={Img} alt="" />
            </span>
            <span style={{ "--i": 3 }}>
              <img src={Img2} alt="" />
            </span>
            <span style={{ "--i": 4 }}>
              <img src={Img3} alt="" />
            </span>
            <span style={{ "--i": 5 }}>
              <img src={Img4} alt="" />
            </span>
            <span style={{ "--i": 6 }}>
              <img src={Img7} alt="" />
            </span>
            <span style={{ "--i": 7 }}>
              <img src={Img5} alt="" />
            </span>
            <span style={{ "--i": 8 }}>
              <img src={Img6} alt="" />
            </span>
          </div>
          <br />
          <br />
          <SectionHeading
            text1="Welcome to our"
            text2="gallery"
            color1="#fff"
          />
          <a href="#gallery-photos">
            Jump right in{" "}
            <span>
              <TbHandFingerDown />
            </span>
          </a>
        </div>
        <div className="col-md-10 offset-md-1" id="gallery-photos">
          <p>
            <img src="https://loremflickr.com/320/200" />
            <img src="https://loremflickr.com/321/200" />
            <img src="https://loremflickr.com/319/200" />
            <img src="https://loremflickr.com/323/200" />
            <img src="https://loremflickr.com/322/200" />
          </p>

          <p>
            <img src="https://loremflickr.com/320/200" />
            <img src="https://loremflickr.com/321/200" />
            <img src="https://loremflickr.com/319/200" />
          </p>

          <p>
            <img src="https://loremflickr.com/320/200" />
            <img src="https://loremflickr.com/321/200" />
            <img src="https://loremflickr.com/319/200" />
            <img src="https://loremflickr.com/323/200" />
          </p>
        </div>
      </div>
    </>
  );
};
