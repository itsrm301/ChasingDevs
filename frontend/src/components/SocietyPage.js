import React from "react";
import "./SocietyPage.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";

export default function SocietyPage() {
  const history = useHistory();
  const location = useLocation();
  const Socname= location.state.Socname;
  return (
    <div>
      <div className="societyPageName">
        <h1>{Socname}</h1>
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
                  src={process.env.PUBLIC_URL + "/image/crousel_a.jpg"}
                  alt="One"
                />
                <div className="FooterRightHomeContainer">
                  <Carousel.Caption>
                    <h3 className="captionHeading">Lorem ipsum</h3>
                    <p className="captionpara">Lorem ipsum dolor, sit amet</p>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>

              <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  src={process.env.PUBLIC_URL + "/image/crousel_c.jpg"}
                  alt="Two"
                />
                <div className="FooterRightHomeContainer">
                  {" "}
                  <Carousel.Caption>
                    <h3 className="captionHeading">Lorem ipsum</h3>
                    <p className="captionpara">
                    Lorem ipsum dolor, sit amet
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
                    <h3 className="captionHeading">Lorem ipsum</h3>
                    <p className="captionpara">Lorem ipsum dolor, sit amet</p>
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
                backgroundColor: "#000",
              }}
            >
              <Card style={{ width: "80%", margin: 15, backgroundColor: 'black',
              boxShadow: '-1px 0px 8px 0px grey' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title>
                    <h2>Event 1</h2>
                  </Card.Title>
                  <Card.Text>
                    <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Accusamus, ratione.
                    </p>
                  </Card.Text>
                  <Link variant="primary" style={{ textDecoration: "none" }}>
                    Go somewhere
                  </Link>
                </Card.Body>
              </Card>
              <Card style={{ width: "80%", margin: 15,backgroundColor: 'black',
              boxShadow: '-1px 0px 8px 0px grey'  }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title>
                    <h2>Event 2</h2>
                  </Card.Title>
                  <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusamus, ratione.
                  </Card.Text>
                  <Link variant="primary" style={{ textDecoration: "none" }}>
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
            history.push("/BillReimbursementPortal", {Socname: Socname});
          }}
        >
          Bill Reimbursement Portal
        </button>
      </div>
    </div>
  );
}
