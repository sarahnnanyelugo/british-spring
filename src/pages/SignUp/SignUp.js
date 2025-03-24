import React from "react";
import { Link } from "react-router-dom";
import "./sign-up.scss";
export const SignUp = () => {
  return (
    <div className="col-md-4 offset-md-4 form-div">
      <form>
        <input />
        <input />
        <input />
        <Link to={"/sch-store"} target="_blank">
          Submit
        </Link>
      </form>
    </div>
  );
};
