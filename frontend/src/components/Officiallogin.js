import React from "react";
import "./Officiallogin.css";

import { useState } from "react";
import { useHistory } from "react-router-dom";
export default function Studentlogin() {
  const [officialusernameEmail, setofficialusernameEmail] = useState(" ");
  const [isActiveofficialemail, setIsActiveofficialemail] = useState(false);
  const [officialusernamePassword, setofficialusernamePassword] = useState(" ");
  const [isActiveofficialPassword, setIsActiveofficialPassword] =
    useState(false);

  const history = useHistory();
  function setinputusername(e) {
    setofficialusernameEmail(e.target.value);
    setIsActiveofficialemail(false);
  }
  function setinputusernamepassword(e) {
    setofficialusernamePassword(e.target.value);
    setIsActiveofficialPassword(false);
  }
  function conditiononOfficialLoginbutton() {
    if (officialusernameEmail === " " && officialusernamePassword === " ") {
      setIsActiveofficialemail(true);
      setIsActiveofficialPassword(true);
    } else if (officialusernameEmail === " ") {
      setIsActiveofficialemail(true);
    } else if (officialusernamePassword === " ") {
      setIsActiveofficialPassword(true);
    } else if (officialusernameEmail.length === 0) {
      setIsActiveofficialemail(true);
    } else if (officialusernamePassword.length === 0) {
      setIsActiveofficialPassword(true);
    } else {
      history.push("/Blanktextarea", {
        whichLoginpage: "Official",
      });
    }
  }
  function shouldBlur(e) {
    e.target.blur();
  }
  function shouldFocus(e) {
    e.target.focus();
  }
  return (
    <>
      <div className="officialstudentlogincontainer">
        <div className="officialcenterstudentlogincontainer">
          <div className="officialstudentlogintopimage">
            <img
              src={process.env.PUBLIC_URL + "/image/officialback4.jpg"}
              alt="Image One"
            />{" "}
          </div>
          <div className="officialbelowstudentlogintopimage">
            <h1>Officials’ Login</h1>
            <p>
              To keep conacted with us please login with your email & password
            </p>
          </div>
          <div className="officialUsernameinputstudentlogin">
            <h5>Username</h5>
            <i className="far fa-envelope officialusername_logo"></i>

            <input
              type="text"
              name="email"
              id="EMAIL"
              autoComplete="off"
              placeholder="Type your username"
              style={{ color: "white", border: "1px dashed rgb(221, 158, 41)" }}
              onChange={setinputusername}
              onMouseOut={shouldBlur}
              onMouseOver={shouldFocus}
            />
          </div>
          <div className="officialerrorpositionrelative">
            <div
              className="officialblankerror"
              style={
                isActiveofficialemail === true
                  ? { opacity: "1" }
                  : { opacity: "0" }
              }
            >
              Fill the text area !
            </div>
          </div>

          <div
            className="officialUsernameinputstudentlogin"
            id="passwordmargintop"
          >
            <h5>Password</h5>

            <i className="fas fa-lock officialpassword_logo"></i>
            <input
              type="text"
              name="email"
              id="EMAIL"
              autoComplete="off"
              placeholder="Type your password"
              style={{ color: "white", border: "1px dashed rgb(221, 158, 41)" }}
              onChange={setinputusernamepassword}
              onMouseOut={shouldBlur}
              onMouseOver={shouldFocus}
            />
          </div>
          <div className="officialerrorpositionrelative">
            <div
              className="officialblankerror"
              style={
                isActiveofficialPassword === true
                  ? { opacity: "1" }
                  : { opacity: "0" }
              }
            >
              Fill the text area !
            </div>
          </div>

          <div className="officialdivofgetotpbutton">
            <div
              id="officialLoginButton"
              title="click here to go to official Login page."
              onClick={conditiononOfficialLoginbutton}
            >
              Login
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
