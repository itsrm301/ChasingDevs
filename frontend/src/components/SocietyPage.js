import React from "react";
import "./SocietyPage.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

export default function SocietyPage() {
  const history = useHistory();
  return (
    <div>
      <div className="societyPageName">
        <h1>SOCIETY NAME</h1>
      </div>
      <div className="societyPageContainer">
        <div className="LeftSocContainer">
          <div
            style={{
              display: "block",
              width: 700,
              paddingLeft: 100,
              paddingRight: 0,
            }}
          >
            <Carousel>
              <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  src={process.env.PUBLIC_URL + "/image/crousel_b.jpg"}
                  alt="One"
                />
                <div className="FooterRightHomeContainer">
                  <Carousel.Caption>
                    <h3 className="captionHeading">Stay together</h3>
                    <p className="captionpara">Thank you for being with me</p>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>

              <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  src={process.env.PUBLIC_URL + "/image/crousel_d.jpg"}
                  alt="Two"
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
              <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  src={process.env.PUBLIC_URL + "/image/crousel_e.jpg"}
                  alt="Two"
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
          </div>
        </div>
        <div className="RightSocContainer">
          <div
            style={{
              display: "block",
              width: 700,
              paddingLeft: 100,
              paddingRight: 0,
            }}
          >
            <Card
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#93a8b2",
              }}
            >
              <Card style={{ width: "80%", margin: 15 }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title>
                    <h2>Event 1</h2>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </Card.Text>
                  <Link
                    variant="primary"
                    style={{ textDecoration: "none" }}
                    to="/SocietyPage"
                  >
                    Go somewhere
                  </Link>
                </Card.Body>
              </Card>
              <Card style={{ width: "80%", margin: 15 }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title>
                    <h2>Event 2</h2>
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Link
                    variant="primary"
                    style={{ textDecoration: "none" }}
                    to="/SocietyPage"
                  >
                    Go somewhere
                  </Link>
                </Card.Body>
              </Card>
            </Card>
          </div>
        </div>
      </div>
      <div className="buttonBox">
        <button
          onClick={() => {
            history.push("/BillReimbursementPortal");
          }}
        >
          Bill Reimbursement Portal
        </button>
      </div>
    </div>
  );
}
