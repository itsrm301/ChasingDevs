import React from "react";
import "./Studentlogin.css";

import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import loginotp from "./loginotp";
export default function Studentlogin() {
  const [usernameEmail, setusernameEmail] = useState(" ");
  const [isActive, setIsActive] = useState(false);
  const [opacityOfdropdown, setopacityOfdropdown] = useState(0);

  const history = useHistory();
  const getInitialStateOfdropdown = () => {
    const valueOfdropdown = "@kgpian.iitkgp.ac.in";
    return valueOfdropdown;
  };

  const [valueOfdropdown, setvalueOfdropdown] = useState(
    getInitialStateOfdropdown
  );

  const handleChangeOFDropdown = (e) => {
    setvalueOfdropdown(e.target.value);
  };
  function setinputusername(e) {
    setusernameEmail(e.target.value);
    // setusernameEmail(usernameEmail.concat(`${valueOfdropdown}`));
    setIsActive(false);
    // console.log(e.target.value);
    if (e.target.value === "") {
      setopacityOfdropdown(0);
      setvalueOfdropdown("@kgpian.iitkgp.ac.in");
    } else setopacityOfdropdown(1);
  }
  // console.log(usernameEmail);
  function conditiononGetOTPbutton(e) {
    if (usernameEmail === " ") {
      setIsActive(true);
    } else if (usernameEmail.length === 0) {
      setIsActive(true);
    } else {
      history.push("/Otpverificationpage", {
        nameofEmail: `${usernameEmail}${valueOfdropdown}`,
      });
    }
  }
  function shouldBlur(e) {
    e.target.blur();
    // seta(a - 1);
    // if (usernameEmail.length === 0 && opacityOfdropdown!==1) {
    //   setopacityOfdropdown(1);
  }
  function shouldFocus(e) {
    e.target.focus();
    // seta(a + 1);
  }
  // console.log(valueOfdropdown);
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
              autoComplete="off"
              placeholder="Type your institute email id"
              style={{
                color: "white",
                border: "1px dashed rgb(221, 158, 41)",

                // fontSize: "14px",
              }}
              onChange={setinputusername}
              onMouseOut={shouldBlur}
              onMouseOver={shouldFocus}
            />
          </div>
          <select
            id="suffuxemailAvailableForStudent"
            value={valueOfdropdown}
            onChange={handleChangeOFDropdown}
            onMouseOut={shouldBlur}
            onMouseOver={shouldFocus}
            style={{ opacity: `${opacityOfdropdown}` }}
          >
            <option value="@kgpian.iitkgp.ac.in">@kgpian.iitkgp.ac.in</option>
            <option value="@iitkgp.ac.in">@iitkgp.ac.in</option>
            <option value="@iitkg.ac.in">@iitkg.ac.in</option>
          </select>
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
              title="click here to get OTP."
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
