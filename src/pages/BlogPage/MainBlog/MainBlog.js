import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Blog } from "../../../components/Blog/Blog";
import { latestNews, riddles } from "../../../TestData/newsData";
import { FaArrowLeft } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { Riddle } from "../../../components/Riddle/Riddle";

// import "../../research-group.scss";
export const MainBlog = () => {
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
        latestNews.find((obj) => {
          return obj.id == id;
        })
      );
  }, [id]);
  const [state, setState] = useState({
    query: "",
    list: latestNews.filter((newsItem) => {
      return newsItem.id > 4;
    }),
  });
  const [state2, setState2] = useState({
    query: "",
    list2: riddles,
  });
  return (
    <>
      <div className="col-md-12 news-container d-flex ">
        <Link
          to={"/news-page"}
          className="offset-md-1 blog-link2 col-md-2"
          style={{ flexGrow: 1 }}
        >
          <FaArrowLeft />
          Back to Posts
        </Link>
        <marquee behavior="scroll" direction="left">
          <p>
            {" "}
            Subscribe to our blog, also like, comment and share... Kindly follow
            us on all our social media platforms @britishspring
          </p>
        </marquee>
      </div>{" "}
      {data ? (
        <>
          <div className="col-md-10 offset-md-1 d-md-flex mt-5">
            <ul className="blog-socials">
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaSquareInstagram />
              </li>
              <li>
                <BsTwitterX />
              </li>
              <li>
                <BsWhatsapp />
              </li>
              <li>
                <FaLinkedin />
              </li>
            </ul>
            <div className="col-md-8 news-heading">
              <h1 className="mt8 ">{data.newsHeading}</h1>
              <div
                className=" main-img2 "
                style={{ backgroundImage: `url(${data.img})` }}
              ></div>
              <div className="  news-body">
                <h4>{data.newsHeading}</h4>
                <p>{data.newsDetails}</p>
                <p>{data.moreDetails}</p>
                <div className="flexy mt">
                  <ul
                    className="list-unstyled list-inline"
                    style={{ color: "grey", flexGrow: 1 }}
                  >
                    <li className="list-inline-item">
                      <strong>Tag:</strong>
                    </li>
                    <li className="list-inline-item">{data.tag1},</li>
                    <li className="list-inline-item">{data.tag2},</li>
                    <li className="list-inline-item">{data.tag3},</li>
                    <li className="list-inline-item">{data.tag4},</li>
                  </ul>
                  <ul className="list-unstyled list-inline share">
                    <li className="list-inline-item">
                      <strong>Share</strong>
                    </li>
                    <li className="list-inline-item">
                      <i class="icofont-facebook"></i>
                    </li>
                    <li className="list-inline-item">
                      <i class="icofont-twitter"></i>
                    </li>
                    <li className="list-inline-item">
                      <i class="icofont-instagram"></i>
                    </li>
                    <li className="list-inline-item">
                      <i class="icofont-linkedin"></i>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="news-heading">
                <h3>Older News</h3>
                <div className="row row-cols-1 row-cols-lg-2">
                  {state.list.map((data, index) => (
                    <Blog data={data} key={data.id} />
                  ))}
                </div>
              </div>

              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>

            <div className="col-md-3 offset-md-1 news-heading">
              <h3>Our Top Reads</h3>
              <div className="row row-cols-1 row-cols-lg-1">
                {state.list.map((data, index) => (
                  <Blog data={data} key={data.id} />
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}{" "}
      <div className="news-heading riddle-corner">
        <h3>Riddles</h3>

        <div className="row row-cols-1 row-cols-lg-3 g-lg-3 col-md-8 offset-md-2">
          {state2.list2.slice(0, 3).map((data, index) => (
            <Riddle data={data} key={data.id} />
          ))}
        </div>
      </div>
    </>
  );
};
