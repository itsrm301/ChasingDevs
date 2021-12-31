import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Eventslide from "./Eventslide";
import Cardslider from "./Cardslider";

const divstyle={
  
    backgroundImage: 'url("https://media.istockphoto.com/photos/award-sparkling-background-picture-id1220754002?b=1&k=20&m=1220754002&s=170667a&w=0&h=pV5JKXJ7DmdJM8i662txIBFdG2pYrr-my4HlXqPFPNU=")',
    height:"100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }

function Sports(){
    return(
        <div classname="main" style={divstyle}>
            <div>
            <h1 className="heading">Sports And Games</h1>
            <br />
            <Eventslide />
            <br />
            <Cardslider images="https://scontent.fixr3-2.fna.fbcdn.net/v/t1.6435-9/67719442_2264180673896577_1431387680632995840_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=deQT1yoDGqkAX9lksy4&tn=09A5ANVW3M_RE1Rj&_nc_ht=scontent.fixr3-2.fna&oh=00_AT_1tioQFRgWEgLXzI_PRzaawZu-52xhVrXXoboTl49TbQ&oe=61EC05D1" 
            image1="https://scontent.fixr3-2.fna.fbcdn.net/v/t1.6435-9/66895585_2264180720563239_5265696090342031360_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=7RfUQyK57S8AX-yY4h1&_nc_ht=scontent.fixr3-2.fna&oh=00_AT9tlILzLZDY6UlJBhhyDBsUZTh48VWz7FbiFpp6paq-hA&oe=61EBEC93"
            image2="https://scontent.fixr3-2.fna.fbcdn.net/v/t1.6435-9/67123837_2264182517229726_2657802161643061248_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=SbmLDqV3ShEAX8GnVBF&_nc_ht=scontent.fixr3-2.fna&oh=00_AT-2el5nC5u3Xv0ytEc3WlsbfY-T2mnDscu6B-pGzakrPw&oe=61E8C608"
            image3="https://scontent.fixr3-1.fna.fbcdn.net/v/t1.6435-9/54255329_2173864472928198_554360130498461696_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=k7PTVvLFFYYAX8In0Kn&_nc_ht=scontent.fixr3-1.fna&oh=00_AT-uhRq44DeDiIzHbsouD1iWSKXerqkRsfnOLXDqRjr85g&oe=61E8E0D7"
            />
            </div>
        </div>
    );
}

export default Sports;