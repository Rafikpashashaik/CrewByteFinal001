import React from "react";
import "./Ourclients.css";
import BGcrewLogo from "./crewbyteLogo-removebg-preview.png";
import LandT from "../Images/LT.png";
import Franklin from "../Images/franklin-sports-inc-logo-vector.png";
import tarangan from "../Images/tarangan.jpeg";
import vcosmos from "../Images/download (1).jpeg";
import Zepto from "../Images/Zepto.png";
import CloudJune from "../Images/Cloudjune.jpeg";
import Saveo from "../Images/Saveo.jpeg";
import Whole9yards from "../Images/Whole9yards.png";
import UnionSys from "../Images/UnionSys.jpeg";
import JumboTail from "../Images/Jumbotail.png";
import Xperteez from "../Images/Xperteez.jpeg";
import Vehk from "../Images/Vehk.png";

function Ourclients() {
  return (
    <div class="Main-body-for-ind-we-serve">
      <div class="Industries-we-serve">
        <div class="rectangle-6">
          <div class="image-container">
            <img id="Logo-in-img" src={BGcrewLogo}></img>
          </div>

          <h1 class="OurClients">OUR CLIENT'S</h1>
          <div class="below-arrow">
            <svg id="svg-icon-contact" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle
                cx="34"
                cy="34"
                r="34"
                fill="#0E0E0E"
                fill-opacity="0.32"
              />
              <circle
                cx="34.0001"
                cy="34.0001"
                r="24.129"
                fill="url(#paint0_linear_383_174)"
              />
              <path
                d="M25.2705 29.5691L33.9533 38.2519L42.6361 29.5691"
                stroke="#433D60"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_383_174"
                  x1="59.508"
                  y1="35.7236"
                  x2="9.87109"
                  y2="37.7918"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#C0B7E8" />
                  <stop offset="1" stop-color="#8176AF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/*====== ALL SCROLL ACTIONS ======= */}

      <div class="AllScrolSection">
        <article class="wrapper-services">
          <div className="marquee">
            <div class="marquee__group">
              {/* =====  L&T  ====== */}
              <div id="ScrollCard-body">
                <div id="imageHolderScroll">
                  <img id="Scrolling-img" src={LandT}></img>
                </div>
              </div>
              {/* ===== fRANKLIN ====== */}
              <div id="ScrollCard-body">
                <div id="imageHolderScroll">
                  <img id="Scrolling-img" src={Franklin}></img>
                </div>
              </div>
              {/* ===== Zepto ====== */}
              <div id="ScrollCard-body">
                <div id="imageHolderScroll">
                  <img id="Scrolling-img" src={Zepto}></img>
                </div>
              </div>
              {/* =====  Saveo ====== */}

              <div id="ScrollCard-body">
                <div id="imageHolderScroll">
                  <img id="Scrolling-img" src={Saveo}></img>
                </div>
              </div>
              {/* =====    UnionSys .====== */}
              <div id="ScrollCard-body">
                <div id="imageHolderScroll">
                  <img id="Scrolling-img" src={UnionSys}></img>
                </div>
              </div>
              {/* =====   jumbotail .====== */}

              <div id="ScrollCard-body">
                <div id="imageHolderScroll">
                  <img id="Scrolling-img" src={JumboTail}></img>
                </div>
              </div>
            </div>
            {/* ======= SCROLL -2 ======= */}

            <div aria-hidden="true" class="marquee__group">
              <div id="ScrollCard-body">
                {/* =====WHOLE 9 YARDS ====== */}
                <div id="imageHolderScroll">
                  <img id="Scrolling-img" src={Whole9yards}></img>
                </div>
              </div>
              {/* ===== tarangan ====== */}
              <div id="ScrollCard-body">
                <div id="imageHolderScroll">
                  <img id="Scrolling-img" src={tarangan}></img>
                </div>
              </div>
              {/* =====  Cloudjune  ====== */}
              <div id="ScrollCard-body">
                <div id="imageHolderScroll">
                  <img id="Scrolling-img" src={CloudJune}></img>
                </div>
              </div>
              {/* ===== VCOSMOS ====== */}

              <div id="ScrollCard-body">
                <div id="imageHolderScroll">
                  <img id="Scrolling-img" src={vcosmos}></img>
                </div>
              </div>
              {/* =====   Xperteez .====== */}
              <div id="ScrollCard-body">
                <div id="imageHolderScroll">
                  <img id="Scrolling-img" src={Xperteez}></img>
                </div>
              </div>

              {/* =====   Vehak .====== */}
              <div id="ScrollCard-body">
                <div id="imageHolderScroll">
                  <img id="Scrolling-img" src={Vehk}></img>
                </div>
              </div>
            </div>
          </div>

          <div class="marquee marquee--reverse">
            <div class="marquee__group">
              <div aria-hidden="true" class="marquee__group">
                <div id="ScrollCard-body">
                  <div id="imageHolderScroll">
                    <img id="Scrolling-img" src={LandT}></img>
                  </div>
                </div>
                {/* ===== fRANKLIN ====== */}
                <div id="ScrollCard-body">
                  <div id="imageHolderScroll">
                    <img id="Scrolling-img" src={Franklin}></img>
                  </div>
                </div>
                {/* ===== Zepto ====== */}
                <div id="ScrollCard-body">
                  <div id="imageHolderScroll">
                    <img id="Scrolling-img" src={Zepto}></img>
                  </div>
                </div>
                {/* =====  Saveo ====== */}

                <div id="ScrollCard-body">
                  <div id="imageHolderScroll">
                    <img id="Scrolling-img" src={Saveo}></img>
                  </div>
                </div>
                {/* =====    UnionSys .====== */}
                <div id="ScrollCard-body">
                  <div id="imageHolderScroll">
                    <img id="Scrolling-img" src={UnionSys}></img>
                  </div>
                </div>
                {/* =====   jumbotail .====== */}

                <div id="ScrollCard-body">
                  <div id="imageHolderScroll">
                    <img id="Scrolling-img" src={JumboTail}></img>
                  </div>
                </div>
              </div>
            </div>

            <div aria-hidden="true" class="marquee__group">
              <div class="marquee__group">
                <div id="ScrollCard-body">
                  {/* =====WHOLE 9 YARDS ====== */}
                  <div id="imageHolderScroll">
                    <img id="Scrolling-img" src={Whole9yards}></img>
                  </div>
                </div>
                {/* ===== tarangan ====== */}
                <div id="ScrollCard-body">
                  <div id="imageHolderScroll">
                    <img id="Scrolling-img" src={tarangan}></img>
                  </div>
                </div>
                {/* =====  Cloudjune  ====== */}
                <div id="ScrollCard-body">
                  <div id="imageHolderScroll">
                    <img id="Scrolling-img" src={CloudJune}></img>
                  </div>
                </div>
                {/* ===== VCOSMOS ====== */}

                <div id="ScrollCard-body">
                  <div id="imageHolderScroll">
                    <img id="Scrolling-img" src={vcosmos}></img>
                  </div>
                </div>
                {/* =====   Xperteez .====== */}
                <div id="ScrollCard-body">
                  <div id="imageHolderScroll">
                    <img id="Scrolling-img" src={Xperteez}></img>
                  </div>
                </div>

                {/* =====   Vehak .====== */}
                <div id="ScrollCard-body">
                  <div id="imageHolderScroll">
                    <img id="Scrolling-img" src={Vehk}></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
export default Ourclients;
