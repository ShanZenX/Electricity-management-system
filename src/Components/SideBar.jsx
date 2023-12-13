import React from "react";
import { Link } from "react-router-dom";
import ToggleButton from "./ToggleButton";

export default function SideBar() {
  return (
    <div className="flex flex-col justify-center items-center h-full ">
      <div className="  w-44 h-full flex flex-col items-center justify-center text-white font-sans">
        <ul className="bg-gray-600 rounded p-5  text-black">
          <li className="flex justify-center bg-gray-200 mb-2 p-2 rounded">
            <Link to="/">Home </Link>
          </li>
          <li className="flex justify-center bg-gray-200 mb-2 p-2 rounded">
            <Link to="add">Add Reading </Link>
          </li>
          <li className="flex justify-center bg-gray-200  p-2 rounded">
            <Link to="dashboard">Dashboard </Link>
          </li>
        </ul>
      </div>
      <div>
        <ToggleButton />
      </div>
    </div>
  );
}
