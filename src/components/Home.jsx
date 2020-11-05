import React, { useState } from "react";
import { Row, Col, Form,Container} from "react-bootstrap";
import "../Styles/Home.css";

const Home = () => {
  const [isDisabled1, disableTabs1] = useState(false);
  const [isDisabled2, disableTabs2] = useState(false);

  const selectTab1 = () => {
    disableTabs1(!isDisabled1);
  };
  const selectTab2 = () => {
    disableTabs2(!isDisabled2);
  };

  return (
    <>
      <div className="Main">
        <div className="front">
          <Row xs={1} md={1}>
            <Col>
              <Form.Control
                type="text"
                className="data"
                value="Data Analysis"
                onClick={selectTab1}
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                className="data"
                value="Today's weather"
                onClick={selectTab2}
              />
            </Col>
          </Row>
        </div>

        {isDisabled1 && (
          <div class="tabcontent">
            <div class="template">Data Analysis</div>
          </div>
        )}
        {isDisabled2 && (
          <div class="tabcontent">
            <div class="template">Today's weather</div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
