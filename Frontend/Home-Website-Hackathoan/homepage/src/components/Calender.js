import React from "react";
import "./Calender.css";
export default function Calender() {
  return (
    <div className="HomeCalender">
      <div className="Homeevent-container">
        <h3 className="Home-year">2020</h3>

        <div className="Home-event">
          <div className="Home_event-left">
            <div className="Home_event-date">
              <div className="date">8</div>
              <div className="month">Nov</div>
            </div>
          </div>

          <div className="Home_event-right">
            <h3 className="Home-event-title">Some Title Here</h3>

            <div className="Home-event-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, ratione.
            </div>

            <div className="Home-event-timing">
              <img src={process.env.PUBLIC_URL + "/image/time.png"} alt="" />{" "}
              10:00 am
            </div>
          </div>
        </div>

        <h3 className="Home-year">2021</h3>
        <div className="Home-event">
          <div className="Home_event-left">
            <div className="Home_event-date">
              <div className="date">8</div>
              <div className="month">Nov</div>
            </div>
          </div>

          <div className="Home_event-right">
            <h3 className="Home-event-title">Some Title Here</h3>

            <div className="Home-event-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, ratione.
            </div>

            <div className="Home-event-timing">
              <img src={process.env.PUBLIC_URL + "/image/time.png"} alt="" />{" "}
              10:00 am
            </div>
          </div>
        </div>
        <div className="Home-event">
          <div className="Home_event-left">
            <div className="Home_event-date">
              <div className="date">8</div>
              <div className="month">Nov</div>
            </div>
          </div>

          <div className="Home_event-right">
            <h3 className="Home-event-title">Some Title Here</h3>

            <div className="Home-event-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, ratione.
            </div>

            <div className="Home-event-timing">
              <img src={process.env.PUBLIC_URL + "/image/time.png"} alt="" />{" "}
              10:00 am
            </div>
          </div>
        </div>
        <div className="Home-event">
          <div className="Home_event-left">
            <div className="Home_event-date">
              <div className="date">8</div>
              <div className="month">Nov</div>
            </div>
          </div>

          <div className="Home_event-right">
            <h3 className="Home-event-title">Some Title Here</h3>

            <div className="Home-event-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, ratione.
            </div>

            <div className="Home-event-timing">
              <img src={process.env.PUBLIC_URL + "/image/time.png"} alt="" />{" "}
              10:00 am
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
