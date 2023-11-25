import React, { useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function DataChart() {
  const [chartData, setChartData] = useState();

  const getData = () => {
    fetch("http://localhost:3006/ebData")
      .then((res) => res.json())
      .then((data) => setChartData(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => getData(), []);
  return (
    <div>
      {chartData ? (
        <div className="flex justify-center items-center w-full overflow-scroll">
          <BarChart
            width={1200}
            height={600}
            series={[
              {
                data: chartData.map((data) => Number(data.number)),
                label: "Number",
                id: "numberId",
                color: "#008b8b",
              },
            ]}
            xAxis={[
              { data: chartData.map((data) => data.date), scaleType: "band" },
            ]}
          />
        </div>
      ) : (
        <div className="flex justify-center items-center h-full">
          <h1>Search for the Reading</h1>
        </div>
      )}
    </div>
  );
}
