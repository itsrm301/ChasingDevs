import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Studentspoint from "./components/Studentspoint";
import Studentprofile from "./components/Studentprofile";
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
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  link,
} from "react-router-dom";

function App() {
  // const [click, setclick] = useState(true);
  // const handleclick = () => setclick(!click);
  return (
    <>
      <Router>
        <div className="body">
          <nav className="navbars">
            <ul>
              <li className="navitem navitem_top">
                <NavLink to="/" exact>
                  Home
                </NavLink>
              </li>
              <li className="navitem navitem_top">
                <NavLink to="/studentprofile" exact>
                  Student Profile
                </NavLink>
              </li>
              <li className="navitem navitem_top">
                <NavLink to="/events" exact>
                  Events(TSG)
                </NavLink>
              </li>
              <li className="navitem navitem_top">
                <NavLink to="/societypoint" exact>
                  Society Point
                </NavLink>
              </li>
              <li className="navitem navitem_top">
                <NavLink to="/newsbulletin" exact>
                  News Bulletin
                </NavLink>
              </li>
              <li className="navitem navitem_top">
                <NavLink to="/studentspoint" exact>
                  Students' Point
                </NavLink>
              </li>
              <li className="navitem navitem_top">
                <NavLink to="/quickinfo" exact>
                  Quick Info
                </NavLink>
              </li>
              <li className="navitem navitem_top">
                <NavLink to="/archives" exact>
                  Archives
                </NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/Studentprofile" exact>
              <Studentprofile />
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
            <Route path="/Studentspoint" exact>
              <Studentspoint />
            </Route>
            <Route path="/Quickinfo" exact>
              <Quickinfo />
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

            <Route path="/Blanktextarea" exact>
              <Blanktextarea />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
