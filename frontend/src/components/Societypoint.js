import React from "react";
import SOC_DATA from "../SOC_DATA.json";

import "./SocietyPoint.css";
import { useState } from "react";

import { Link, useHistory } from "react-router-dom";

export default function Societypoint() {
  const [searchTerm, setSearchTerm] = useState("");

  const history = useHistory();

  return (
    <div className="society_container">
      <div>
        <h1>Society Point</h1>
      </div>
      <input
        type="text"
        placeholder="Search ..."
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      {SOC_DATA.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (
          val.soc_name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="SocietyButtonBox">
            <button
              className="society_box"
              onClick={() => history.push("/SocietyPage", {Socname: val.soc_name} )}
            >
              {val.soc_name}
            </button>
            {/* <img
              src={process.env.PUBLIC_URL + "/image/swgicon.jpeg"}
              alt="Image One"
            /> */}
          </div>
        );
      })}
    </div>
  );
}
