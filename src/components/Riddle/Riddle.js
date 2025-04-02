import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./riddle.scss";
import { LiaQuestionSolid } from "react-icons/lia";

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
      className="riddle-component  "
    >
      <div className=" riddle-details ">
        <span className="offset-md-10">
          <LiaQuestionSolid />
        </span>
        <center>
          {" "}
          <h5>{data.question}</h5>
          <h4>{data.questionAnchor}</h4>
        </center>{" "}
        <span>
          <LiaQuestionSolid className="trans" />
        </span>
      </div>
      <div className="riddle-footer">
        <h6>Entertainment</h6>
        <p>Can You Solve This RIddle?</p>
      </div>
    </Link>
  );
};
