import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import "./our-words.scss";
import HRDashboard from "../../../assets/images/primary.webp";
import HRDashboard3 from "../../../assets/images/eyfs4.webp";
import Logo from "../../../assets/images/app-logo.png";
import HRDashboard2 from "../../../assets/images/college.webp";
import { FaArrowRight } from "react-icons/fa6";
import { LogoAnime } from "../../../components/LogoAnime/LogoAnime";

const OurWords = () => {
  const [updateImage, setUpdateImage] = useState(HRDashboard);
  const [activeKey, setActiveKey] = useState(null);

  const items = [
    {
      key: "0",
      word: "Kindness",
      sentence: "With",
      sentence2: "we make the world a better place.",
      image: HRDashboard,
    },
    {
      key: "1",
      word: "Respect",
      sentence: "With",
      sentence2: "we build strong relationships",
      image: HRDashboard2,
    },
    {
      key: "2",
      word: "Courage",
      sentence: "We show",
      sentence2: " we take bold actions.",
      image: HRDashboard3,
    },
    {
      key: "3",
      word: "Honesty",
      sentence: "Through",
      sentence2: "we foster trust and integrity",
      image: HRDashboard2,
    },
  ];

  return (
    <div className="dashboard-accordion-container col-md-12">
      <h1 className="col-md-4 offset-md-2">
        <img
          src={Logo}
          width="30px"
          // style={{
          //   transform: inView ? "rotate(360deg)" : "rotate(0deg)",
          //   transition: "transform 1s ease-in-out",
          // }}
        />
        <br />
        Focused on <span>Character</span>
      </h1>
      <div className="d-flex">
        {" "}
        <div className="col-md-4 offset-md-2">
          <div className="col-md-11">
            <Accordion
              activeKey={activeKey}
              onSelect={(eventKey) => setActiveKey(eventKey)}
            >
              {items.map((item) => {
                const isActive = activeKey === item.key;

                return (
                  <Accordion.Item eventKey={item.key} key={item.key}>
                    <Accordion.Header
                      onClick={() => setUpdateImage(item.image)}
                      className={`accordion-header ${
                        isActive ? "expanded" : ""
                      }`}
                    >
                      <h3 className="header-container">
                        {isActive && (
                          <span className="sentence">{item.sentence}</span>
                        )}
                        <span className={`word ${isActive ? "moved" : ""}`}>
                          {item.word}
                        </span>{" "}
                        {isActive && (
                          <span className="sentence2">{item.sentence2}</span>
                        )}
                      </h3>{" "}
                      <span className="arrow ">
                        <FaArrowRight />
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur ac urna at sapien commodo aliquet.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </div>
        </div>
        <div className="col-md-4 dashboard-display">
          <img className="logo" src={updateImage} alt="Scholar" width="100%" />
        </div>
      </div>
    </div>
  );
};

export default OurWords;
