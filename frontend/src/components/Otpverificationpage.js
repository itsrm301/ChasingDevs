import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import "./Otpverificationpage.css";

export default function Otpverificationpage() {
  const formatNumber = (number) => `0${number}`.slice(-2);
  const history = useHistory();
  const location = useLocation();
  const enteredEmailadress = location.state.nameofEmail;
  const actualotp=location.state.otp;
  const getRemaining = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time - mins * 60;
    return { mins: formatNumber(mins), secs: formatNumber(secs) };
  };
  const [remainingSecs, setRemainingSecs] = useState(10);
  const [againotpreminder, setagainotpreminde] = useState(
    `we’ve sent a verification code to your email: ${enteredEmailadress}`
  );
  const [isActive, setIsActive] = useState(false);
  const { mins, secs } = getRemaining(remainingSecs);
  let time = `${mins}:${secs}`;

  const [userOtp, setuserOtp] = useState("");
  function setuserOtpfun(e) {
    setuserOtp(e.target.value);
    setIsActive(false);
  }
  function conditionLoginbutton() {
 console.log(userOtp,actualotp);
    if (userOtp === " ") {
      setIsActive(true);
    } else if (userOtp.length === 0) {
      setIsActive(true);
    } else if(actualotp==userOtp){
        history.push("/Blanktextarea", {
        whichLoginpage: "student",
      });
    }else{
      console.log("hey hey budhhu banaya");
    }
  }
  function reset() {
    setRemainingSecs(10);
    setagainotpreminde(
      `Again a verification code is sent to your email: ${enteredEmailadress}`
    );
    // console.log("a");
    // setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (remainingSecs !== 0) {
      interval = setInterval(() => {
        setRemainingSecs((remainingSecs) => remainingSecs - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [remainingSecs]);
  function shouldBlur(e) {
    e.target.blur();
  }
  function shouldFocus(e) {
    e.target.focus();
  }
  return (
    <>
      {" "}
      <div className="otpstudentlogincontainer">
        <div className="otpcenterstudentlogincontainer">
          <div className="otpstudentlogintopimage">
            <img
              src={process.env.PUBLIC_URL + "/image/logintopimage.jpg"}
              alt="Image One"
            />{" "}
          </div>
          <div className="otpusercredential">
            <div className="otpusercreditname">
              <div className="otpwhitecorrectsignimage">
                <i className="far fa-check-circle otptickimage"></i>
              </div>

              {/* <div className="otpwrittennameusercredential">user credentials</div> */}
            </div>
            <div className="otpusercredential_line"></div>
            <div className="otpotpverificationtwo">2</div>
          </div>
          <div className="otpnamingverification">
            <div id="userinsidenamingverification">user credentials</div>
            <div id="otpinsidenamingverification">OTP verifiaction</div>
          </div>
          <div className="otpparaaboveenterOTP">
            <p>{againotpreminder}</p>
          </div>
          <div className="otpUsernameinputstudentlogin">
            <h5>Enter OTP</h5>
            <i className="fas fa-lock otplock_logo"></i>
            <div className={secs !== "00" ? "otptimer" : "OtpOpacityZero"}>
              {time}
            </div>
            <div
              className={
                secs === "00" ? "otptimer resendhover" : "OtpOpacityZeroresend"
              }
              onClick={reset}
            >
              Resend
            </div>
            <input
              type="number"
              name="email"
              id="EMAIL"
              autocomplete="off"
              placeholder="One time password = ?"
              style={{ color: "white", border: "1px dashed rgb(221, 158, 41)" }}
              onChange={setuserOtpfun}
              onMouseOut={shouldBlur}
              onMouseOver={shouldFocus}
            />
          </div>
          <div className="otperrorpositionrelative">
            <div
              className="otpblankerror"
              style={isActive === true ? { opacity: "1" } : { opacity: "0" }}
            >
              Fill the text area !
            </div>
          </div>
          <div className="otpdivofgetotpbutton">
            <div
              id="GetOTPButton"
              title="click here for Login."
              onClick={conditionLoginbutton}
            >
              Login
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
