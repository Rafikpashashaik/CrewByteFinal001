import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../Images/crewbyteLogo.png";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [navbar, setNav] = useState(false);

  const changeNavBg = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  const navbarStyle = {
    backgroundColor: navbar ? "#433D60" : "transparent",
    borderRadius: navbar ? "90px" : "0px", // Adjust the value as needed
    transition: "background-color 0.3s ease, border-radius 0.3s ease", // Add border-radius to the transition
  };

  const navbarTogglerIconStyle = {
    backgroundColor: "white",
  };

  return (
    <>
      <nav className={`navbar sticky-top navbar-expand-lg`} style={navbarStyle} id="nav">
        <a className="navbar-brand" href="#">
          <img id="NavLogo" src={logo} alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          style={navbarTogglerIconStyle}
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <Link to="/" style={{ textDecoration: "none" }}>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: navbar ? "white" : "white" }}
                >
                  Home
                </a>
              </li>
            </Link>
            <Link to="/aboutus" style={{ textDecoration: "none" }}>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{
                    color: navbar ? "white" : "white",
                    textDecoration: "none",
                  }}
                >
                  About
                </a>
              </li>
            </Link>
            {/* Other list items */}
            <li className="nav-item dropdown">
              <li
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ color: "white" }}
              >
                Services
              </li>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <pre className="dropdown-item" href="#">
                  Application Development & 
                  Maintenance
                </pre>
                <pre className="dropdown-item" href="#">
                  Website Development & 
                  Maintenance
                </pre>
                <pre className="dropdown-item" href="#">
                  Infrastructure Management service
                </pre>
                <pre className="dropdown-item" href="#">
                  Enterprise Applications, Management & Integration
                </pre>
                <pre className="dropdown-item" href="#">
                  Data Analytics
                </pre>
              </div>
            </li>
          </ul>
          {/* <button className="button-59" role="button"  onClick={() => NavigateContactus}>
            CONTACT US
          </button> */}
          <Link to="/contactus">
            <button className="button-59" role="button">
              CONTACT US
            </button>
          </Link>

          <button className="button-60" role="button">
            REQUEST QUOTE
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
