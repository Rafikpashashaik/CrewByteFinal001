import React, { useEffect, useState } from "react";
import "./Acheivement.css";
import NumberCounter from "./NumberCounterCode";
import { useInView } from "react-intersection-observer";

function CountSection() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div class="container-fluid " ref={ref}>
      <hr></hr>
      <div class="row ">
        <div class="col OurAcheiventContaineer">
          <h1 id="OurAcheiventTitle">Our Achievement 
          <span>
          <p id="OurAcheiventDescrition">
            These are the numbers we have achieved so far
          </p>
          </span>
          </h1>
          
        </div>

        <div class="col countSection-1">
          <div id="qwerty">
            <h1 className="countSectionH1">
              <span className="number">
                {isVisible && (
                  <NumberCounter start={0} end={5} duration={3000} />
                )}
                <span className="plus">+</span>
              </span>
              <span className="cities">years of experience</span>
            </h1>
          </div>
        </div>

        <div class="col countSection-1">
          <h1 className="countSectionH1">
            <span className="number">
              {isVisible && (
                <NumberCounter start={0} end={20} duration={3000} />
              )}
              <span className="plus">+</span>
            </span>
            <span className="cities">professional advisors</span>
          </h1>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default CountSection;
