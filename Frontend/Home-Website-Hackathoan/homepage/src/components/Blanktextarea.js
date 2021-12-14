import React from "react";
import "./Blanktextarea.css";
import { useLocation, useHistory } from "react-router-dom";
export default function Blanktextarea() {
  //   const navigate = useNavigate();
  const history = useHistory();
  const location = useLocation();
  const confirmStudentLoginPage = location.state.itIsStudentLoginPage;
  function conditiononBlankOKbutton() {
    if (confirmStudentLoginPage === "studentloginpage") {
      history.push("/");
    }
    // if (location.state.name === "Otpverificationpage") {
    //   navigate("/Otpverificationpage");
    // }
  }
  return (
    <>
      {/* {console.log(location.state.name)} */}
      {/* {location.state.name} */}
      <div className="blankstudentlogincontainer">
        <div className="blankcenterstudentlogincontainer">
          <div className="blankbelowstudentlogintopimage">
            <h1>
              Login Succefully<span className="errorExclamatorysign"></span>
            </h1>
            <p>Dear student, you have logged in sucessfully</p>
          </div>
          <div className="blankUsernameinputstudentlogin">
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
