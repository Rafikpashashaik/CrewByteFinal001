import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

function ContactInfo() {
  return (
    <>
      <div className="Contactus-MainBody">
        <Link to="/contactus" style={{ textDecoration: "none" }}>
          <div className="row rectangle-6-main">
            <div className="col location-icon">
              <svg
                id="Contact-us-Svgs"
                width="80"
                height="80"
                viewBox="0 0 45 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Add path element for the location icon */}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.9997 0.833496C32.2755 0.833496 41.4163 9.97435 41.4163 21.2502C41.4163 24.6595 40.5831 27.8719 39.1036 30.6985L20.9997 62.0835L3.31508 31.4597C1.57467 28.4543 0.583008 24.9694 0.583008 21.2502C0.583008 9.97435 9.72386 0.833496 20.9997 0.833496ZM20.9997 6.66683C12.9455 6.66683 6.41634 13.196 6.41634 21.2502C6.41634 23.5661 6.95062 25.7883 7.96168 27.7945L8.45166 28.6894L20.9997 50.4168L33.6363 28.5364C34.9068 26.3424 35.583 23.8556 35.583 21.2502C35.583 13.196 29.0538 6.66683 20.9997 6.66683ZM20.9997 12.5002C25.8322 12.5002 29.7497 16.4177 29.7497 21.2502C29.7497 26.0827 25.8322 30.0002 20.9997 30.0002C16.1672 30.0002 12.2497 26.0827 12.2497 21.2502C12.2497 16.4177 16.1672 12.5002 20.9997 12.5002ZM20.9997 18.3335C19.3888 18.3335 18.083 19.6393 18.083 21.2502C18.083 22.861 19.3888 24.1668 20.9997 24.1668C22.6105 24.1668 23.9163 22.861 23.9163 21.2502C23.9163 19.6393 22.6105 18.3335 20.9997 18.3335Z"
                  fill="#C0B7E8"
                />
              </svg>

              <div className="text pay-visit">
                Pay Us a Visit <br />
                <div className="text contact-info">
                  KPHB 5th Phase, Kukatpally, Hyderabad, Telangana 500072
                </div>
              </div>
            </div>

            <div className="col call-icon">
              <svg
                id="Contact-us-Svgs"
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Add path element for the call icon */}
                <path
                  d="M35.6458 15.9792C37.458 16.3327 39.2569 17.1319 40.5625 18.4375C41.8681 19.7431 42.6673 21.542 43.0208 23.3542M36.875 7.375C40.64 7.79326 44.028 9.61471 46.7083 12.2917C49.3887 14.9686 51.202 18.3605 51.625 22.125M51.6237 40.5051V47.1666C51.634 49.7131 49.3443 51.8395 46.7734 51.6077C24.5835 51.625 7.37515 34.2568 7.39252 12.2159C7.16097 9.65866 9.27686 7.37761 11.8201 7.37522H18.4948C19.5746 7.36461 20.6214 7.74621 21.4401 8.4489C23.7676 10.4467 25.2648 17.2274 24.6887 19.923C24.239 22.0276 22.1175 23.4999 20.6752 24.9394C23.8425 30.4985 28.4545 35.1014 34.0247 38.2624C35.467 36.823 36.9423 34.7057 39.051 34.2568C41.7561 33.6811 48.5805 35.1803 50.5702 37.5241C51.2758 38.3552 51.6507 39.4161 51.6237 40.5051Z"
                  stroke="#C0B7E8"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="text call-us">
                Give Us a Call <br />
                <div className="text contact-info">(+91) 9550147983</div>
              </div>
            </div>

            <div className="col mail-icon">
              <svg
                id="Contact-us-Svgs"
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.91825 14.3348C9.40836 13.8446 10.0854 13.5415 10.8333 13.5415H54.1667C54.9146 13.5415 55.5916 13.8446 56.0817 14.3348M8.91825 14.3348C8.42814 14.8249 8.125 15.502 8.125 16.2498V48.7498C8.125 50.2456 9.33756 51.4582 10.8333 51.4582H54.1667C55.6624 51.4582 56.875 50.2456 56.875 48.7498V16.2498C56.875 15.502 56.5719 14.8249 56.0817 14.3348M8.91825 14.3348L28.6698 34.0862C30.7852 36.2016 34.2148 36.2016 36.3302 34.0862L56.0817 14.3348"
                  stroke="#C0B7E8"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div className="text email-address">
                <div className="text send-message">Send Us a Message</div>{" "}
                <br />
                Info@crewbyte.co
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* ===========? */}

      <div id="carouselExample" class="carousel slide  ">
        <div class="carousel-inner">
          <div class="carousel-item  active  Main-mini-contactus">
            <div class="rectangle-mini">
              <svg
                id="Svg-Location"
                width="42"
                height="63"
                viewBox="0 0 42 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.0007 0.833496C32.2765 0.833496 41.4173 9.97435 41.4173 21.2502C41.4173 24.6595 40.584 27.8719 39.1046 30.6985L21.0007 62.0835L3.31606 31.4597C1.57565 28.4543 0.583984 24.9694 0.583984 21.2502C0.583984 9.97435 9.72484 0.833496 21.0007 0.833496ZM21.0007 6.66683C12.9465 6.66683 6.41732 13.196 6.41732 21.2502C6.41732 23.5661 6.9516 25.7883 7.96265 27.7945L8.45264 28.6894L21.0007 50.4168L33.6373 28.5364C34.9078 26.3424 35.584 23.8556 35.584 21.2502C35.584 13.196 29.0548 6.66683 21.0007 6.66683ZM21.0007 12.5002C25.8331 12.5002 29.7507 16.4177 29.7507 21.2502C29.7507 26.0827 25.8331 30.0002 21.0007 30.0002C16.1682 30.0002 12.2507 26.0827 12.2507 21.2502C12.2507 16.4177 16.1682 12.5002 21.0007 12.5002ZM21.0007 18.3335C19.3898 18.3335 18.084 19.6393 18.084 21.2502C18.084 22.861 19.3898 24.1668 21.0007 24.1668C22.6115 24.1668 23.9173 22.861 23.9173 21.2502C23.9173 19.6393 22.6115 18.3335 21.0007 18.3335Z"
                  fill="#C0B7E8"
                />
              </svg>
              <div class="Contact-Details">
                <p class="address-Title"> Pay Us a Visit</p>
                <p class="address-description">
                  KPHB 5th Phase, Kukatpally, Hyderabad, Telangana 500072
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="rectangle-mini">
              <svg
                width="59"
                height="59"
                viewBox="0 0 59 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.6457 15.9792C37.4579 16.3327 39.2568 17.1319 40.5623 18.4375C41.8679 19.7431 42.6671 21.542 43.0207 23.3542M36.8748 7.375C40.6399 7.79326 44.0279 9.61471 46.7082 12.2917C49.3885 14.9686 51.2019 18.3605 51.6249 22.125M51.6235 40.5051V47.1666C51.6339 49.7131 49.3442 51.8395 46.7732 51.6077C24.5833 51.625 7.375 34.2568 7.39237 12.2159C7.16082 9.65866 9.27671 7.37761 11.8199 7.37522H18.4947C19.5744 7.36461 20.6212 7.74621 21.4399 8.4489C23.7675 10.4467 25.2646 17.2274 24.6886 19.923C24.2389 22.0276 22.1174 23.4999 20.6751 24.9394C23.8423 30.4985 28.4543 35.1014 34.0245 38.2624C35.4668 36.823 36.9421 34.7057 39.0508 34.2568C41.7559 33.6811 48.5803 35.1803 50.5701 37.5241C51.2757 38.3552 51.6506 39.4161 51.6235 40.5051Z"
                  stroke="#C0B7E8"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div class="Contact-Details">
                <p class="address-Title"> Give Us a Call</p>
                <p class="address-description">(+91) 9550147983</p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="rectangle-mini">
              <svg
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.91825 14.3348C9.40836 13.8446 10.0854 13.5415 10.8333 13.5415H54.1667C54.9146 13.5415 55.5916 13.8446 56.0817 14.3348M8.91825 14.3348C8.42814 14.8249 8.125 15.502 8.125 16.2498V48.7498C8.125 50.2456 9.33756 51.4582 10.8333 51.4582H54.1667C55.6624 51.4582 56.875 50.2456 56.875 48.7498V16.2498C56.875 15.502 56.5719 14.8249 56.0817 14.3348M8.91825 14.3348L28.6698 34.0862C30.7852 36.2016 34.2148 36.2016 36.3302 34.0862L56.0817 14.3348"
                  stroke="#C0B7E8"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div class="Contact-Details">
                <p class="address-Title"> Send Us a Message</p>
                <p class="address-description"> Info@crewbyte.co</p>
              </div>
            </div>
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default ContactInfo;
