import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./news-page.scss";
import { latestNews } from "../../TestData/newsData";

import { Blog } from "../../components/Blog/Blog";
export const BlogPage = () => {
  const [state, setState] = useState({
    query: "",
    list: latestNews,
  });

  return (
    <>
      {" "}
      <div className="postgraduate-page">
        <center>
          <h1>our news hub</h1>
        </center>
        <div className="flexy flexyM offset-md-5 mt5">
          {" "}
          <Link to={"/"} className="home-link">
            HOME
          </Link>
          <span>
            <i class="icofont-rounded-right"></i>
          </span>
          <h6>News</h6>
        </div>
      </div>
      <h3 className="offset-md-2 mt">Stay Informed</h3>
      <div className="row row-cols-1 row-cols-lg-2  g-lg-2 col-md-8 offset-md-2 mt5">
        {state.list.map((data, index) => (
          <Blog data={data} key={data.id} />
        ))}
      </div>
    </>
  );
};
