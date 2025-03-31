import React, { useState } from "react";
import Hero from "../../../assets/images/happy-students.jpeg";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

import "./apply.scss";
import { Link } from "react-router-dom";
export const Apply = () => {
  const [activeIndex, setActiveIndex2] = useState(1);
  const handleClick2 = (index) => setActiveIndex2(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  const checkActive2 = (index, className) =>
    activeIndex === index ? className : "";
  return (
    <>
      <div className="col-md-12 apply-div ">
        <div className="col-md-12  d-md-flex">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            {" "}
            <img src={Hero} width="100%" />
          </div>
        </div>
        <div className="col-md-8 offset-md-2 enroll">
          <h1>NEW STUDENT ENROLLMENT</h1>
          <h5>
            New student enrollment for the 2025-2026 school year opens on March
            7, 2025.
          </h5>

          <div className="announce">
            <span>
              {" "}
              <ImQuotesLeft />
            </span>

            <center>
              <p>
                On behalf of our entire staff here in British Spring College, we
                welcome you to our learning community. Our school district has
                many caring staff that will be present and available as you take
                your first steps here with us.
              </p>
            </center>
            <span className="offset-md-11 offset-10">
              <ImQuotesRight />
            </span>
          </div>

          <div className="">
            <h4>NOW LET'S BEGIN!</h4>
            <div className="admission-tab col-md-12 ">
              {" "}
              <div className="tabs ">
                <button
                  className={`tab ${checkActive2(1, "active2")}`}
                  onClick={() => handleClick2(1)}
                >
                  <span>STEP 1 |</span> SUBMIT APPLICATION
                </button>
                <button
                  className={`tab ${checkActive2(2, "active2")}`}
                  onClick={() => handleClick2(2)}
                  style={{ marginLeft: "20px" }}
                >
                  <span> STEP 2 |</span> VISIT
                </button>{" "}
                <button
                  className={`tab ${checkActive2(3, "active2")}`}
                  onClick={() => handleClick2(3)}
                  style={{ marginLeft: "20px" }}
                >
                  <span> STEP 3 |</span> REGISTER FOR ADMISSION EVENTS
                </button>{" "}
                <button
                  className={`tab ${checkActive2(4, "active2")}`}
                  onClick={() => handleClick2(4)}
                  style={{ marginLeft: "20px" }}
                >
                  <span>STEP 4 | </span>COMPLETE APPLICATION CHECKLIST
                </button>
              </div>
              <div className="panels col-md-12">
                <div className={`panel ${checkActive(1, "active2")}`}>
                  <div className="col-md-12 steps-div d-md-flex">
                    {" "}
                    <div className="col-md-8 ">
                      {" "}
                      <p>
                        Whether you are applying to Middle School or Upper
                        School, boarding or day, we will request information
                        about past and present academic performance and personal
                        interests.{" "}
                      </p>
                      <p>
                        To start, create an account in your{" "}
                        <a href={""} className="portal-link">
                          Canterbury Admission & Enrollment (A & E) Portal
                        </a>
                        , where you can begin your application.
                      </p>
                      <p>
                        If you are unsure about anything or have a question,
                        please do not hesitate to reach out to us - we're here
                        to help!{" "}
                      </p>
                    </div>
                    <Link className="col-md-3 offset-md-1" href={"contact-us"}>
                      <div className="outer ">
                        <div className="inner col-md-12">
                          {/* <img src={Girl} width="100%" /> */}
                          <center>
                            {" "}
                            <h3>Contact Us</h3>
                          </center>
                        </div>
                        <div className="overlay"></div>
                      </div>{" "}
                    </Link>
                  </div>
                </div>
                <div className={`panel ${checkActive(2, "active2")}`}>
                  {" "}
                  <div className="col-md-12 steps-div d-md-flex">
                    {" "}
                    <div className="col-md-8 ">
                      {" "}
                      <p>
                        The best way to get to know Baylor is by visiting our
                        beautiful campus. Tours are required for the application
                        process and are provided to both parents and prospective
                        students. They also include a one-on-one conversation
                        between the admissions counselor and the
                        student.nterests.{" "}
                      </p>
                      <p>
                        To schedule a tour of campus, please contact the
                        admission office at 423-267-5902 or
                        admission@baylorschool.org. Alternatively, you may
                        schedule a tour through the
                        <a href={""} className="portal-link">
                          Admission & Enrollment (A & E) Portal.
                        </a>
                      </p>
                      <p>
                        Please note that Applications should be on file prior to
                        this visit.
                      </p>
                    </div>
                    <Link
                      className="col-md-3 col-8 offset-md-1"
                      href={"contact-us"}
                    >
                      <div className="outer ">
                        <div className="inner col-md-12">
                          {/* <img src={Girl} width="100%" /> */}
                          <center>
                            {" "}
                            <h3>Create Portal</h3>
                          </center>
                        </div>
                        <div className="overlay"></div>
                      </div>{" "}
                    </Link>
                  </div>
                </div>{" "}
                <div className={`panel ${checkActive(3, "active2")}`}>
                  {" "}
                  <div className="col-md-12 steps-div d-md-flex">
                    {" "}
                    <div className="col-md-8 ">
                      {" "}
                      <p>
                        See our upcoming slate of admission events below for
                        Middle School, Upper School Day, and Upper School
                        Boarding applicants:
                      </p>
                      <p>
                        <a href={""} className="portal-link">
                          Middle School Admission Events
                        </a>{" "}
                        <br />
                        <a href={""} className="portal-link">
                          Upper School Day Admission Events
                        </a>
                        <br />
                        <a href={""} className="portal-link">
                          Upper School Boarding Admission Events
                        </a>
                      </p>
                    </div>
                    <Link className="col-md-3 offset-md-1" href={"contact-us"}>
                      <div className="outer ">
                        <div className="inner col-md-12">
                          {/* <img src={Girl} width="100%" /> */}
                          <center>
                            {" "}
                            <h5>Arrange Your Visit</h5>
                          </center>
                        </div>
                        <div className="overlay"></div>
                      </div>{" "}
                    </Link>
                  </div>
                </div>{" "}
                <div className={`panel ${checkActive(4, "active2")}`}>
                  {" "}
                  <div className="col-md-12 steps-div d-md-flex">
                    {" "}
                    <div className="col-md-8 ">
                      {" "}
                      <p>
                        Your Application Checklist is accessed via your{" "}
                        <Link href={""} className="portal-link">
                          Portal
                        </Link>{" "}
                        and contains a list of documents and other pieces of
                        information to submit.
                      </p>
                      <p>
                        As always, please don't hesitate to reach out to the
                        Baylor Admission team if you have any questions at all
                        about any of the requested materials!
                      </p>
                    </div>
                    <Link className="col-md-3 offset-md-1" href={"contact-us"}>
                      <div className="outer ">
                        <div className="inner col-md-12">
                          {/* <img src={Girl} width="100%" /> */}
                          <center>
                            {" "}
                            <h5>View application</h5>
                          </center>
                        </div>
                        <div className="overlay"></div>
                      </div>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="sign-off2">
              <center>
                <p>
                  If you have any additional questions along the way, please
                  call the admission office at +234 907 678 1199 or email us at
                  <a href="mailto:  admission@britishspring.org.">
                    {" "}
                    admission@baylorschool.org.
                  </a>
                </p>
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
