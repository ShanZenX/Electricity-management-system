import React, { useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function DataChart() {
  const [chartData, setChartData] = useState();

  const getData = () => {
    fetch("http://localhost:3006/ebData")
      .then((res) => res.json())
      .then((data) => setChartData(data));
  };

  useEffect(() => getData(), []);
  return (
    <div>
      {chartData && (
        <BarChart
          width={900}
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
      )}
    </div>
  );
}
