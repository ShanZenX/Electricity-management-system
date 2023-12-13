import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Filter from "./Filter";
import { useState } from "react";
import { DashboardContext } from "../contexts/DashboardContext";
import EntryCount from "./EntryCount";
import DataChart from "./Chart";
import DataTable from "./Table";

export default function Dashboard() {
  const [data, setData] = useState("");

  const handleFilterData = (data) => {
    setData(data);
    console.log(data);
  };
  return (
    <DashboardContext.Provider value={data}>
      <div className="w-full h-screen flex flex-col">
        <div className="flex h-4/12  m-2 rounded ">
          {/* <EntryCount title={"hi   hello hello   "} bgcolor="white" />
          <EntryCount title={"hi   hello hello   "} bgcolor="white" />
          <EntryCount title={"hi   hello hello   "} bgcolor="white" />
          <EntryCount title={"hi   hello hello   "} bgcolor="white" /> */}

          <Outlet />
        </div>
        <div className="h-full flex flex-col">
          <div className="h-1/6 items-center flex">
            <Filter filteredData={handleFilterData} />
          </div>
          <div className="h-5/6 flex">
            <div className="w-3/6">{<DataChart />}</div>
            <div className="w-3/6">
              <DataTable />
            </div>
          </div>
        </div>
      </div>
    </DashboardContext.Provider>
  );
}
