import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const picstyle={
  height:"280px",
  width:"480px",
  padding:"10px"
};

const carstyle={
  padding:"50px"
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Cardslider(props){
  return(
  <div style={carstyle}>
    <Carousel responsive={responsive}>
      <div><img src={props.images} alt="image1" style={picstyle} /></div>
      <div><img src={props.image1} alt="image2" style={picstyle}  /></div>
      <div><img src={props.image2} alt="image3" style={picstyle}  /></div>
      <div><img src={props.image3} alt="image4" style={picstyle}  /></div>
    </Carousel>
  </div>
  );
}
