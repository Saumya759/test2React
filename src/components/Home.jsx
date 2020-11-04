import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import "../Styles/Home.css";

const Home = () => {
  return (
    <>
      <div className="front">
        <Row xs={1} md={1}>
          <Col>
            <Form.Control type="text" className="data" value="Data Analysis" />
          </Col>
          <Col>
            <Form.Control
              type="text"
              className="data"
              value="Today's weather"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
