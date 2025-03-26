import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./news.scss";
export const Blog = ({ data }) => {
  const [blogId, setBlogId] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setBlogId(data.id);
  });

  return (
    <div className="news-component col-md-6 d-flex">
      <div
        className="col-md-5 col-5 news-img"
        style={{ backgroundImage: `url(${data.img})` }}
      ></div>
      <div className="col-md-7 col-7 news-details">
        <h5>{data.newsHeading}</h5>
        <div className="flexy flexyM">
          <small>{data.date}</small>
          <small>{data.view}</small>
          <small>{data.comment}</small>
        </div>
        <p>{data.newsDetails}</p>
        <Link
          className="news-link"
          to={"/main-news/" + data.id}
          state={{ blog_id: blogId }}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};
