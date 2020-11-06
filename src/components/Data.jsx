import React from "react";
import { Button } from "react-bootstrap";

const Data = ({ selectTab1 }) => {
  return (
    <>
      <Button
        type="text"
        className="data"
        value="Data Analysis"
        onClick={selectTab1}>Data Analysis</Button>
      
    </>
  );
};

export default Data;
