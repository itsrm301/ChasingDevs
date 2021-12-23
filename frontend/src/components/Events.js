import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CarouselItem } from "react-bootstrap";
//import Slides from "./Slides";
import Eventslide from "./Eventslide";
import Slideshow from "./Slideshow";

export default function Events() {
  return (
    <>
      <h2>Technology</h2>
      <Eventslide />
      <h2>Student's Welfare</h2>
      <Eventslide />
      <h2>Sports And Games</h2>
      <Eventslide />
      <h2>Social And Cultural</h2>
      <Eventslide />
      <h2>Results</h2>
      <h2>Events</h2>
      <Slideshow />
      <h2>General Championship</h2>
      <Slideshow />
      <h2>Inter IIT</h2>
      <Slideshow />
    </>
  );
}
