import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CarouselItem } from "react-bootstrap";
import Slides from "./Slides";

export default function Eventslide() {
  return (
    <>
      <Carousel>
        <CarouselItem>
          <Slides date="2nd January 2022" time="12 Noon" venue="Netaji Auditorium" regdead="29th December 2021" reglink="https://docs.google.com/forms/d/e/1FAIpQLSc_sKn9FkWV2DxHmLkJA5Bbq5kNkaUhryIDIb2nJrySUZ9D2A/viewform" 
          image="https://scontent.fixr3-2.fna.fbcdn.net/v/t39.30808-6/266503475_4627841353966433_1789055839495748440_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=8zx506H2s3cAX9qCsPO&_nc_ht=scontent.fixr3-2.fna&oh=00_AT9rSH7R93MdicljTOkkPvtAEmWWb0FjrTXFwLEoSJ0ViQ&oe=61C4A5B9" des="“Logos are visual representations of what one stands for”
          Hello Everyone. Technology Students' Gymkhana is proud to organize a Logo-making competition to decide the official logo for the Social and Cultural Committee, Technology Students' Gymkhana. Channel your inner artist to create a logo that represents the Social and Cultural Committee in the best possible form. We highly encourage you to scroll through our Facebook page Cultural, IIT Kharagpur to get a better understanding of what we do and how we contribute to the culture of the Indian Institute of Technology, Kharagpur."
          />
        </CarouselItem>
        <CarouselItem>
          <Slides date="2nd January 2022" time="12 Noon" venue="Netaji Auditorium" regdead="1st January 2022" reglink="https://docs.google.com/forms/d/e/1FAIpQLScLVrqed_yGyY0dNVhQdR8IOceSALnu6j4lbRU_I0Op71B_ng/viewform" 
          image="https://scontent.fixr3-1.fna.fbcdn.net/v/t39.30808-6/p843x403/268543200_4633911213359447_9166099263013436206_n.jpg?_nc_cat=101&_nc_rgb565=1&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=MYMHuD3kuAcAX970669&tn=09A5ANVW3M_RE1Rj&_nc_ht=scontent.fixr3-1.fna&oh=00_AT87aRpeynNJrPsaN0j4MCGbjvrqzht6DfezYpYs9X6aBw&oe=61C32CA5" des="Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… It remembers little things, long after you have forgotten everything.Pictures encapsulate moments in a click which is documented for eternity. Every photographed snapshot entails a story of what goes on in front and behind the lens.As it is said taking pictures is savoring life, so bring out cameras to capture the subtle presence around you.Every photographed snapshot entails a story of what goes on in front and behind the lens.As it is said taking pictures is savoring life, so bring out cameras to capture the subtle presence around you."
          />
        </CarouselItem>
      </Carousel>
    </>
  );
}