import React from "react";
import { Table } from "react-bootstrap";
import Graph from "./Graph";
import contacts from "../data.json";

const Data = () => {
  return (
    <>
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
    </>
  );
};
export default Data;
