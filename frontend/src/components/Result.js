import React from "react";
import Slideshow from "./Slideshow";
const divstyle={
  
    backgroundImage: 'url("https://media.istockphoto.com/photos/award-sparkling-background-picture-id1220754002?b=1&k=20&m=1220754002&s=170667a&w=0&h=pV5JKXJ7DmdJM8i662txIBFdG2pYrr-my4HlXqPFPNU=")',
    height:"100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }
function Result(){
    return(
        <div classname="main" style={divstyle}>
        <div>
            <h1 className="heading">Results</h1>
            <br />
            <h3 className="subheading">Events</h3>
            <Slideshow />
            <br />
            <h3 className="subheading">General Championship</h3>
            <Slideshow />
            <br />
            <h3 className="subheading">Inter IIT</h3>
            <Slideshow />
        </div>
        </div>
    );
}

export default Result;