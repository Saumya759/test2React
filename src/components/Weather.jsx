import React from "react";
import { Button } from "react-bootstrap";

const Weather = ({ selectTab2 }) => {
  return (
    <>
      <Button
        type="text"
        className="data"
        value="Today's weather"
        onClick={selectTab2}>Today's weather</Button>
    </>
  );
};

export default Weather;
