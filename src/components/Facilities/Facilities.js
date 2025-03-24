import React from "react";
import { LogoAnime } from "../LogoAnime/LogoAnime";
import "./facilities.scss";
import { GoDotFill } from "react-icons/go";
import Swim from "../../assets/images/swim.webp";
import Libs from "../../assets/images/libs.webp";
import Lib from "../../assets/images/lib.webp";
import Sci from "../../assets/images/sci.webp";
import Scis from "../../assets/images/scis.webp";
import Hall from "../../assets/images/hall.webp";
import Cafe from "../../assets/images/cafe.webp";
import Class from "../../assets/images/class.webp";
import Spts from "../../assets/images/spts.webp";
import Comps from "../../assets/images/comps.webp";
import Compss from "../../assets/images/compss.webp";
import Comp from "../../assets/images/comp.webp";
import HotSpot from "./hot-spot";
import Carousel from "react-bootstrap/Carousel";

export const Facilities = () => {
  return (
    <div className="facilities-div">
      <center>
        {" "}
        <LogoAnime />
        <div className="col-md-5">
          <h1>
            The British-Spring <span>Experience</span>
          </h1>
        </div>
      </center>

      <div className="col-md-8 offset-md-2">
        <p>
          <span>
            <GoDotFill />
          </span>
          ONE GOAL - DIFFERENT FACILITIES
          <span>
            <GoDotFill />
          </span>
        </p>

        <Carousel>
          <Carousel.Item>
            {" "}
            <div className="fac-div">
              <div className="col-md-12 facilities-container"></div>
              <div className="fac-overlay">
                <div className="offset-md-10">
                  <HotSpot
                    img={Compss}
                    title=" A Space for Innovation and Discovery
"
                    body="Equipped with cutting-edge computers and learning tools, our computer lab encourages students to explore the digital world. From programming to design, it offers an engaging environment for developing essential 21st-century skills.
"
                  />
                </div>
                <HotSpot
                  img={Comps}
                  title=" Empowering Digital Learning"
                  body="Our modern computer lab is equipped with high-performance computers, high-speed internet, and the latest software. Students gain hands-on experience in coding, research, and digital creativity in a well-structured learning environment. The lab fosters innovation, critical thinking, and technological proficiency for the future."
                />

                <div className="offset-md-6" style={{ marginTop: "100px" }}>
                  <HotSpot
                    img={Comp}
                    title=" Technology at Your Fingertips
"
                    body="Our advanced computer lab provides students with access to modern technology, fostering digital literacy and problem-solving skills. With high-speed internet and the latest software, it’s the perfect space for research, coding, and interactive learning."
                  />
                </div>
                <h3>Computer Room: Cutting-Edge Technology for Learning</h3>
              </div>
            </div>
          </Carousel.Item>{" "}
          <Carousel.Item>
            {" "}
            <div className="fac-div">
              <div className="col-md-12 facilities-container2"></div>
              <div className="fac-overlay">
                <div className="offset-md-10">
                  <HotSpot
                    img={Compss}
                    title=" A Space for Innovation and Discovery
"
                    body="Equipped with cutting-edge computers and learning tools, our computer lab encourages students to explore the digital world. From programming to design, it offers an engaging environment for developing essential 21st-century skills.
"
                  />
                </div>
                <HotSpot
                  img={Comps}
                  title=" Empowering Digital Learning"
                  body="Our modern computer lab is equipped with high-performance computers, high-speed internet, and the latest software. Students gain hands-on experience in coding, research, and digital creativity in a well-structured learning environment. The lab fosters innovation, critical thinking, and technological proficiency for the future."
                />

                <div className="offset-md-6" style={{ marginTop: "100px" }}>
                  <HotSpot
                    img={Comp}
                    title=" Technology at Your Fingertips
"
                    body="Our advanced computer lab provides students with access to modern technology, fostering digital literacy and problem-solving skills. With high-speed internet and the latest software, it’s the perfect space for research, coding, and interactive learning."
                  />
                </div>
                <h3>Computer Room: Cutting-Edge Technology for Learning</h3>
              </div>
            </div>
          </Carousel.Item>{" "}
          <Carousel.Item>
            {" "}
            <div className="fac-div">
              <div className="col-md-12 facilities-container3"></div>
              <div className="fac-overlay">
                <div className="offset-md-10">
                  <HotSpot
                    img={Compss}
                    title=" A Space for Innovation and Discovery
"
                    body="Equipped with cutting-edge computers and learning tools, our computer lab encourages students to explore the digital world. From programming to design, it offers an engaging environment for developing essential 21st-century skills.
"
                  />
                </div>
                <HotSpot
                  img={Comps}
                  title=" Empowering Digital Learning"
                  body="Our modern computer lab is equipped with high-performance computers, high-speed internet, and the latest software. Students gain hands-on experience in coding, research, and digital creativity in a well-structured learning environment. The lab fosters innovation, critical thinking, and technological proficiency for the future."
                />

                <div className="offset-md-6" style={{ marginTop: "100px" }}>
                  <HotSpot
                    img={Comp}
                    title=" Technology at Your Fingertips
"
                    body="Our advanced computer lab provides students with access to modern technology, fostering digital literacy and problem-solving skills. With high-speed internet and the latest software, it’s the perfect space for research, coding, and interactive learning."
                  />
                </div>
                <h3>Computer Room: Cutting-Edge Technology for Learning</h3>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};
