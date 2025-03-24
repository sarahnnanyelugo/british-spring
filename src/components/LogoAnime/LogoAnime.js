import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/images/app-logo.png";

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
        <img
          ref={logoRef}
          src={Logo}
          width="30px"
          style={{
            transform: inView ? "rotate(360deg)" : "rotate(0deg)",
            transition: "transform 1s ease-in-out",
          }}
        />
      </center>
    </div>
  );
};
