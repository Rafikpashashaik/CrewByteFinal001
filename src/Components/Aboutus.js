import React, { useEffect } from "react";
import { PushIn } from "pushin";
import "./Aboutus.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";
import CrewLogo from "../Images/crewbyteLogo.png";
import backgroundImg from "../Images/flat-lay-black-background-with-laptop-coffee-cup-calculator-top-view.jpg";
import CountSection from "../Components/Acheivement";
import IndustriesWeServe from "./Industries";

function Aboutus() {
  useEffect(() => {
    const container = document.querySelector(".pushin");

    const config = {
      debug: false,
      selector: ".pushin",
      target: undefined,
      scrollTarget: "window",
      mode: "sequential",
      autoStart: "scroll",
      length: 100,
      scene: {
        breakpoints: [],
        inpoints: 0,
        layerDepth: 100,
      },
      composition: {
        ratio: [1, 2],
      },
      layers: [
        {
          inpoints: undefined,
          outpoints: undefined,
          speed: 0.7,
          transitions: true,
          transitionStart: 100,
          transitionEnd: 1100,
        },
        {
          inpoints: 1200,
          outpoints: 1800,
          speed: 2,
          transitions: true,
          transitionStart: 200,
          transitionEnd: 800,
        },
        {
          inpoints: 2200,
          outpoints: 2800,
          speed: 1.5,
          transitions: true,
          transitionStart: 300,
          transitionEnd: 1000,
        },
        {
          inpoints: 3200,
          outpoints: 3800,
          speed: 2.5,
          transitions: true,
          transitionStart: 400,
          transitionEnd: 1200,
        },
      ],
    };

    new PushIn(container, config).start();
  }, []);

  return (
    <div>
      <div className="pushin">
        <Navbar />

        <div id="WelcomeTitles">
          <div id="WelcomeTitles-contnt">
            <>
              <img id="someImg" src={backgroundImg} alt="Background"></img>
            </>
            <div id="Titles-holder">
              <h1 id="Initial-scroll-content">CrewByte</h1>
              <h3 id="SpanContent"> Welcome's You</h3>
              <div id="scrollDownName">scroll down</div>
            </div>
          </div>

          <div id="svgHolder">
            {/* Your SVG here */}
            <svg
              id="svgShowdown"
              width="68"
              height="68"
              viewBox="0 0 68 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="34"
                cy="34"
                r="34"
                transform="rotate(-180 34 34)"
                fill="#0E0E0E"
                fill-opacity="0.32"
              />
              <circle
                cx="33.9999"
                cy="33.9999"
                r="24.129"
                transform="rotate(-180 33.9999 33.9999)"
                fill="url(#paint0_linear_379_105)"
              />
              <path
                d="M25.3184 19.9219L34.0012 28.6047L42.684 19.9219"
                stroke="#433D60"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25.3633 29.748L34.0461 38.4308L42.7289 29.748"
                stroke="#433D60"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25.4082 39.5762L34.091 48.259L42.7738 39.5762"
                stroke="#433D60"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_379_105"
                  x1="59.5077"
                  y1="35.7234"
                  x2="9.87084"
                  y2="37.7916"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#C0B7E8" />
                  <stop offset="1" stop-color="#8176AF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="pushin-scene">
          <div className="pushin-layer">
            <div id="first-scroll">
              <h3
                id="SpanContent1"
                data-pushin-from="800"
                data-pushin-to="2600"
              >
               
                About us
              </h3>
            </div>
          </div>

          <div
            className="pushin-layer"
            data-pushin-from="1800"
            data-pushin-to="2800"
          >
            <div id="firstscroll-content">
              <img id="LogoOFcrewbyte" src={CrewLogo} alt="CrewByte Logo" />
              <p id="1st-scroll-description">
                CrewByte - is a pioneering India-based Software-Solutions
                company with an unique Full Service Provider (FSP) model that
                solutions the best of the Software Development services. With a
                modest beginning, and challenged norms, we embrace excellence,
                for creating a robust-delivery model with an unwavering focus on
                our vision for evolving to become the most preferred IT Partner
                for our end-clients with whom we work in close partnership to
                develop business strategies ,solutions and technologies tailored
                to their unique requirements. Our Core team has an Insatiable
                urge to serve the Software Industry with ever innovative
                Designing and Developing Technologies.
                {/* Your text here */}
              </p>
            </div>
          </div>

          <div
            className="pushin-layer"
            data-pushin-from="2800"
            data-pushin-to="4200"
          >
            <div class="container Secondscroll-Container">
              <div class="row Secondscroll-content">
                <div class="col OurMission-Container">
                  <div id="OurMission">
                    <h1 class="vision-heading">Our Mission</h1>
                    {/* Mission content */}
                    CrewByte typifies quality, commitment and reliability
                    providing effectual IT – services & Solutions through a
                    premeditated and regimented approach leading to customer
                    delight and satisfaction.
                  </div>
                </div>
                <div class="col OurVision-Container">
                  <div id="OurVision">
                    <h1 class="mission-heading">Our Vision</h1>
                    Our Vision To be-a truly innovative IT Partner - integrating
                    cutting-edge Technology, Creative Design and Development
                    Strategy, that delivers market-defining, high-quality
                    products and solutions that create value and sustainable
                    competitive advantage for our clients .
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="layer">
        <CountSection />
      </div>

      <div className="layer">
        <Contact />
      </div>

      <div className="layer">
        <IndustriesWeServe />
      </div>

      <div className="layer">
        <Footer />
      </div>
    </div>
  );
}

export default Aboutus;
