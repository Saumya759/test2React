import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "../Styles/Home.css";
import Data from "./Data";
import Weather from "./Weather";

const Home = () => {
  const [tab, setTab] = useState("Tab1");
  return (
    <>
      <div className="Main">
        <div className="front">
          <Row>
            <Col md={4}>
              <Col>
                <Row xs={1} md={1}>
                  <Col>
                    <Button
                      type="text"
                      className="data"
                      value="Data Analysis"
                      onClick={() => setTab("Tab2")}
                    >
                      Data Analysis
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Button
                  type="text"
                  className="data"
                  value="Today's weather"
                  onClick={() => setTab("Tab1")}
                >
                  Today's weather
                </Button>
              </Col>
            </Col>
            <Col md={8}>{tab === "Tab1" ? <Weather /> : <Data />}</Col>
          </Row>
        </div>
      </div>
    </>
  );
};
export default Home;
