import React from "react";
import "./Studentlogin.css";

import { useState } from "react";
import { useHistory } from "react-router-dom";
import loginotp from "./loginotp";
export default function Studentlogin() {
  const [usernameEmail, setusernameEmail] = useState(" ");
  const [isActive, setIsActive] = useState(false);

  const history = useHistory();
  function setinputusername(e) {
    setusernameEmail(e.target.value);
    setIsActive(false);
  }
  function conditiononGetOTPbutton() {
    // if (usernameEmail === null) {
    //   navigate("/Blanktextarea", { state: { name: "studentloginpage" } });
    // } else {
    if (usernameEmail === " ") {
      setIsActive(true);
    } else if (usernameEmail.length === 0) {
      setIsActive(true);
    } else {
      loginotp(usernameEmail).then(res=>
        {console.log(res.OTP,res.mail);
          history.push("/Otpverificationpage", { nameofEmail: res.mail,otp:res.OTP });
        }
        ).catch(e=>console.log(e));
     
      
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
      <div className="studentlogincontainer">
        <div className="centerstudentlogincontainer">
          <div className="studentlogintopimage">
            <img
              src={process.env.PUBLIC_URL + "/image/logintopimage.jpg"}
              alt="Image One"
            />{" "}
          </div>
          <div className="belowstudentlogintopimage">
            <h1>Students’ Login</h1>
            <p>
              To keep conacted with us please login with your personal
              information by email
            </p>
          </div>
          <div className="Usernameinputstudentlogin">
            <h5>Username</h5>
            <i className="far fa-envelope email_logo"></i>
            <input
              type="text"
              name="email"
              id="EMAIL"
              autocomplete="off"
              placeholder="Type your institute email id here"
              style={{ color: "white", border: "1px dashed rgb(221, 158, 41)" }}
              onChange={setinputusername}
              onMouseOut={shouldBlur}
              onMouseOver={shouldFocus}
            />
          </div>
          <div className="errorpositionrelative">
            <div
              className="blankerror"
              style={isActive === true ? { opacity: "1" } : { opacity: "0" }}
            >
              Fill the text area !
            </div>
          </div>

          <div className="divofgetotpbutton">
            <div
              id="GetOTPButton"
              title="click here to go to official Login page."
              onClick={conditiononGetOTPbutton}
            >
              Get OTP
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
