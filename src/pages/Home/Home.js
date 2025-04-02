import React, { useEffect, useRef, useState } from "react";
import MainVid from "../../assets/images/main-vid.mp4";
import "./home.scss";
import Logo from "../../assets/images/app-logo.png";
import St1 from "../../assets/images/primary.webp";
import St2 from "../../assets/images/eyfs4.webp";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { Values } from "./Values/Values";
import { LogoAnime } from "../../components/LogoAnime/LogoAnime";
import { Facilities } from "../../components/Facilities/Facilities";
import Prefooter from "../../components/Footer/Prefooter";
import { motion, useInView } from "framer-motion";
import OurWords from "./OurWords/OurWords";
import { MdGroups } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { TbRulerMeasure } from "react-icons/tb";
import { FaChalkboardTeacher } from "react-icons/fa";
import CountUp from "react-countup";
import News from "../../components/News/News";
import { Blog } from "../../components/Blog/Blog";
import { latestNews } from "../../TestData/newsData";
// import { latestNew } from "../../TestData";

// import Logo from "../../assets/images/logo-head.png";
export const Home = () => {
  const [state, setState] = useState({
    query: "",

    list2: latestNews.filter((newsItem) => {
      return newsItem.id <= 4;
    }),
  });
  const writeUpRef = useRef(null);
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const [inViewText, setInViewText] = useState(false);
  const textRef = useRef(null);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  const textVariants = (delay) => ({
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.2, delay, ease: "easeOut" }, // Slower and smoother
    },
  });
  useEffect(() => {
    const handleScroll = () => {
      if (!writeUpRef.current) return;

      const rect = writeUpRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Check if the div has moved upwards
      if (rect.top < viewportHeight * 0.5) {
        setIsScrolledUp(true);
      } else {
        setIsScrolledUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          setInViewText(true);
        } else {
          setInViewText(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load to check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="col-md-12 home-outer">
        <video
          className="video"
          width="100%"
          autoPlay
          loop
          muted
          playsInline
          controls
          src={MainVid}
        ></video>
      </div>
      <div className="home-overlay">
        <center>
          <div className="col-md-4 writeup" ref={writeUpRef}>
            {" "}
            <h1 className={isScrolledUp ? "scrolled-up" : "headed"}>
              <span className="span2 span3">Learn</span> With{" "}
              <span className="span1">Joy</span>
            </h1>
            <p>
              When students discover their unique potential through learning
              that is as joyful as it is challenging, they emerge with the
              courage and character to change the world.
            </p>
          </div>
        </center>
        <div className="overlay-footer">
          <center>
            {" "}
            <div className="col-md-4 home-footer" ref={textRef}>
              {" "}
              <img
                src={Logo}
                width="50%"
                style={{
                  transform: inViewText ? "scale(1)" : "scale(0.1)",
                  opacity: inViewText ? 1 : 0,
                  transition:
                    "background 0.5s ease, transform 2s ease, opacity 2s ease",
                }}
              />
            </div>
          </center>
        </div>
        <div ref={ref} className="scroll-text-container offset-md-">
          <motion.span
            className="scroll-text one"
            variants={textVariants(0)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            EACH SCHOLAR:
          </motion.span>
          <motion.span
            className="scroll-text two"
            variants={textVariants(0.3)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            A VOICE.
          </motion.span>
          <motion.span
            className="scroll-text three"
            variants={textVariants(0.6)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            A DREAM.
          </motion.span>
          <motion.span
            className="scroll-text four"
            variants={textVariants(0.9)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            A BRIGHT FUTURE.
          </motion.span>
        </div>
      </div>
      <div className="who-we-are">
        <center>
          <div className="col-md-4">
            {" "}
            <LogoAnime />
            <h1>
              Who We <span>Are</span>
            </h1>
          </div>
        </center>
        <div className="abt-dits ">
          <div className="col-md-6 offset-md-3 d-md-flex">
            <div className="col-md-6 caru-column">
              <Carousel fade>
                <Carousel.Item>
                  {" "}
                  <img src={St1} width="100%" />
                </Carousel.Item>
                <Carousel.Item>
                  {" "}
                  <img src={St2} width="100%" />
                </Carousel.Item>
              </Carousel>
            </div>{" "}
            <div className="col-md-6 offset-md-1">
              <p>
                British Spring International School is a premier institution
                dedicated to academic excellence and holistic development. Our
                curriculum blends international educational standards with a
                nurturing environment, ensuring that every student receives a
                well-rounded and enriching learning experience. With a focus on
                critical thinking, creativity, and leadership, we empower
                students to excel both in and beyond the classroom.
              </p>
              <Link to={"/"}>Learn More</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12  dashboard-accordion d-md-flex">
        <OurWords />
      </div>
      <div className=" col-md-12">
        <Values />
      </div>

      <div className="stats-container">
        <div className="statistics-div"></div>
        <div className="stats-overlay">
          {" "}
          <div className="col-md-10 offset-md-1 row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            {" "}
            <div className="col">
              <center>
                <div className=" stats">
                  <span>
                    {" "}
                    <MdGroups className="icon" />
                  </span>

                  <h1>
                    <CountUp
                      start={0}
                      end={10}
                      duration={2}
                      decimal=""
                      prefix=" "
                      suffix="+"
                      enableScrollSpy={true}
                    />
                  </h1>
                  <p>School Clubs</p>
                </div>{" "}
              </center>
            </div>{" "}
            <div className="col">
              <center>
                <div className=" stats">
                  <span>
                    <PiStudentBold className="icon" />
                  </span>
                  <h1>
                    <CountUp
                      start={0}
                      end={5000}
                      duration={2}
                      decimal=""
                      prefix=" "
                      suffix="+"
                      enableScrollSpy={true}
                    />
                  </h1>
                  <p>Students </p>
                </div>
              </center>
            </div>
            <div className="col">
              <center>
                <div className=" stats">
                  <span className="icon">
                    <TbRulerMeasure />
                  </span>
                  <h1>
                    {" "}
                    <CountUp
                      start={0}
                      end={10}
                      duration={2}
                      decimal=""
                      prefix=" "
                      suffix=":1"
                      enableScrollSpy={true}
                    />
                  </h1>
                  <p>Student-Teacher Ratio</p>
                </div>
              </center>
            </div>{" "}
            <div className="col">
              <center>
                <div className=" stats">
                  <span className="icon">
                    <HiBuildingOffice2 />
                  </span>
                  <h1>
                    {" "}
                    <CountUp
                      start={0}
                      end={15}
                      duration={2}
                      decimal=""
                      prefix=" "
                      suffix="+"
                      enableScrollSpy={true}
                    />
                  </h1>
                  <p>School Facilities</p>
                </div>
              </center>
            </div>
            <div className="col">
              <center>
                <div className="stats">
                  <span className="icon">
                    <FaChalkboardTeacher />
                  </span>
                  <h1>
                    {" "}
                    <CountUp
                      start={0}
                      end={50}
                      duration={2}
                      decimal=""
                      prefix=" "
                      suffix="+"
                      enableScrollSpy={true}
                    />
                  </h1>
                  <p>Staff Members</p>
                </div>{" "}
              </center>
            </div>
          </div>
          <div className="d-md-flex col-md-10 offset-md-1 see-div">
            <h6>See for yourself</h6>
            <div className="col-md-8">
              <hr />
            </div>
            <button>INQUIRE</button>
            <button>TAKE A TOUR</button>
          </div>
        </div>
      </div>
      <Facilities />
      <div className="news-div" style={{ background: "#fff" }}>
        <center>
          <LogoAnime />
          <h2>
            OUR <span>News</span> & Events
          </h2>
        </center>
        <div className="col-md-8 offset-md-2 ">
          <News />
        </div>
      </div>
    </>
  );
};
