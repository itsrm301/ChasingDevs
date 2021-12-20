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

export default function Slides(props){
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <h3>In A Nutshell</h3>
                        <p>Date:{props.date}</p>
                        <p>Time:{props.time}</p>
                        <p>Venue:{props.venue}</p>
                        <p>Reg. Deadline:{props.regdead}</p>
                        <p>Reg. Link:{props.reglink}</p>
                    </Col>
                    <Col>
                        <img
                            className="d-block w-100"
                            src={props.image}
                            alt="slide"
                            style={newstyle}
                        />
                    </Col>
                    <Col>
                        <h3>Description</h3>
                        <p>{props.des}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

