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
    backgroundColor:"grey",
    width:"50%",
    height:"auto",
    border: "1px solid white",
    boxShadow: "50px 100px 180px grey",
    margin: "10px",
    align: "center"
};

const imagestyle={
    color:"wheat",
    backgroundColor:"white",
    width:"50%",
    height:"300px",
    border: "1px solid black",
    margin: "10px",
    boxShadow: "50px 100px 180px grey",
};

export default function Colslide(props){
    return(
        <div>
            <Container>
                <Row>
                    <Col style={nutstyle}>
                        <h3>Winners</h3>
                        <p>1st Prize:{props.name1}</p>
                        <p>2nd Prize:{props.name2}</p>
                        <p>3rd Prize:{props.name3}</p>
                    </Col>
                    <Col style={imagestyle}>
                        <img
                            className="d-block w-100"
                            src={props.image}
                            alt="slide"
                            style={newstyle}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
