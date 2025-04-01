import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { riddles } from "../../TestData/newsData";
import { Riddle } from "../../components/Riddle/Riddle";
import "./riddle-page.scss";
// import "../../research-group.scss";
export const RiddlePage = () => {
  const [data, setData] = useState({});
  const [id, setId] = useState(0);
  const location = useLocation();
  const { blog_id } = useParams();
  useEffect(() => {
    setId(blog_id);
    console.log(blog_id);
  }, [blog_id]);

  useEffect(() => {
    if (id !== 0)
      setData(
        riddles.find((obj) => {
          return obj.id == id;
        })
      );
  }, [id]);

  const [state2, setState] = useState({
    query: "",
    list2: riddles,
  });
  return (
    <>
      <div className="col-md-12 news-container d-flex "></div>{" "}
      {data ? (
        <>
          <div className="col-md-10 offset-md-1 d-md-flex mt-5">
            <div className="col-md-8 riddle-dash">
              <h1 className="mt8 ">Can you solve this riddle?</h1>
              <hr />
              <div className="riddle-showcase">
                <center>
                  <h1>{data.question}</h1>
                  <h2>{data.questionAnchor}</h2>
                </center>
              </div>
              <div className="info">
                <p>Scroll down to find the answer to this riddle! </p>
              </div>

              <div className="answer-bg">
                <center>
                  {" "}
                  <h4>Riddle Answer</h4>
                  <p>{data.answer}</p>
                </center>
              </div>

              <div className="info2 d-flex mt-5">
                <div>
                  <h6>Share: </h6>
                </div>
                <div>
                  {" "}
                  <ul className="list-inline list-instyled">
                    <li className="list-inline-item">
                      <FaFacebook />
                    </li>
                    <li className="list-inline-item">
                      <FaLinkedin />
                    </li>
                    <li className="list-inline-item">
                      <FaSquareInstagram />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-flex other-riddles">
                <div className="col-md-5">
                  <h4 style={{ fontSize: "35px" }}>More Awesome Stuff</h4>
                </div>
                <hr className="col-md-7" />
              </div>

              <div className="row row-cols-1 row-cols-lg-3">
                {state2.list2.map((data, index) => (
                  <Riddle data={data} key={data.id} />
                ))}
              </div>
              <div className="news-heading">
                <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3">
                  <div className="col">
                    {" "}
                    {/* {state2.list2.slice(0, 3).map((data, index) => (
                      <Riddle data={data} key={data.id} />
                    ))} */}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 offset-md-1 news-heading">
              <h3>Our Top Reads</h3>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};
