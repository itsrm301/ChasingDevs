import React from "react";
import { useState } from "react";
import "./Blanktextarea.css";
import { useLocation, useHistory } from "react-router-dom";
export default function Blanktextarea() {
  //   const navigate = useNavigate();
  const [FirstNumber, setFirstNumber] = useState("10");
  const [SecondNumber, setSecondNumber] = useState("3");
  // let FirstNumber = Math.round(8 + (19 - 8) * Math.random());
  // let SecondNumber = Math.round(0 + (7 - 0) * Math.random());
  let ResultOftwoNumvber = FirstNumber - SecondNumber;
  const history = useHistory();
  const location = useLocation();
  const confirmLoginPage = location.state.whichLoginpage;
  const [isActive, setIsActive] = useState(false);
  const [isActiveanswerq, setIsActiveanswerq] = useState(false);
  // const [isActiveerror, setIsActiveerror] = useState(false);
  const [verifyButtonisclick, setverifyButtonisclick] = useState(false);

  const [usernameAnswer, setusernameAnswer] = useState(" ");
  const [iAMnotRobot, setAMnotRobot] = useState("I'm not a robot");
  function conditiononBlankOKbutton() {
    if (confirmLoginPage === "Official") {
      history.push("/Societypoint");
    } else {
      history.push("/Societypoint");
      history.push("/");
    }
  }
  function shouldBlur(e) {
    e.target.blur();
    setusernameAnswer(e.target.value);
    setverifyButtonisclick(false);
  }
  function shouldFocus(e) {
    e.target.focus();
  }
  function setinputanswer(e) {
    setusernameAnswer(e.target.value);
    setIsActive(false);
    // setIsActiveerror(false);
  }
  function verifyHuman(e) {
    setverifyButtonisclick(true);

    ResultOftwoNumvber = FirstNumber - SecondNumber;

    if (usernameAnswer !== `${ResultOftwoNumvber}`) {
      setAMnotRobot("You are not a Human ?");
      e.target.value = "";
    } else {
      setIsActive(true);
      setIsActiveanswerq(true);
    }
    setFirstNumber(Math.round(8 + (19 - 8) * Math.random()));
    setSecondNumber(Math.round(0 + (7 - 0) * Math.random()));
  }

  return (
    <>
      {/* {console.log(location.state.name)} */}
      {/* {location.state.name} */}
      <div className="blankstudentlogincontainer">
        <div className="blankcenterstudentlogincontainer">
          <div className="blankbelowstudentlogintopimage">
            <h1
              style={
                isActive === false
                  ? {
                      opacity: "0",
                      position: "absolute",
                      top: "-10000000000px",
                    }
                  : { opacity: "1" }
              }
            >
              Login Succefully
              <span className="errorExclamatorysign">
                <i class="far fa-check-circle"></i>
              </span>
            </h1>
            <div
              className="BlanktextareaInput"
              style={
                isActiveanswerq === true
                  ? {
                      opacity: "0",
                      position: "absolute",
                      top: "-10000000000px",
                    }
                  : { opacity: "1" }
              }
            >
              <h1
                style={
                  usernameAnswer !== `${ResultOftwoNumvber}` &&
                  usernameAnswer !== " " &&
                  verifyButtonisclick &&
                  usernameAnswer.length !== 0
                    ? { color: "red" }
                    : { color: "#7e8a77" }
                }
              >
                {iAMnotRobot}
              </h1>
              <input
                type="text"
                name="question"
                id="Question"
                autoComplete="off"
                placeholder={`What is ${FirstNumber} - ${SecondNumber} = ?`}
                style={
                  usernameAnswer !== `${ResultOftwoNumvber}` &&
                  usernameAnswer !== " " &&
                  verifyButtonisclick
                    ? {
                        color: "white",
                        border: "1px dashed red",
                        fontSize: "14px",
                      }
                    : {
                        color: "white",
                        border: "1px dashed rgb(221, 158, 41)",
                        fontSize: "14px",
                      }
                }
                onChange={setinputanswer}
                onMouseOut={shouldBlur}
                onMouseOver={shouldFocus}
              />
              {/* <div className="errorpositionrelativeblanktextarea">
                <div
                  className="blankerrorblanktextare"
                  style={
                    isActiveerror === false
                      ? { opacity: "0" }
                      : { opacity: "1" }
                  }
                >
                  Fill the text area !
                </div>
              </div> */}
              {/* rgb(221, 158, 41) */}
              <div className="blankVerifyHuman">
                <div id="blankOKButtonVerify" onClick={verifyHuman}>
                  Verify
                </div>
              </div>
            </div>
            <p
              style={
                isActive === false
                  ? {
                      opacity: "0",
                      position: "absolute",
                      top: "-10000000000px",
                    }
                  : { opacity: "1" }
              }
            >
              Dear {confirmLoginPage}, you have logged in sucessfully
            </p>
          </div>
          <div
            className="blankUsernameinputstudentlogin"
            style={
              isActive === false
                ? { opacity: "0", position: "absolute", top: "-10000000000px" }
                : { opacity: "1" }
            }
          >
            <div className="blankdivofgetotpbutton">
              <div id="blankOKButton" onClick={conditiononBlankOKbutton}>
                OK
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
