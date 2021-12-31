import React from "react";
import "./Events.css"
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
  } from "react-router-dom";
import Sports from "./Sports";
import Picture from "./Picture";
import Social from "./Social";
import Tech from "./Tech";
import Student from "./Student";
import Result from "./Result";


export default function Events(){
    return (
        <>
        <Router>
        <Switch>
            
            <Route path="/Result" exact>
                <Result  />
            </Route>
            <Route path="/Student" exact>
                <Student  />
            </Route>
            <Route path="/Sports" exact>
                <Sports  />
            </Route>
            <Route path="/Social" exact>
                <Social  />
            </Route>
            <Route path="/Tech" exact>
                <Tech  />
            </Route>
            <Route path="/" exact>
                <Picture  />
            </Route>
            <Redirect to="/" />   
        </Switch>
        </Router>
        </>
    );
}