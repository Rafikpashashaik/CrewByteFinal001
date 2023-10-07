import React, { Component } from "react";
import "./Header.css";
import SotwareCompany from '../Images/software-company.png'

class Header extends Component {
  render() {
    return (
      <div class="row Main-header-body-p">
        <div class="col Header-Left-part-1">
          <p id="Main-Content-for-Header">
            <span id="Highlighted-Text">Accelerating </span> Progress and
            Enriching Lives through Innovative{" "}
            <span id="Highlighted-Text">Technology Solution</span>{" "}
          </p>

          <p id="provided-services">
            Our core Services offerings are centered around a wide range of
            Software Solutions within the following key areas of focus:
          </p>

          <ul id="services-provided">
            <li>Application Development & Maintenance</li>
            <li>Website Development & Maintenance</li>
            <li>Infrastructure Management services</li>
            <li>Enterprise Applications, Management & Integration</li>
            <li>Data Analytics</li>
          </ul>

          <button className="button-61" role="button">
            REQUEST QUOTE
          </button>

          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M70.8327 50.0002L29.166 50.0002M70.8327 50.0002L54.166 66.6668M70.8327 50.0002L54.166 33.3335"
              stroke="#C0B7E8"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div class="col Header-Right-part">
          <div className="Background-Image-Container">
            <div id="rectangle-55">
              <svg
                id="img-bg-xl"
                width="510"
                height="750"
                viewBox="5 0 739 890"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M732.529 171C643.304 185.843 473.442 270.224 507.801 488.998C542.159 707.772 3 814.155 318.529 840"
                  stroke="url(#paint0_linear_347_190)"
                  stroke-width="6"
                />
                <path
                  d="M738.029 421.5C491.196 409.333 -1.37072 475.9 3.02928 839.5"
                  stroke="url(#paint1_linear_347_190)"
                  stroke-width="6"
                />
                <path
                  d="M224.722 1C221.441 141.127 258.738 434.314 434.171 486.053C609.605 537.792 613.306 747.576 593.227 846"
                  stroke="url(#paint2_linear_347_190)"
                  stroke-width="6"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_347_190"
                    x1="683.500"
                    y1="196"
                    x2="427.529"
                    y2="640.686"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#343045" />
                    <stop offset="0.276042" stop-color="#8176AF" />
                    <stop offset="0.739583" stop-color="#C0B7E8" />
                    <stop offset="1" stop-color="#343045" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_347_190"
                    x1="700.029"
                    y1="413"
                    x2="14.0293"
                    y2="778"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#343045" />
                    <stop offset="0.213542" stop-color="#C0B7E8" />
                    <stop offset="0.71875" stop-color="#8176AF" />
                    <stop offset="1" stop-color="#343045" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_347_190"
                    x1="238.029"
                    y1="40.5"
                    x2="380.529"
                    y2="815"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0104167" stop-color="#343045" />
                    <stop offset="0.229167" stop-color="#C0B7E8" />
                    <stop offset="0.776042" stop-color="#8176AF" />
                    <stop offset="7" stop-color="#343045" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

          
              <img  id="rectangle-56" src={SotwareCompany} ></img>
          
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
