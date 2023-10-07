import Accordion from "react-bootstrap/Accordion";
import '../Components/FAQ.css'
import thnikingimg from '../Images/group-of-people-thinking-why-choose-us--question-t.jpg'
function BasicExample() {
  return (
    <div className="ddd">
      <h1 id="whychoose-title">Why Choose Us?</h1>

      <div id="Acc-ImgHolder">
        <img id="Img-Accordian" src={thnikingimg}></img>
        <Accordion className="MianAccirdion-Contaier" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>Dedicated Team</h5>
            </Accordion.Header>
            <Accordion.Body>
              Our team of experts is committed to delivering excellence in every
              project. We invest in training and development to stay ahead of
              industry trends.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h5>Quality Assurance</h5>
            </Accordion.Header>
            <Accordion.Body>
              At Crew Byte, our commitment to excellence extends beyond
              words—it's the core of our values. We understand that quality
              assurance is not just a checkbox; it's a pledge we make to our
              clients. When you choose us, you're choosing a partner dedicated
              to ensuring the highest level of quality in every product,
              service, or solution we provide.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <h5>Timely Delivery</h5>
            </Accordion.Header>
            <Accordion.Body>
              We value your time. Our commitment to punctuality ensures that
              your project is delivered on schedule
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <h5>Satisfaction Guarantee</h5>
            </Accordion.Header>
            <Accordion.Body>
              We guarantee your satisfaction. If you're not completely happy
              with our service, we'll work to make it right.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default BasicExample;
