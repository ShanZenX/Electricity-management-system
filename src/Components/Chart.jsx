import React, { useContext, useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { DashboardContext } from "../contexts/DashboardContext";

export default function DataChart() {
  // const [allData, setAllData] = useState();
  const allData = useContext(DashboardContext);

  // const getData = () => {
  //   fetch("http://localhost:3006/ebData")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("Received data:", data);
  //       setAllData(data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className="h-full">
      {allData ? (
        <div className="flex justify-center items-center w-full">
          <BarChart
            width={800}
            height={550}
            series={[
              {
                data: allData.map((data, index) => {
                  return index > 0
                    ? data.number - allData[index - 1].number
                    : 0;
                }),
                label: "Number",
                id: "numberId",
                color: "#008b8b",
              },
            ]}
            xAxis={[
              { data: allData.map((data) => data.date), scaleType: "band" },
            ]}
          />
        </div>
      ) : (
        <div className="flex justify-center items-center h-full -mt-6">
          <h1 className="bg-gray-200 font-sans font-bold p-16 rounded-md">
            Please select a filter to view stored data
          </h1>
        </div>
      )}
    </div>
  );
}
