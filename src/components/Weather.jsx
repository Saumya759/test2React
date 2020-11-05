import React from "react";
import { Form } from "react-bootstrap";

const Weather = ({ selectTab2 }) => {
  return (
    <>
      <Form.Control
        type="text"
        className="data"
        value="Today's weather"
        onClick={selectTab2}
      />
    </>
  );
};

export default Weather;
