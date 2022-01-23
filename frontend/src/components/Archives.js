import React, { useEffect, useState } from "react";
import "./Archives.css";
import Events from "./ArchivesSubPage/Events";
import Gc from "./ArchivesSubPage/Gc"
import InterMeet from "./ArchivesSubPage/InterMeet";

export default function Archives() {

  const arr=[Events , Gc , InterMeet];
  let [page,setPage] = useState(arr[1]);

  function changeSubpage(e){
    const name=e.target.getAttribute('name');
    console.log(e.target.getAttribute('name'));
    if(name==="Event"){
      setPage(arr[0]);
    }
    else if(name==="GC"){
      // console.log("hellp");
      setPage(arr[1]);
    }
    else if(name==="InterMeet"){
      setPage(arr[2]);
    }
  }

  return (
    <div className="archive">
      <div className="archive_bg">
        <h1>A R C H I V E S</h1>
      </div>

      <div className="archive_options">
          <p onClick={changeSubpage}  name="Event" >Events</p>
          <p onClick={changeSubpage} name="GC" >Inter IIT Meet</p>
          <p onClick={changeSubpage}  name="InterMeet">General Championship</p>
      </div>

      <div className="archive_subpage">
        {page}
      </div>

    </div>
  );
}
