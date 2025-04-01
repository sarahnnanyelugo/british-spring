import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./riddle.scss";
export const Riddle = ({ data }) => {
  const [blogId, setBlogId] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setBlogId(data.id);
  });

  return (
    <Link
      to={"/riddle-page/" + data.id}
      state={{ blog_id: blogId }}
      className="riddle-component "
    >
      <div className=" riddle-details">
        <center>
          {" "}
          <h4>{data.question}</h4>
          <h3>{data.questionAnchor}</h3>
        </center>
      </div>
    </Link>
  );
};
