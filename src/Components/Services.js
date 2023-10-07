import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Services.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Mobile from '../Images/Mobileapp.png';
import webImg from '../Images/web.png';
import dataAnalysis from '../Images/Dataanalysis.png'
import infrastructure from '../Images/infrastructure-management-services.png'
import Enterprise from "../Images/Enterprise.png"
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 420) {
        setSlidesPerView(1); // Show 1 card when screen width is 420px or smaller
      } else if (window.innerWidth <= 800) {
        setSlidesPerView(2); // Show 2 cards when screen width is between 421px and 768px
      } else {
        setSlidesPerView(3); // Show 3 cards for wider screens
      }
    };

    // Initial call to set the initial slidesPerView value
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="Star-a-proj">
        <div id="Proj-left">        
          <div id="Proj-left-title">
            Would you like to start a project with us?
          </div>
          <div id="Proj-left-description">
            <div id="description-note">Feel free to contact us</div>
            <svg
              id="Showing-arrow"
              width="255"
              height="105"
              viewBox="0 0 255 105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M145.833 55.0002L104.166 55.0002M145.833 55.0002L129.166 71.6668M145.833 55.0002L129.166 38.3335"
                stroke="#C0B7E8"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path d="M105 55L1 54" stroke="#C0B7E8" stroke-width="3" />
            </svg>
          </div>
        </div>
        <div id="Proj-right">
          <Link to="/contactus">
          <button id="getintouch-btn">LET’S GET IN TOUCH</button>
</Link>
        </div>
      </div>

      <hr id="Line-break-Card"></hr>

      <Swiper
        className="Main-Swiper-body"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={slidesPerView}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {/* ANDROID DEVELOPMEMT */}
        <SwiperSlide className="Swipercard Swipercard-1">
          <div id="card--1">
            <div id="cards-container">
              <div id="Image-box">
                <div id="Card-profile-bg">
                  <img id="Card-img" src={Mobile}></img>
                </div>
              </div>
              <div id="Title-container">
                <p id="Title-for-card">
                  Application Development <br></br>& <br></br> Management{" "}
                </p>
                <hr id="Line-break-Card"></hr>
                <p id="Description-for-card">
                  We at CrewByte have a Dedicated team of Expertise for
                  Application Development , who are well trained in different
                  areas and processes of Application Development tailoring to
                  the needs of our array of esteemed Clientele. .
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* ANDROID DEVELOPMEMT */}
        <SwiperSlide className="Swipercard Swipercard-1">
          <div id="card--1">
            <div id="cards-container">
              <div id="Image-box">
                <div id="Card-profile-bg">
                  <img id="Card-img" src={webImg}></img>
                </div>
              </div>
              <div id="Title-container">
                <p id="Title-for-card">
                  Website Development
                  <br></br>& <br></br> Management{" "}
                </p>
                <hr id="Line-break-Card"></hr>
                <p id="Description-for-card">
                  We at CrewByte take our Clients Businesses to the next level,
                  by building stunning Websites that are faster, easier and
                  better. We have a wide variety of certified and customer
                  centric team of professionals who help you manage your
                  Website, with end – end support solutions
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* ANDROID DEVELOPMEMT */}
        <SwiperSlide className="Swipercard Swipercard-1">
          <div id="card--1">
            <div id="cards-container">
              <div id="Image-box">
                <div id="Card-profile-bg">
                  <img id="Card-img" src={infrastructure}></img>
                </div>
              </div>
              <div id="Title-container">
                <p id="Title-for-card">Infrastructure Management services</p>
                <hr id="Line-break-Card"></hr>
                <p id="Description-for-card">
                  CrewByte manages both technical & operational components of
                  the Businesses that drive their business effectiveness through
                  professional, customer centric practices and a consulting-led
                  approach for enterprise infrastructure management, by
                  designing, deploying and managing. e hybrid IT infrastructure
                  across all industry verticals.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* ANDROID DEVELOPMEMT */}
        <SwiperSlide className="Swipercard Swipercard-1">
          <div id="card--1">
            <div id="cards-container">
              <div id="Image-box">
                <div id="Card-profile-bg">
                  <img id="Card-img" src={dataAnalysis}></img>
                </div>
              </div>
              <div id="Title-container">
                <p id="Title-for-card">Data Analytics</p>
                <hr id="Line-break-Card"></hr>
                <p id="Description-for-card">
                  CrewByte’s Data Analytics resolutions form the substratum of
                  an enterprise - driven solutions built for more advanced
                  business performances of our Clients.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="Swipercard Swipercard-1">
          <div id="card--1">
            <div id="cards-container">
              <div id="Image-box">
                <div id="Card-profile-bg">
                  <img id="Card-img" src={Enterprise}></img>
                </div>
              </div>
              <div id="Title-container">
                <p id="Title-for-card">
                  Enterprise Applications, Management & Integration
                </p>
                <hr id="Line-break-Card"></hr>
                <p id="Description-for-card">
                  CrewByte drives client businesses through cost-effective,
                  risk-mitigated digital transformations.
                  CrewByte manages enterprise challenges with expertise in repositories,
                  integration, and BPM. CrewByte offers core management
                  services, including repositories, integration, and business
                  process management, to tackle enterprises' key challenges.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
