import React, { useEffect, useState } from "react";
import { Row, Col, ListGroup, Table } from "react-bootstrap";
import "../Styles/Home.css";
import Data from "./Data";
import Weather from "./Weather";
import contacts from "../data.json";
import Graph from "./Graph";
import Weathers from "./Weathers";

const Home = () => {
  const [isDisabled1, disableTabs1] = useState(false);
  const [isDisabled2, disableTabs2] = useState(true);

  const selectTab1 = () => {
    disableTabs1(!isDisabled1);
  };
  const selectTab2 = () => {
    disableTabs2(!isDisabled2);
  };
  useEffect(() => {
    if (isDisabled1) {
      disableTabs2(false);
    }

    if (isDisabled2) {
      disableTabs1(false);
    }
  }, [isDisabled1, isDisabled2]);
  return (
    <>
      <div className="Main">
        <div className="front">
          <Row xs={1} md={1}>
            <Col>
              <Row xs={1} md={1}>
                <Col>
                  <Data selectTab1={selectTab1} />
                </Col>
              </Row>
            </Col>
            <Col>
              <Weather selectTab2={selectTab2} />
            </Col>
          </Row>
        </div>

        {isDisabled1 && (
          <div className="tabcontent1">
            <div className="template">Data Analysis</div>

            <Table className="table" striped hover>
              <thead>
                <tr className="head">
                  <td colspan="3">Birth in Taiwan</td>
                </tr>
                <tr>
                  <th className="yearhead">Year</th>
                  <th>Male</th>
                  <th>Female</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((e) => {
                  return (
                    <tr key={e.id}>
                      <td className="year">{e.Year}</td>
                      <td>{e.Male}</td>
                      <td>{e.Female}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <div>
              <Graph />
            </div>
          </div>
        )}
        {isDisabled2 && (
          <div className="tabcontent2">
            <div className="template">Today's weather</div>
            <Weathers />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
