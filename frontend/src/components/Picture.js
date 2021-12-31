import React from 'react'
import {useHistory } from 'react-router-dom';

const imgstyle={
    height:"200px",
    width:"200px",
    margin:"25px 20px 20px 20px"
}

const divstyle={
  
    backgroundImage: 'url("https://media.istockphoto.com/photos/award-sparkling-background-picture-id1220754002?b=1&k=20&m=1220754002&s=170667a&w=0&h=pV5JKXJ7DmdJM8i662txIBFdG2pYrr-my4HlXqPFPNU=")',
    height:"100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }

export default function Picture() {
    const history = useHistory();
    function handleclickimage(){
        history.push("/Sports");
    }
    function handleclickimg(){
        history.push("/Social");
    }
    function handleimgonclick(){
        history.push("/Tech");
    }
    function handleresult(){
        history.push("/Result");
    }
    function handlestudent(){
        history.push("/Student");
    }
    return (
        <>
        <div classname="main" style={divstyle}>
            <h1 className="heading">Events</h1>
            <img id="quote1" src="https://www.azquotes.com/picture-quotes/quote-when-i-was-a-teenager-i-began-to-settle-into-school-because-i-d-discovered-the-extracurricular-morgan-freeman-10-24-55.jpg" alt="quote" />
            <img id="quote2" src="https://www.azquotes.com/picture-quotes/quote-the-extra-curricular-activity-in-which-i-was-most-engaged-debating-helped-shape-my-interests-joseph-stiglitz-87-22-09.jpg" alt="quote" />
      
            <div className="flex-container">
            <div onClick={handleclickimage}>
            
                <img src="https://cdn2.iconfinder.com/data/icons/gaming-flat-1/58/010_-_Sports_Games-512.png" alt="sports" style={imgstyle} /><br /><h4>Sports And Games</h4>
            
            </div>

            <div onClick={handleclickimg}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzFS6KS6sZ8_fWPE5UE6siXXVRggJGga-fh06juvjM8n2zSgDl2EBjqkLKRkjChUF_jpc&usqp=CAU" alt="cultural" style={imgstyle} /><br /><h4>Social And Cultural</h4>
            </div>

            <div onClick={handlestudent}><img src="https://media.giphy.com/media/f6zQxXIHb0hckdeMl7/giphy.gif" alt="cultural" style={imgstyle} /><br /><h4>Student's Welfare</h4></div>

            <div onClick={handleimgonclick}>
                <img src="https://media.istockphoto.com/vectors/digital-technology-and-engineering-digital-telecoms-concept-vector-vector-id1166372378?b=1&k=20&m=1166372378&s=612x612&w=0&h=y7tDUBs3JXcfujIxMlIp2tRep-j7u4N4yd8CMqN9VFw=" alt="cultural" style={imgstyle} /><br /><h4>Technology</h4>
            </div>

            <div onClick={handleresult}><img src="https://e7.pngegg.com/pngimages/1017/470/png-clipart-three-man-holding-trophy-illustration-computer-icons-scalable-graphics-library-icon-winner-miscellaneous-text-thumbnail.png" alt="cultural" style={imgstyle} /><br /><h4>Results</h4></div>
            </div>
        </div>
        </>
    )
}
