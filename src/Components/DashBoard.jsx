import React from "react";
import Filter from "./Filter";

export default function DashBoard() {
  return (
    <div className="w-full  h-screen flex flex-col">
      <div className="w-full h-full flex justify-center items-center">
        <Filter />
      </div>
    </div>
  );
}
