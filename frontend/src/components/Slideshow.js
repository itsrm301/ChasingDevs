import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CarouselItem } from "react-bootstrap";
import Colslide from "./Colslide";


export default function twocolslideCarousel() {
  return (
    <>
      <Carousel>
        <CarouselItem>
          <Colslide name1="Sachin Vinayak S" name2="Jayatee Srivastava" name3="Pritam Mallick"  image="https://scontent.frdp4-1.fna.fbcdn.net/v/t39.30808-6/p843x403/262357025_4570569349693634_6786887930929831620_n.jpg?_nc_cat=107&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=54tTaVZPJO8AX8-r_ng&tn=09A5ANVW3M_RE1Rj&_nc_ht=scontent.frdp4-1.fna&oh=00_AT-cAbpqDtRcOJRrkGzvHHxkX-ehK_9seXVgmCP7DkU7HQ&oe=61D18450" 
          />
        </CarouselItem>
        <CarouselItem>
          <Colslide name1="IIT Delhi" name2="IIT Roorkee" name3="IIT Kharagpur"  image="https://scontent.fixr3-2.fna.fbcdn.net/v/t1.6435-9/p843x403/48412671_2153556291331381_5823630127552004096_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=zhLo-_OSsZ0AX85FX80&_nc_ht=scontent.fixr3-2.fna&oh=00_AT9ZivVn8QO_n0WHEUzJ4HqNsRoDW2Dvkte-o31zTZmamA&oe=61E7B956" 
          />
        </CarouselItem>
      </Carousel>
    </>
  );
}
