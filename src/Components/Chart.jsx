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
    <div className="h-full">
      {chartData ? (
        <div className="flex justify-center items-center w-full">
          <BarChart
            width={1200}
            height={550}
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
        <div className="flex justify-center items-center h-full -mt-6">
          <h1 className="bg-gray-200 font-sans font-bold p-16 rounded-md">
            Uh-oh! Our server is on a break. Check back later!
          </h1>
        </div>
      )}
    </div>
  );
}
