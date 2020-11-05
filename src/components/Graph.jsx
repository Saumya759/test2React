import React from "react";
import { Line } from "react-chartjs-2";

const Graph = () => {
  const data = {
    labels: ["2007", "2008", "2009", "2010", "2011", "2012", "2013"],
    datasets: [
      {
        label: "Female",
        data: [12, 19, 3, 5, 2, 3],
        // backgroundColor: [
        //     'rgba(255, 99, 132, 0.2)',
        //     'rgba(54, 162, 235, 0.2)',
        //     'rgba(255, 206, 86, 0.2)',
        //     'rgba(75, 192, 192, 0.2)',
        //     'rgba(153, 102, 255, 0.2)',
        //     'rgba(255, 159, 64, 0.2)'
        // ],
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
        data: [15, 20, 6, 2, 4, 9],
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
      <div>
        <h5>Birth In Taiwan</h5>
        <p>Source Ministry of the Interiror</p>
        <Line data={data} />
      </div>
    </>
  );
};
export default Graph;
