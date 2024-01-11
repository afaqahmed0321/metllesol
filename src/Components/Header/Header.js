import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "../../App.css";

const Header = () => {
  let location = useLocation();
  const [navebar, setNavbar] = useState(false);

  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }, []);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <header
      id="header"
      className={navebar ? "fixed-top header headerscroll" : "fixed-top header"}
    >
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <a href="https://mettlesol.com/">
            <img src="/assets/img/favicon.png" />
          </a>
        </h1>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              {/* {location.pathname === "/" ? (
                <a className="nav-link scrollto" href="#main_hero">
                  Home
                </a>
              ) : (
                <a className="nav-link scrollto" href="/#main_hero">
                  Home
                </a>
              )} */}

              <Link
                className="nav-link scrollto"
                to={location.pathname === "/" ? "#main_hero" : "/#main_hero"}
              >
                Home
              </Link>
            </li>
            {/* <li>
              {location.pathname === "/" ? (
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              ) : (
                <a className="nav-link scrollto" href="/#about">
                  About
                </a>
              )}
            </li> */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link
                    className="dropdown-item"
                    to={location.pathname === "/" ? "#about" : "/#about"}
                  >
                    {/* <a className="dropdown-item" href="#about"> */}
                    <span className="flex_nav">
                      <img src="/assets/img/building.png" />
                      <div className="inner_drp">
                        <span className="tt_nv">About Us</span>
                        <p>Who we are</p>
                      </div>
                    </span>
                    {/* </a> */}
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to={"/career"}>
                    {/* <a className="dropdown-item" href="/career"> */}
                    <span className="flex_nav">
                      <img src="/assets/img/carer.png" />
                      <div className="inner_drp">
                        <span className="tt_nv">Career</span>
                        <p>Explore oppourtunities</p>
                      </div>
                    </span>
                    {/* </a> */}
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to={location.pathname === "/" ? "#team" : "/#team"}
                  >
                    {/* <a className="dropdown-item" href="#team"> */}
                    <span className="flex_nav">
                      <img src="/assets/img/teams.png" />
                      <div className="inner_drp">
                        <span className="tt_nv">Team</span>
                        <p>Dedicated Team</p>
                      </div>
                    </span>
                    {/* </a> */}
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                className="nav-link scrollto"
                to={location.pathname === "/" ? "#services" : "/#services"}
              >
                Services
              </Link>
              {/* {location.pathname === "/" ? (
                <a className="nav-link scrollto" href="#services">
                  Services
                </a>
              ) : (
                <a className="nav-link scrollto" href="/#services">
                  Services
                </a>
              )} */}
            </li>
            <li>
              {/* {location.pathname === "/" ? (
                <a className="nav-link scrollto" href="#portfolio">
                  Portfolio
                </a>
              ) : (
                <a className="nav-link scrollto" href="/#portfolio">
                  Portfolio
                </a>
              )} */}
              <Link
                className="nav-link scrollto"
                to={location.pathname === "/" ? "#portfolio" : "/#portfolio"}
              >
                Portfolio
              </Link>
            </li>

            <li>
              {/* {location.pathname === "/" ? (
                <a className="nav-link scrollto" href="#team">
                  Team
                </a>
              ) : (
                <a className="nav-link scrollto" href="/#team">
                  Team
                </a>
              )} */}
              <Link
                className="nav-link scrollto"
                to={location.pathname === "/" ? "#team" : "/#team"}
              >
                Team
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resource
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to={"/courses"}>
                    {/* <a className="dropdown-item" href="/courses"> */}
                    <span className="flex_nav">
                      <img src="/assets/img/book.png" />
                      <div className="inner_drp">
                        <span className="tt_nv">Courses</span>
                        <p>A global platform to enabling you.</p>
                      </div>
                    </span>
                    {/* </a> */}
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to={"/blog"}>
                    {/* <a className="dropdown-item" href="/blog"> */}
                    <span className="flex_nav">
                      <img src="/assets/img/blg.png" />
                      <div className="inner_drp">
                        <span className="tt_nv">Blog</span>
                        <p>Mettlesol thought leadership</p>
                      </div>
                    </span>
                    {/* </a> */}
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <button
                className="getstarted scrollto btn-schedule"
                onClick={() =>
                  window.Calendly.initPopupWidget({
                    url: "https://calendly.com/syedahsanali995",
                    color: "#2596be",
                    textColor: "#ffffff",
                    branding: true,
                  })
                }
              >
                Book Appointment
              </button>
            </li>
          </ul>
          <i id="navbar_click" className="bi bi-list mobile-nav-toggle" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
