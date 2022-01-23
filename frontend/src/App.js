import "./App.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Societypoint from "./components/Societypoint";
import Events from "./components/Events";
import Newsbulletin from "./components/Newsbulletin";
import Quickinfo from "./components/Quickinfo";
import Archives from "./components/Archives";
import Calender from "./components/Calender";
import Studentlogin from "./components/Studentlogin";
import Officiallogin from "./components/Officiallogin";
import Otpverificationpage from "./components/Otpverificationpage";
import Blanktextarea from "./components/Blanktextarea";
import SocietyPage from "./components/SocietyPage";
import BillReimbursementPortal from "./components/BillReimbursementPortal";
import Career from "./Career"
import Student from "./Student";
import Grievances from "./components/Grievances";
import Addachievements from "./components/Addachievements";
// import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import OfficeBearers from "./components/OfficeBearers";
import OfficeStaffs from "./components/OfficeStaffs";
import Secrataries from "./components/Secrataries";
import StudentsProfile from "./components/StudentsProfile";
// import Button from "./components/Button";

function App() {
  const [click, setclick] = useState(true);
  const handleclick = () => setclick(!click);
  function IamClickingLinktwo() {
    window.open("https://www.instagram.com/aryanroy.tony?r=nametag");
  }
  return (
    <>
      <Router>
        {/* <Navbar /> */}

        <div className="body">
          <div className="navbarPositionFixed">
            <div className="defaultnav">
              <div
                className="navbar navbar-expand-lg navbar-dark bg-dark"
                style={{ backgroundColor: "black" }}
              >
                <a className="navbar-brand" href="#">
                  Navbar
                </a>
                <div className="collapse navbar-collapse navbars ">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active navitem navitem_top">
                      <NavLink to="/" exact>
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item navitem navitem_top">
                      <NavLink to="/StudentsProfile" exact>
                        Student Profile
                      </NavLink>
                    </li>
                    <li className="nav-item navitem navitem_top">
                      <NavLink to="/events" exact>
                        Events(TSG)
                      </NavLink>
                    </li>
                    <li className="nav-item navitem navitem_top">
                      <NavLink to="/societypoint" exact>
                        Society Point
                      </NavLink>
                    </li>
                    <li className="nav-item navitem navitem_top">
                      <NavLink to="/newsbulletin" exact>
                        News Bulletin
                      </NavLink>
                    </li>
                    <li className="nav-item navitem navitem_top">
                      <NavLink to="/studentspoint" exact>
                        Students' Point
                      </NavLink>
                    </li>
                    <li className="nav-item navitem navitem_top">
                      <NavLink to="/careerspoint" exact>
                        Careers' Point
                      </NavLink>
                    </li>
                    <li className="nav-item navitem navitem_top ">
                      <NavLink to="/quickinfo" exact>
                        Quick Info
                      </NavLink>
                    </li>
                    <li className="nav-item navitem navitem_top">
                      <NavLink to="/archives" exact>
                        Archives
                      </NavLink>
                    </li>
                    {/* <li className="nav-item navitem navitem_top">
                      <NavLink to="/profile" exact>
                        Profile
                      </NavLink>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="nav1050">
              <nav className="navbar  navbar-dark bg-dark ">
                <a className="navbar-brand" href="#">
                  Navbar
                </a>
                <div className="mainc">
                  <div className="navbar-expand navbars ">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item active navitem navitem_top">
                        <NavLink to="/" exact>
                          Home
                        </NavLink>
                      </li>
                      <li className="nav-item navitem navitem_top">
                        <NavLink to="/StudentsProfile" exact>
                          Student Profile
                        </NavLink>
                      </li>
                      <li className="nav-item navitem navitem_top">
                        <NavLink to="/events" exact>
                          Events(TSG)
                        </NavLink>
                      </li>
                      <li className="nav-item navitem navitem_top">
                        <NavLink to="/societypoint" exact>
                          Society Point
                        </NavLink>
                      </li>
                      <li className="nav-item navitem navitem_top">
                        <NavLink to="/newsbulletin" exact>
                          News Bulletin
                        </NavLink>
                      </li>
                      <li className="nav-item navitem navitem_top">
                        <NavLink to="/studentspoint" exact>
                          Students' Point
                        </NavLink>
                      </li>
                      <li className="nav-item navitem navitem_top">
                        <NavLink to="/careerspoint" exact>
                          Careers' Point
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="btn"
                    style={
                      ({ border: "1px solid red" },
                        click ? { top: "30px" } : { top: "150px" })
                    }
                  >
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarNavDropdown1"
                      aria-controls="navbarNavDropdown"
                      aria-expanded="true"
                      aria-label="Toggle navigation"
                      onClick={handleclick}
                      style={{ boxShadow: "none" }}
                    >
                      <span
                        style={
                          click
                            ? {
                              position: "absolute",
                              top: "-10px",
                              color: "white",
                            }
                            : {
                              position: "absolute",
                              top: "-1px",

                              fontSize: "25px",
                              color: "red",
                            }
                        }
                      >
                        {click ? "..." : "×"}
                      </span>
                      {/* <span className="navbar-toggler-icon"></span> */}
                    </button>
                  </div>
                </div>

                <div
                  className="collapse navbar-collapse x navbars"
                  id="navbarNavDropdown1"
                >
                  <ul className=" navbar-nav ml-auto ">
                    <li className="nav-item ml-auto navitem navitem_top">
                      <NavLink to="/quickinfo" exact>
                        Quick Info
                      </NavLink>
                    </li>
                    <li className="nav-item ml-auto navitem navitem_top">
                      <NavLink to="/archives" exact>
                        Archives
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="nav900">
              <nav className="navbar  navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                  Navbar
                </a>
                <div className="mainc">
                  <div className="navbar-expand navbars ">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item active navitem navitem_top">
                        <NavLink to="/" exact>
                          Home
                        </NavLink>
                      </li>
                      <li className="nav-item navitem navitem_top">
                        <NavLink to="/StudentsProfile" exact>
                          Student Profile
                        </NavLink>
                      </li>
                      <li className="nav-item navitem navitem_top">
                        <NavLink to="/events" exact>
                          Events(TSG)
                        </NavLink>
                      </li>
                      <li className="nav-item navitem navitem_top">
                        <NavLink to="/societypoint" exact>
                          Society Point
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="btn">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarNavDropdown2"
                      aria-controls="navbarNavDropdown"
                      aria-expanded="true"
                      aria-label="Toggle navigation"
                      onClick={handleclick}
                      style={{ boxShadow: "none" }}
                    >
                      <span
                        style={
                          click
                            ? {
                              position: "absolute",
                              top: "-10px",
                              color: "white",
                            }
                            : {
                              position: "absolute",
                              top: "-1px",

                              fontSize: "25px",
                              color: "red",
                            }
                        }
                      >
                        {click ? "..." : "×"}
                      </span>
                      {/* <span className="navbar-toggler-icon"></span> */}
                    </button>
                  </div>
                </div>
                <div
                  className="collapse navbar-collapse x navbars"
                  id={"navbarNavDropdown2"}
                >
                  <ul className=" navbar-nav ml-auto">
                    <li className="nav-item  ml-auto navitem navitem_top">
                      <NavLink to="/newsbulletin" exact>
                        News Bulletin
                      </NavLink>
                    </li>
                    <li className="nav-item  ml-auto navitem navitem_top">
                      <NavLink to="/studentspoint" exact>
                        Students' Point
                      </NavLink>
                    </li>
                    <li className="nav-item  ml-auto navitem navitem_top">
                      <NavLink to="/careerspoint" exact>
                        Careers' Point
                      </NavLink>
                    </li>
                    <li className="nav-item ml-auto navitem navitem_top">
                      <NavLink to="/quickinfo" exact>
                        Quick Info
                      </NavLink>
                    </li>
                    <li className="nav-item ml-auto navitem navitem_top">
                      <NavLink to="/archives" exact>
                        Archives
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="nav650">
              <nav className="navbar  navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                  Navbar
                </a>
                <div className="mainc">
                  <div className="navbar-expand navbars">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item active  navitem navitem_top">
                        <NavLink to="/" exact>
                          Home
                        </NavLink>
                      </li>
                      <li className="nav-item  navitem navitem_top">
                        <NavLink to="/StudentsProfile" exact>
                          Student Profile
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="btn">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarNavDropdown3"
                      aria-controls="navbarNavDropdown"
                      aria-expanded="true"
                      aria-label="Toggle navigation"
                      onClick={handleclick}
                      style={{ boxShadow: "none" }}
                    >
                      <span
                        style={
                          click
                            ? {
                              position: "absolute",
                              top: "-10px",
                              color: "white",
                            }
                            : {
                              position: "absolute",
                              top: "-1px",

                              fontSize: "25px",
                              color: "red",
                            }
                        }
                      >
                        {click ? "..." : "×"}
                      </span>
                      {/* <span className="navbar-toggler-icon"></span> */}
                    </button>
                  </div>
                </div>
                <div
                  className="collapse  navbar-collapse x navbars"
                  id="navbarNavDropdown3"
                >
                  <ul className=" navbar-nav ml-auto ">
                    <li className="nav-item ml-auto  navitem navitem_top">
                      <NavLink to="/events" exact>
                        Events(TSG)
                      </NavLink>
                    </li>
                    <li className="nav-item ml-auto  navitem navitem_top ">
                      <NavLink to="/societypoint" exact>
                        Society Point
                      </NavLink>
                    </li>
                    <li className="nav-item ml-auto  navitem navitem_top">
                      <NavLink to="/newsbulletin" exact>
                        News Bulletin
                      </NavLink>
                    </li>
                    <li className="nav-item ml-auto  navitem navitem_top">
                      <NavLink to="/studentspoint" exact>
                        Students' Point
                      </NavLink>
                    </li>
                    <li className="nav-item ml-auto  navitem navitem_top">
                      <NavLink to="/careerspoint" exact>
                        Careers' Point
                      </NavLink>
                    </li>
                    <li className="nav-item ml-auto  navitem navitem_top">
                      <NavLink to="/quickinfo" exact>
                        Quick Info
                      </NavLink>
                    </li>
                    <li className="nav-item ml-auto  navitem navitem_top">
                      <NavLink to="/archives" exact>
                        Archives
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="nav500">
              <nav className="navbar  navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                  Navbar
                </a>

                <div className="mainc">
                  <div className="navbar-expand navbars ">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item active navitem navitem_top">
                        <NavLink to="/" exact>
                          Home
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="btn">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarNavDropdown4"
                      aria-controls="navbarNavDropdown"
                      aria-expanded="true"
                      aria-label="Toggle navigation"
                      onClick={handleclick}
                      style={{ boxShadow: "none" }}
                    >
                      <span
                        style={
                          click
                            ? {
                              position: "absolute",
                              top: "-10px",
                              color: "white",
                            }
                            : {
                              position: "absolute",
                              top: "-1px",

                              fontSize: "25px",
                              color: "red",
                            }
                        }
                      >
                        {click ? "..." : "×"}
                      </span>
                      {/* <span className="navbar-toggler-icon"></span> */}
                    </button>
                  </div>
                </div>
                <div
                  className="collapse navbar-collapse x navbars"
                  id="navbarNavDropdown4"
                >
                  <ul className=" navbar-nav ml-auto">
                    <li className="nav-item ml-auto  navitem navitem_top">
                      <NavLink to="/StudentsProfile" exact>
                        Student Profile
                      </NavLink>
                    </li>
                    <li className="nav-item ml-auto  navitem navitem_top">
                      <NavLink to="/events" exact>
                        Events(TSG)
                      </NavLink>
                    </li>
                    <li className="nav-item ml-auto  navitem navitem_top">
                      <NavLink to="/societypoint" exact>
                        Society Point
                      </NavLink>
                    </li>
                    <li className="nav-item ml-auto  navitem navitem_top">
                      <NavLink to="/newsbulletin" exact>
                        News Bulletin
                      </NavLink>
                    </li>
                    <li className="nav-item ml-auto  navitem navitem_top">
                      <NavLink to="/studentspoint" exact>
                        Students' Point
                      </NavLink>
                    </li>
                    <li className="nav-item ml-auto  navitem navitem_top">
                      <NavLink to="/careerspoint" exact>
                        Careers' Point
                      </NavLink>
                    </li>
                    <li className="nav-item ml-auto  navitem navitem_top">
                      <NavLink to="/quickinfo" exact>
                        Quick Info
                      </NavLink>
                    </li>
                    <li className="nav-item ml-auto  navitem navitem_top">
                      <NavLink to="/archives" exact>
                        Archives
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="nav405">
              <nav className="navbar  navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                  Navbar
                </a>
                <div className="mainc">
                  <div className="btn">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarNavDropdown5"
                      aria-controls="navbarNavDropdown"
                      aria-expanded="true"
                      aria-label="Toggle navigation"
                      onClick={handleclick}
                      style={{ boxShadow: "none" }}
                    >
                      <span
                        style={
                          click
                            ? {
                              position: "absolute",
                              top: "-10px",
                              color: "white",
                            }
                            : {
                              position: "absolute",
                              top: "-1px",

                              fontSize: "25px",
                              color: "red",
                            }
                        }
                      >
                        {click ? "..." : "×"}
                      </span>
                      {/* <span className="navbar-toggler-icon"></span> */}
                    </button>
                  </div>
                </div>
                <div
                  className="collapse navbar-collapse navbars x"
                  id="navbarNavDropdown5"
                >
                  <ul className=" navbar-nav ml-auto">
                    <li className="nav-item active ml-auto navitem navitem_top ">
                      <NavLink to="/" exact>
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item ml-auto navitem navitem_top">
                      <NavLink to="/StudentsProfile" exact>
                        Student Profile
                      </NavLink>
                    </li>
                    <li className="nav-item ml-auto navitem navitem_top">
                      <NavLink to="/events" exact>
                        Events(TSG)
                      </NavLink>
                    </li>
                    <li className="nav-item ml-auto navitem navitem_top">
                      <NavLink to="/societypoint" exact>
                        Society Point
                      </NavLink>
                    </li>
                    <li className="nav-item ml-auto navitem navitem_top">
                      <NavLink to="/newsbulletin" exact>
                        News Bulletin
                      </NavLink>
                    </li>
                    <li className="nav-item ml-auto navitem navitem_top">
                      <NavLink to="/studentspoint" exact>
                        Students' Point
                      </NavLink>
                    </li>
                    <li className="nav-item ml-auto navitem navitem_top">
                      <NavLink to="/careerspoint" exact>
                        Careers' Point
                      </NavLink>
                    </li>
                    <li className="nav-item ml-auto navitem navitem_top">
                      <NavLink to="/quickinfo" exact>
                        Quick Info
                      </NavLink>
                    </li>
                    <li className="nav-item ml-auto navitem navitem_top">
                      <NavLink to="/archives" exact>
                        Archives
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          <Switch>
          <Route path="/Addachievements" exact>
              <Addachievements />
            </Route>
          <Route path="/Grievances" exact>
              <Grievances />
            </Route>
            <Route path="/Events" exact>
              <Events />
            </Route>
            <Route path="/Societypoint" exact>
              <Societypoint />
            </Route>
            <Route path="/Newsbulletin" exact>
              <Newsbulletin />
            </Route>

            <Route path="/Quickinfo" exact>
              <Quickinfo />
            </Route>
            <Route path="/Quickinfo/OfficeBearers" exact>
              <OfficeBearers />
            </Route>
            <Route path="/Quickinfo/OfficeStaffs" exact>
              <OfficeStaffs />
            </Route>
            <Route path="/Quickinfo/Secretaries" exact>
              <Secrataries />
            </Route>
            <Route path="/Archives" exact>
              <Archives />
            </Route>
            <Route path="/Calender" exact>
              <Calender />
            </Route>
            <Route path="/Studentlogin" exact>
              <Studentlogin />
            </Route>
            <Route path="/Officiallogin" exact>
              <Officiallogin />
            </Route>

            <Route path="/Otpverificationpage" exact>
              <Otpverificationpage />
            </Route>
            <Route path="/StudentsProfile" exact>
              <StudentsProfile />
            </Route>

            <Route path="/Blanktextarea" exact>
              <Blanktextarea />
            </Route>
            <Route path="/SocietyPage" exact>
              <SocietyPage />
            </Route>
            <Route path="/BillReimbursementPortal" exact>
              <BillReimbursementPortal />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/studentspoint" exact>
              <Student />
            </Route>
            <Route path="/careerspoint" exact>
              <Career />
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
