import React from "react";
import Navbar from "./Navbar";
import Circularnav from "./Circularnav";
import Description from "./Description";
import SlideshowNews from "./SlideshowNews";
import './Newsbulletin.css'

export default function Newsbulletin() {
  return (<div style={{background : "black"}}>
    {/* <Navbar/> */}
    <Circularnav/>
    <    SlideshowNews
  interval={3000}
  images={[
    './imge/img1.jpg',
    './imge/img2.jpg',
    './imge/img3.jpg',
    './imge/img4.jpg',
    './imge/img5.jpg',
    './imge/img1.jpg'
  ]} 
  />
    
    <Description />

        </div>);
}
