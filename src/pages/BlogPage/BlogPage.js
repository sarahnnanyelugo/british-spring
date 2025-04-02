import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./news-page.scss";
import { latestNews } from "../../TestData/newsData";
import { FaArrowLeft } from "react-icons/fa";

import { Blog } from "../../components/Blog/Blog";
export const BlogPage = () => {
  const [state, setState] = useState({
    query: "",
    list: latestNews,
  });

  return (
    <>
      <div className="col-md-12 news-container d-flex ">
        <Link
          to={"/"}
          className="offset-md-1 blog-link2 col-md-2"
          style={{ flexGrow: 1 }}
        >
          <FaArrowLeft />
          Back to Home
        </Link>
        <marquee behavior="scroll" direction="left">
          <p>
            {" "}
            Subscribe to our blog, also like, comment and share... Kindly follow
            us on all our social media platforms @britishspring
          </p>
        </marquee>
      </div>{" "}
      <div className="blog-page offset-md-2 col-md-8">
        <h1>Welcome to our Blog Page</h1>
        <h3>Stay Informed</h3>
        <div className="row row-cols-1 row-cols-lg-2  g-lg-4   mt5">
          {state.list.map((data, index) => (
            <Blog data={data} key={data.id} />
          ))}
        </div>{" "}
      </div>
    </>
  );
};
