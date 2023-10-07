import React from "react";

// import Navbar from "./NavComponents/Navbar";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Components/ContactSection.css";

function ContactSection() {
  return (
    <div>
      <Navbar />

      <div className="Mian-contactus-container">
        <div class="container text-center">
          <div class="row">
            <div class="col Contactus">
              <h1 id="ContctUs-Title">Get In Touch</h1>
              <h4>
                {" "}
                Reach Us Land Mark - D-MART, Plot No-12,Survey No 1009, 
                KPHB 5th Phase, Kukatpally, Hyderabad, Telangana 500072.  info@crewbyte.co
                Call us Toll Free (+91) 9550147983
              </h4>
            </div>
            <div class="col MapSection">
              <iframe
                id="Iframe-Body"
                width="300"
                height="300"
                title="CrewByte"
                sandbox="allow-scripts"
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d237.84749424841004!2d78.39273963204498!3d17.48076580983042!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1696233342765!5m2!1sen!2sin"
                allowFullScreen="true"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            {/* <div class="col">
      Column
    </div> */}
          </div>
        </div>

       <div className="col-12 Consultation">
       <div className="col-md-5   " >
          {/* <Slide direction="right" triggerOnce={true}> */}
          <form>
            <p>
              <h1>Request Free Consultation</h1>
            </p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              {/* for name */}

              <label htmlFor="newsletter1" className="visually-hidden"></label>
              <input
                id="newsletter1"
                type="text"
                className="form-control bg-secondary bg-opacity-25"
                placeholder="Name"
              />
              {/* <div className="form-floating mt-3 rounded">
                    <input
                      className="form-control bg-secondary bg-opacity-25"
                      placeholder="Leave a comment here"
                      id="floatingTextinput"
                    ></input>
                    <label htmlFor="floatingTextinput">Name</label>
                  </div> */}
              {/* for email */}
              <label htmlFor="newsletter2" className="visually-hidden"></label>
              <input 
                id="newsletter2"
                type="text"
                className="form-control bg-secondary bg-opacity-25"
                placeholder="Email"
              />

              {/* <div className="form-floating mt-3  rounded">
                    
                    <input
                      id="newsletter2"
                      type="text"
                      className="form-control bg-secondary bg-opacity-25 pl-3"
                      placeholder="Email"
                    />
                    <label
                      htmlFor="newsletter2"
                      // className="visually-hidden"
                    >Email</label>
                  </div> */}
            </div>

            <div className=" mt-3 rounded">
              <textarea
                id="newsletter3"
                className="form-control bg-secondary bg-opacity-25"
                placeholder="Leave a comment here"
              ></textarea>
              <label htmlFor="newsletter3" className="visually-hidden"></label>
            </div>

            <div className="d-grid gap-2 mt-3 bgcolur rounded">
              <button type="button" className="btn button-70">
                Submit
              </button>
            </div>
          </form>
          {/* </Slide> */}
        </div>
       </div>


       
      </div>
      <Footer />
    </div>
  );
}

export default ContactSection;
