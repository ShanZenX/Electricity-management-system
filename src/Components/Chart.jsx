import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function DataChart({ data }) {
  return (
    <div className="h-full">
      {data ? (
        <div className="flex justify-center items-center w-full">
          <BarChart
            width={1200}
            height={550}
            series={[
              {
                data: data.map((data) => Number(data.number)),
                label: "Number",
                id: "numberId",
                color: "#008b8b",
              },
            ]}
            xAxis={[{ data: data.map((data) => data.date), scaleType: "band" }]}
          />
        </div>
      ) : (
        <div className="flex justify-center items-center h-full -mt-6">
          <h1 className="bg-gray-200 font-sans font-bold p-16 rounded-md">
            Please select a filter to view data{" "}
          </h1>
        </div>
      )}
    </div>
  );
}
