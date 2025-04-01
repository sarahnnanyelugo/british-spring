import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/images/app-logo.png";
import Happy from "../../assets/images/happy-students.jpeg";
import { Desktop } from "../../Utils/mediaQueries";
import "./top-nav.scss";

export const TopNav = () => {
  const location = useLocation();
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [navState, setNavState] = useState("nav-default");
  const prevUrlRef = useRef(null);
  const [showNav, setShowNav] = useState(true);
  let currentUrl;
  useEffect(() => {
    currentUrl = location.pathname;
  });
  useEffect(() => {
    if (prevUrlRef.current !== currentUrl) {
      prevUrlRef.current = currentUrl;
      console.log(currentUrl);
      setTimeout(() => {
        switch (currentUrl) {
          case "/sch-store":
          case "/sign-up":
          case "/cart-items":
          case "main-news/:blog_id":
            setShowNav(false);
            break;
          default:
            setShowNav(true);
            break;
        }
        console.log(currentUrl, showNav);
      }, 10);
    }
  });
  // Define background colors based on routes
  const routeBackgrounds = {
    "/": "red",
    "/welcome": "#252C6A",
    "/apply": "#ba4a6e",
    "/who-we-are": "#ba4a6e",
    "/history": "grey",
    "/vision": "#0d2f02",
    "/junior": "#83c2f6",
    "/senior": "#03506F",
    "/overview": "#B5A8D5",
    "/facilities": "#B5C6D5",
    "/why-bsc": "#773838",
    "/tuition": "#205781",
    "/gallery": "#109790",
    "/directory": "#000000",
  };

  // Get the default background color based on the current route
  const defaultBgColor = routeBackgrounds[location.pathname] || "black"; // Default to black if route not found

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setNavState("nav-default"); // Back at the top -> Use default bg color
      } else if (currentScrollY > lastScrollY) {
        setNavState("nav-hidden"); // Scrolling down -> Hide navbar
      } else {
        setNavState("nav-visible"); // Scrolling up -> Show navbar with blue background
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <Desktop>
        {" "}
        <div className={`col-md-12  ${showNav ? "" : "hide"}`}>
          <div
            className={`top-nav d-flex ${navState}`}
            style={{
              background:
                navState === "nav-default"
                  ? location.pathname === "/"
                    ? "linear-gradient(180deg, rgba(24,24,108,1) 27%, rgba(255,255,255,0) 93%)"
                    : routeBackgrounds[location.pathname] || "black"
                  : "",
            }}
          >
            <Link to={"/"} className="col-md-1">
              <img src={Logo} width="40%" />
            </Link>
            <div style={{ flexGrow: 1 }} />

            <div class="menu-container">
              <nav>
                <ul class="menu">
                  <li class="dropdown dropdown-6">
                    <Link> Who We Are</Link>
                    <ul class="dropdown_menu dropdown_menu--animated dropdown_menu-6 ">
                      {" "}
                      <li>
                        <img src={Happy} width="350px" />
                      </li>
                      <div
                        style={{
                          float: "right",
                          width: "300px",
                          marginTop: "-270px",
                          paddingLeft: "0px",
                        }}
                      >
                        <li class="dropdown_item-2">
                          <Link to={"/who-we-are"}>Who we are</Link>
                        </li>{" "}
                        <li class="dropdown_item-2">
                          <Link to={"/history"}>Our History</Link>
                        </li>
                        <li class="dropdown_item-3">
                          <NavLink to={"/vision"}>Our Vision & Mission</NavLink>
                        </li>
                        <li class="dropdown_item-4">
                          <NavLink to={"/facilities"}>Our Facilities</NavLink>
                        </li>
                        <li class="dropdown_item-5">
                          <NavLink to={"/directory"}>Our Directory</NavLink>
                        </li>{" "}
                        <li class="dropdown_item-5">
                          <NavLink to={"/testimonials"}>
                            Our Tesimonials
                          </NavLink>
                        </li>
                        {/* <li class="dropdown_item-5">
                          <NavLink>Contact Us</NavLink>
                        </li> */}
                      </div>
                    </ul>
                  </li>
                  <li class="dropdown dropdown-8">
                    <Link> Admission</Link>
                    <ul class="dropdown_menu dropdown_menu--animated dropdown_menu-8">
                      <li>
                        <img src={Happy} width="350px" />
                      </li>
                      <div
                        style={{
                          float: "right",
                          width: "300px",
                          marginTop: "-270px",
                          paddingLeft: "30px",
                        }}
                      >
                        {" "}
                        <li class="dropdown_item-1">
                          {" "}
                          <NavLink to={"/welcome"}>Welcome Message</NavLink>
                        </li>
                        <li class="dropdown_item-1">
                          <Link to={"/why-bsc"}>Why B.S.C. ?</Link>
                        </li>
                        <li class="dropdown_item-2">
                          <NavLink>Requirements</NavLink>
                        </li>
                        <li class="dropdown_item-3">
                          <NavLink>Take a Tour</NavLink>
                        </li>
                        <li class="dropdown_item-4">
                          <NavLink to={"/tuition"}>Tuition & Fees</NavLink>
                        </li>
                        <li class="dropdown_item-5">
                          <NavLink to={"/apply"}>Apply</NavLink>
                        </li>
                      </div>
                    </ul>
                  </li>
                  <li class="dropdown dropdown-9">
                    <Link> Academics</Link>
                    <ul class="dropdown_menu dropdown_menu--animated dropdown_menu-9">
                      <li>
                        <img src={Happy} width="350px" />
                      </li>
                      <div
                        style={{
                          float: "right",
                          width: "300px",
                          marginTop: "-270px",
                          paddingLeft: "30px",
                        }}
                      >
                        <li class="dropdown_item-1">
                          <NavLink to={"/overview"}>Overview</NavLink>
                        </li>
                        <li class="dropdown_item-2">
                          <NavLink to={"/junior"}>Junior Secondary</NavLink>
                        </li>
                        <li class="dropdown_item-3">
                          <NavLink to={"/senior"}>Senior Secondary</NavLink>
                        </li>
                        <li class="dropdown_item-4">
                          <NavLink>Curriculum</NavLink>
                        </li>{" "}
                        <li class="dropdown_item-5">
                          <NavLink>FAQs</NavLink>
                        </li>
                      </div>
                    </ul>
                  </li>
                  <li class="dropdown dropdown-10">
                    <Link> Student Life</Link>
                    <ul class="dropdown_menu dropdown_menu--animated dropdown_menu-10">
                      <li>
                        <img src={Happy} width="350px" />
                      </li>
                      <div
                        style={{
                          float: "right",
                          width: "300px",
                          marginTop: "-270px",
                          paddingLeft: "0px",
                        }}
                      >
                        <li class="dropdown_item-1">
                          <Link to={"/gallery"}>Our Gallery</Link>
                        </li>
                        <li class="dropdown_item-2">
                          <NavLink>Learning Activities</NavLink>
                        </li>
                        <li class="dropdown_item-3">
                          <NavLink>News & Events</NavLink>
                        </li>
                        <li class="dropdown_item-4">
                          <NavLink>Our Facilities</NavLink>
                        </li>
                      </div>
                    </ul>
                  </li>{" "}
                  <li class="dropdown">
                    <Link to={"/contact"}>Contact Us</Link>
                  </li>
                  <li class="dropdown">
                    <Link className="news-link" to={"blog-page"}>
                      Blog
                    </Link>
                  </li>{" "}
                  <li class="dropdown">
                    <Link className="news-link" to={"sign-up"}>
                      School Store
                    </Link>
                  </li>{" "}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </Desktop>
    </>
  );
};
