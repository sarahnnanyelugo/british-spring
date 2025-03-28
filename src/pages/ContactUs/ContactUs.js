import React from "react";
import "./contact-us.scss";
import Girl from "../../assets/images/storyHero.jpg";
// import Hero from "../../assets/images/group.jpg";
import Hero from "../../assets/images/girl.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { LogoAnime } from "../../components/LogoAnime/LogoAnime";

export const ContactUs = () => {
  return (
    <>
      <div className="contact-div">
        {" "}
        <div className="contact-banner2">
          {" "}
          <img src={Hero} width="100%" />
          <center>
            <h1>CONTACT US</h1>
          </center>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="d-flex col-md-6 offset-md-3">
          <hr className="col-md-6" />
          <LogoAnime />
          <hr className="col-md-6" />
        </div>
        <h3
          className="offset-md-1 mobile-pad"
          style={{ fontFamily: "figtreeB" }}
        >
          We’re Happy To Hear From You
        </h3>
        <div className="d-md-flex col-md-10 offset-md-1 mobile-pad">
          <div className="col-md-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.390444286383!2d7.095571499999999!3d6.2121262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043829eff5e9473%3A0x63f158c478db2953!2sBritish%20Spring%20College!5e0!3m2!1sen!2sng!4v1743157107001!5m2!1sen!2sng"
              height="600"
              width="100%"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-md-4 general-information">
            <h3>General Information</h3>
            <h4>British Spring College</h4>
            <ul className="list-unstyled">
              <li>
                <FaLocationDot className="icons" /> 1, British Spring Estate
                Road, Nkwelle Awka, Anambra State <br />
                Springfield Academy, 30 New Nkisi Road, GRA Onitsha Anambra
                state
              </li>
              <li>
                {" "}
                <IoMail className="icons" />
                <a href="mailto:http://www.canterburyintschools.org/">
                  http://www.canterburyintschools.org/
                </a>
              </li>
              <li>
                <FaPhoneAlt className="icons" />
                <ol>
                  <li> +234 907 678 1199 </li>
                  <li>+234 809 999 7816 </li>
                  <li>01 - 453 7303</li>
                </ol>
              </li>{" "}
            </ul>
          </div>{" "}
        </div>
        <div className="d-md-flex col-md-10 offset-md-1 contact-form mobile-pad">
          <div className="col-md-6">
            <h4>Feel Free to Leave Us a Message</h4>
            <form>
              <h6>Your Name</h6>
              <input type="text" /> <h6>YourEmail</h6>
              <input type="mail" /> <h6>Your Phone Number</h6>
              <input type="tel" />
              <h6>Your Message</h6>
              <textarea />
            </form>
          </div>
          <div className="col-md-6">
            <img src={Girl} width="100%" />
          </div>
        </div>
      </div>
    </>
  );
};
