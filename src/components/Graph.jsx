import React from "react";
import { Line } from "react-chartjs-2";
import "../Styles/Graph.css";
import value from "../data.json";

const years = [];
const male = [];
const female = [];
value.map((d) => {
  let y = d.Year;
  let m = d.Male;
  let f = d.Female;
  years.push(y);
  male.push(parseInt(m));
  female.push(parseInt(f));
});

const Graph = () => {
  const data = {
    labels: years,
    datasets: [
      {
        label: "Female",
        data: female,

        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
      {
        label: "Male",
        data: male,
        // backgroundColor: [
        //   "rgba(255, 99, 132, 0.2)",
        //   "rgba(54, 162, 235, 0.2)",
        //   "rgba(255, 206, 86, 0.2)",
        //   "rgba(75, 192, 192, 0.2)",
        //   "rgba(153, 102, 255, 0.2)",
        //   "rgba(255, 159, 64, 0.2)",
        // ],
        borderColor: [
          "rgba(75,192,192,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="graph">
        <h5 className="header">Birth In Taiwan</h5>
        <p className="header">Source Ministry of the Interiror</p>
        <Line data={data} />
      </div>
    </>
  );
};
export default Graph;
