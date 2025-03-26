import React from "react";
import Hero from "../../../assets/images/landscape.webp";
import Founder from "../../../assets/images/founder.jpg";
import { LogoAnime } from "../../../components/LogoAnime/LogoAnime";
import Accordion from "react-bootstrap/Accordion";
import Students from "../../../assets/images/happy-students.jpeg";

import "./history.scss";
import { Link } from "react-router-dom";
export const History = () => {
  return (
    <>
      <div className="history-div col-md-12">
        <div className="banner">
          {" "}
          <img src={Hero} width="100%" />
        </div>
        <center>
          <h1>OUR HISTORY</h1>
        </center>
        <div className="col-md-6 offset-md-3 d-flex">
          <hr className="col-md-6" />
          <LogoAnime />
          <hr className="col-md-6" />
        </div>
        <div className="col-md-10 offset-md-1 history-body">
          <h2>What is the history of British Spring?</h2>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h6>The Bristish Spring History- Overview</h6>
              </Accordion.Header>
              <Accordion.Body>
                <div className="d-flex">
                  <p className="col-md-7 mt-5">
                    {" "}
                    was established in 1875 by Sir Reginald Ashford, a visionary
                    British educator who sought to create an institution that
                    blended classical education with modern scientific thought.
                    Located in a serene countryside setting, the college was
                    initially a small boarding school catering to the children
                    of British colonial administrators and local elites. With a
                    strong emphasis on discipline, literature, and the sciences,
                    British Spring quickly gained a reputation for academic
                    excellence.
                  </p>{" "}
                  <div className="col-md-5">
                    {" "}
                    <img src={Students} width="100%" />
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h6>The Bristish Spring History- by Founder John Doe</h6>
              </Accordion.Header>
              <Accordion.Body>
                <div className="col-md-5">
                  {" "}
                  <img src={Founder} width="100%" />
                  <p>
                    <em>
                      John Doe, founder of the school, wrote this story of the
                      early years of the school some time after her retirement
                      in 1991.
                    </em>
                  </p>
                </div>
                <p className="mt-5">
                  <strong>
                    {" "}
                    Founding and Early Years (1875 – 1900) British Spring
                    College
                  </strong>
                  was established in 1875 by Sir Reginald Ashford, a visionary
                  British educator who sought to create an institution that
                  blended classical education with modern scientific thought.
                  Located in a serene countryside setting, the college was
                  initially a small boarding school catering to the children of
                  British colonial administrators and local elites. With a
                  strong emphasis on discipline, literature, and the sciences,
                  British Spring quickly gained a reputation for academic
                  excellence.
                </p>
                <div className="d-md-flex">
                  {" "}
                  <p className="col-md-8 mt-5">
                    {" "}
                    <strong>
                      {" "}
                      Expansion and the Golden Age (1900 – 1950){" "}
                    </strong>
                    By the early 20th century, British Spring College expanded
                    its curriculum to include engineering, commerce, and the
                    arts. The school’s infrastructure grew as well, with the
                    construction of the iconic Ashford Hall, a grand
                    Victorian-style building that housed lecture rooms, a
                    library, and a chapel. During the interwar years, the
                    college saw a surge in international students, further
                    enriching its academic and cultural environment.
                  </p>
                  <div className="col-md-4">
                    {" "}
                    <img src={Hero} width="100%" />
                  </div>
                </div>
                <p>
                  {" "}
                  <strong>
                    Post-War Innovation and Modernization (1950 – 1990)
                  </strong>
                  Following World War II, British Spring College embraced a new
                  educational philosophy, integrating progressive teaching
                  methods and research-based learning. The institution
                  established partnerships with leading universities across
                  Europe and introduced scholarships for underprivileged
                  students. The 1970s saw the introduction of advanced
                  scientific laboratories, a cutting-edge technology center, and
                  the first female students admitted into what was once a
                  male-dominated school.
                </p>
                <p>
                  <strong>Contemporary Era (1990 – Present)</strong>
                  Entering the 21st century, British Spring College has
                  solidified its position as a top-tier academic institution.
                  With state-of-the-art facilities, a diverse student body, and
                  a faculty comprising world-class educators, the college
                  continues to uphold its tradition of academic excellence while
                  adapting to modern educational challenges. Its alumni include
                  prominent politicians, entrepreneurs, and thought leaders
                  across various fields. Today, British Spring College remains a
                  beacon of knowledge, fostering innovation and critical
                  thinking in students while staying true to its rich legacy of
                  discipline and excellence.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>{" "}
        <div className="decades mt-5 offset-md-1">
          <h5 style={{ color: "#3C68AF" }}>
            Twenty Years of Impact: The British Spring Timeline
          </h5>
          <p className="col-md-6">
            Celebrate with us as we trace the evolution of British Spring
            College over the past 60 years, marking unforgettable moments that
            have shaped our vibrant, international community.{" "}
          </p>

          <div class="main_box">
            <div class="img img1">
              <p>1990</p>
            </div>
            <div class="img img2">
              <p>1995</p>
            </div>
            <div class="img img3">
              <p>2000</p>
            </div>
            <div class="img img6">
              <p>2005</p>
            </div>{" "}
            <div class="img img7">
              <p>2010</p>
            </div>{" "}
            <div class="img img8">
              <p>2015</p>
            </div>
            <div class="img img9">
              <p>2020</p>
            </div>
            <div class="img img10">
              <p>2025</p>
            </div>
          </div>
        </div>
        <div className="mt-5 impact">
          <center>
            {" "}
            <Link to={"/testimonials"}>
              Hear from those whose lives we have impacted over the years
            </Link>
          </center>
        </div>
      </div>
    </>
  );
};
