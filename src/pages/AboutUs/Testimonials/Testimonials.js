import { useEffect, useState } from "react";
import "./testimonials.scss";
import Test1 from "../../../assets/images/test1.webp";
import Test2 from "../../../assets/images/test2.webp";
import Test3 from "../../../assets/images/test3.webp";
import Test4 from "../../../assets/images/test4.webp";
import { ImQuotesRight } from "react-icons/im";
import { ImQuotesLeft } from "react-icons/im";
import { SectionHeading } from "../../../components/SectionHeading/SectionHeading";
import { Link } from "react-router-dom";

const colors = [
  "rgba(0, 0, 0, 0.8)",
  "rgba(128, 128, 128, 0.9)",
  "rgba(43,52,97,1)",
  "rgb(31,39,28)",
  "rgba(2, 16, 112, 0.5)",
];

export const Testimonials = () => {
  const [bgColor, setBgColor] = useState(colors[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("color-section");
      if (!section) return;

      const { top, height } = section.getBoundingClientRect();
      const scrollPercentage = Math.min(
        Math.max((window.innerHeight - top) / height, 0),
        1
      );

      // Change color more frequently
      const threshold = 0.2; // Faster color change interval
      const newIndex = Math.min(
        Math.floor(scrollPercentage / threshold),
        colors.length - 1
      );

      if (newIndex !== index) {
        setIndex(newIndex);
        setBgColor(colors[newIndex]);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [index]);

  return (
    <div className="testimonial-div">
      <div className="banner"></div>
      <div className="pre" />
      <div className="testimonial-inner">
        <div
          id="color-section"
          className="h-screen flex items-center justify-center col-md-12 test-div"
          style={{
            backgroundColor: bgColor,
            transition: "background-color 2s ease-in-out", // Slower fade transition
          }}
        >
          <div className="text-white text-3xl font-bold col-md-8 offset-md-2 test-body">
            <SectionHeading text1="Hear from our  " text2="Alumni" />
            <div className="d-md-flex " style={{ marginTop: "150px" }}>
              <div className="col-md-6">
                <img src={Test1} width="100%" />
              </div>
              <div className="col-md-5 offset-md-1 ">
                <span className="quote1">
                  <ImQuotesLeft />
                </span>
                <p>
                  As a curious teenager I was always pushing limits and ISP
                  helped my safety explore the boundaries. The teachers and
                  headmaster always allowed my many visions to be given as many
                  perspectives as possible. I learned loyalty, integrity and
                  respect amongst other things. My most vivid memories are the
                  shows and extracurricular activities. IB curriculum: Music,
                  TOK, Economics, Physics…One piece of advice I would give to
                  future ISP students is to open your mind. Thank you from the
                  bottom of my heart for challenging me and steering me into who
                  I am today{" "}
                  <span className="offset-md-10">
                    <ImQuotesRight />
                  </span>
                </p>{" "}
                <div className="d-flex">
                  {" "}
                  <h6>Mike Johxxn</h6>
                  <small>Class of 2004</small>
                </div>
              </div>
            </div>{" "}
            <div className="d-md-flex">
              <div className="col-md-6">
                <img src={Test2} width="100%" />
              </div>
              <div className="col-md-5 offset-md-1">
                <span>
                  <ImQuotesLeft />
                </span>
                <p>
                  As a curious teenager I was always pushing limits and ISP
                  helped my safety explore the boundaries. The teachers and
                  headmaster always allowed my many visions to be given as many
                  perspectives as possible. I learned loyalty, integrity and
                  respect amongst other things. My most vivid memories are the
                  shows and extracurricular activities. IB curriculum: Music,
                  TOK, Economics, Physics…One piece of advice I would give to
                  future ISP students is to open your mind. Thank you from the
                  bottom of my heart for challenging me and steering me into who
                  I am today
                </p>{" "}
                <span className="offset-md-10 offset-10">
                  <ImQuotesRight />
                </span>
                <div className="d-flex">
                  {" "}
                  <h6>Mike Johxxn</h6>
                  <small>Class of 2004</small>
                </div>
              </div>
            </div>{" "}
            <div className="d-md-flex">
              <div className="col-md-6">
                <img src={Test3} width="100%" />
              </div>
              <div className="col-md-5 offset-md-1">
                <span>
                  <ImQuotesLeft />
                </span>
                <p>
                  As a curious teenager I was always pushing limits and ISP
                  helped my safety explore the boundaries. The teachers and
                  headmaster always allowed my many visions to be given as many
                  perspectives as possible. I learned loyalty, integrity and
                  respect amongst other things. My most vivid memories are the
                  shows and extracurricular activities. IB curriculum: Music,
                  TOK, Economics, Physics…One piece of advice I would give to
                  future ISP students is to open your mind. Thank you from the
                  bottom of my heart for challenging me and steering me into who
                  I am today
                </p>{" "}
                <span className="offset-md-10 offset-10">
                  <ImQuotesRight />
                </span>
                <div className="d-flex">
                  {" "}
                  <h6>Mike Johxxn</h6>
                  <small>Class of 2004</small>
                </div>
              </div>
            </div>{" "}
            <div className="d-md-flex">
              <div className="col-md-6">
                <img src={Test4} width="100%" />
              </div>
              <div className="col-md-5 offset-md-1">
                <span>
                  <ImQuotesLeft />
                </span>
                <p>
                  As a curious teenager I was always pushing limits and ISP
                  helped my safety explore the boundaries. The teachers and
                  headmaster always allowed my many visions to be given as many
                  perspectives as possible. I learned loyalty, integrity and
                  respect amongst other things. My most vivid memories are the
                  shows and extracurricular activities. IB curriculum: Music,
                  TOK, Economics, Physics…One piece of advice I would give to
                  future ISP students is to open your mind. Thank you from the
                  bottom of my heart for challenging me and steering me into who
                  I am today
                </p>
                <span className="offset-md-10 offset-10">
                  <ImQuotesRight />
                </span>
                <div className="d-flex">
                  {" "}
                  <h6>Mike Johxxn</h6>
                  <small>Class of 2004</small>
                </div>
              </div>
            </div>
            <div className="" style={{ marginTop: "200px" }}>
              {" "}
              <SectionHeading
                text1="Ready to start  "
                text2="your journey?"
                paragraph="LET'S MAKE IT LEGENDARY

"
              />
              <center>
                <Link to={"/apply"}>Take a Step</Link>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
