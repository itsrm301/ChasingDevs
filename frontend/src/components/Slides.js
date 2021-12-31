import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const newstyle={
    padding: "10px",
    border: "1px solid white",
    height: "300px",
    width: "300px"
};

const nutstyle={
    color:"wheat",
    backgroundColor:"rgb(40,40,40)",
    width:"33%",
    height:"auto",
    border: "10px solid white",
    boxShadow: "50px 100px 180px grey",
    margin: "10px"
};

const colimg={
    
    backgroundColor:"black",
    width:"33%",
    height:"auto",
    border: "10px solid white",
    padding:"25px 25px 25px 25px"
};

export default function Slides(props){
    return(
        <div>
            <Container>
                <Row>
                    <Col style={nutstyle}>
                        <h3>In A Nutshell</h3>
                        <p>Date:{props.date}</p>
                        <p>Time:{props.time}</p>
                        <p>Venue:{props.venue}</p>
                        <p>Reg. Deadline:{props.regdead}</p>
                        <p><a href={props.reglink}>Registration Link</a></p>
                    </Col>
                    <Col style={colimg}>
                        <img
                            className="d-block w-100"
                            src={props.image}
                            alt="slide"
                            style={newstyle}
                        />
                    </Col>
                    <Col style={nutstyle}>
                        <h3>Description</h3>
                        <p>{props.des}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

