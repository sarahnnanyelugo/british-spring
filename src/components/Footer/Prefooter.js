import React from "react";
import { Link } from "react-router-dom";

const Prefooter = () => {
  return (
    <>
      <div style={{ position: "sticky", top: 0 }}>
        {" "}
        <div className="prefooter-div d-flex">
          <div className="row row-cols-3 row-cols-lg-3 g-2 g-lg-3 col-md-8 offset-md-2">
            <Link className="col">
              <div className="call-to-action">
                {" "}
                <center>
                  <h1>Take a Tour</h1>
                </center>
              </div>
            </Link>
            <Link className="col">
              <div className="call-to-action">
                {" "}
                <center>
                  <Link to={"/contact"}><h1>Contact Us</h1></Link>
                </center>
              </div>
            </Link>
            <Link className="col">
              <div className="call-to-action">
                {" "}
                <center>
                  <h1>Apply</h1>
                </center>
              </div>
            </Link>
          </div>
        </div>
        <div className="prefooter"></div>
      </div>
    </>
  );
};

export default Prefooter;
