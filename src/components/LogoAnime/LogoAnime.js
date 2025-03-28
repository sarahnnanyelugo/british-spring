import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/images/app-logo.png";
import "./logo-anime.scss";
export const LogoAnime = () => {
  const [inView, setInView] = useState(false);
  const logoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (logoRef.current) {
        const rect = logoRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
          setInView(true);
        } else {
          setInView(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="logo-anime">
      <center>
        <div className="logo-bg">
          <center>
            <img
              // ref={logoRef}
              src={Logo}
              width="30px"
            />
          </center>
        </div>
        {/* <img
          ref={logoRef}
          src={Logo}
          width="30px"
          style={{
            transform: inView ? "rotate(360deg)" : "rotate(0deg)",
            transition: "transform 1s ease-in-out",
          }}
        /> */}
      </center>{" "}
    </div>
  );
};
