import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className=" bg-slate-400 w-44 h-full flex flex-col items-center justify-center text-white">
        <ul className="bg-slate-600 rounded p-5  text-black">
          <li className="flex justify-center bg-gray-200 mb-2 p-2">
            <Link to="/">Home </Link>
          </li>
          <li className="flex justify-center bg-gray-200 mb-2 p-2">
            <Link to="add">Add Reading </Link>
          </li>
          <li className="flex justify-center bg-gray-200  p-2">
            <Link to="dashboard">Dashboard </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
