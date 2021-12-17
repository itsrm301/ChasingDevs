import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
// import Calender from "./components/Calender";
// import background from "./image/crousel_b.jpg";
export default function Home() {
  return (
    <>
      <div className="HomeContainer">
        <div className="LeftHomeContainer">
          <div className="TSGHACKATHOAN">TSG-HACKATHOAN</div>
          <div className="headingbelowCalenderButton">
            <h1>
              All you need
              <br />
              to power your
              <br />
              online skill.
            </h1>
            {/* <h1>To power your </h1>
            <h1>online skill</h1> */}
          </div>
          <div className="paraaboveloginbutton">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis adipisci ipsa atque nostrum cum quos necessitatibus
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore,
              eos..
            </p>
          </div>
          <div className="LoginButton">
            <div>
              {" "}
              <Link
                id="StudentLogin"
                title="click here to go to student Login page."
                to="/studentlogin"
              >
                student Login
              </Link>
            </div>
            <div>
              {" "}
              <Link
                id="OfficialLogin"
                title="click here to go to official Login page."
                to="/officiallogin"
              >
                Official Login
              </Link>
            </div>
          </div>
          <div className="paraabovecalenderbutton">
            <p>
              Click the below Button to know more about the upcoming events.
            </p>
          </div>
          <div className="calenderButton">
            {" "}
            <Link
              id="HomeCalender"
              title="click here to see the Calender."
              to="/calender"
            >
              Calender
            </Link>
          </div>
        </div>
        <div className="RightHomeContainer">
          {/* <div className="HomecarouselDiv"> */}
          <Carousel>
            <Carousel.Item interval={3000} className="HomeCarousel">
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/image/crousel_b.jpg"}
                alt="Image One"
              />
              <div className="FooterRightHomeContainer">
                <Carousel.Caption>
                  <h3 className="captionHeading">Stay together</h3>
                  <p className="captionpara">Thank you for being with me</p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>

            <Carousel.Item interval={3000} className="HomeCarousel">
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/image/crousel_d.jpg"}
                alt="Image Two"
              />
              <div className="FooterRightHomeContainer">
                {" "}
                <Carousel.Caption>
                  <h3 className="captionHeading">Cheers</h3>
                  <p className="captionpara">
                    We all are looking good together
                  </p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={3000} className="HomeCarousel">
              <img
                className="d-block w-100 "
                src={process.env.PUBLIC_URL + "/image/crousel_e.jpg"}
                alt="Image Two"
              />
              <div className="FooterRightHomeContainer">
                {" "}
                <Carousel.Caption>
                  <h3 className="captionHeading">Happy Diwali</h3>
                  <p className="captionpara">I'm missing my home's Diwali</p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          </Carousel>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
