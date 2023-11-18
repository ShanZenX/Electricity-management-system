import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="bg-gray-200 w-44 h-full flex flex-col items-center justify-center text-white">
        <ul className="bg-gray-800  w-32 rounded p-2 m-1 hover:bg-gray-800 cursor-pointer">
          <Link to="/">
            <li className="flex justify-center">Home</li>
          </Link>
        </ul>
        <ul className="bg-gray-800 w-32 rounded p-2 m-1 hover:bg-gray-800 cursor-pointer">
          <Link to="add">
            <li className="flex justify-center">Add Reading</li>
          </Link>
        </ul>
        <ul className="bg-gray-800 w-32 rounded p-2 m-1 hover:bg-gray-800 cursor-pointer">
          <Link to="dashboard">
            <li className="flex justify-center">Dashboard</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
