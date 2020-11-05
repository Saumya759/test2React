import React from "react";
import { Form } from "react-bootstrap";

const Data = ({ selectTab1 }) => {
  return (
    <>
      <Form.Control
        type="text"
        className="data"
        value="Data Analysis"
        onClick={selectTab1}
      />
    </>
  );
};

export default Data;
