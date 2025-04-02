import React from "react";
import { Link } from "react-router-dom";
import "./sign-up.scss";
export const SignUp = () => {
  return (
    <div className="sign-in">
      {" "}
      <div className="col-md-4 offset-md-4 form-div">
        <form>
          <h6>Your Name</h6>
          <input type="text" placeholder="name" />
          <h6>Your Email</h6>
          <input type="text" placeholder="email" />
          <h6>Your Contact</h6>
          <input type="text" placeholder="contact" />
          <br />
          <br />
          <br />
          <Link to={"/sch-store"} target="_blank">
            Submit
          </Link>
        </form>
      </div>
    </div>
  );
};
