import React from "react";
import { Link } from "react-router-dom";
import ToggleButton from "./ToggleButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // MUI User Icon
import logo from "./Screenshot 2025-02-25 at 4.45.18 PM.png";

export default function SideBar() {
  return (
    <div className="flex justify-between items-center h-20 px-10 bg-[#f3df6d]">
      {/* Logo Section */}
      <div className="w-1/3">
        <img src={logo} className="h-full w-40" alt="logo" />
      </div>

      {/* Navigation Links */}
      <div className="w-1/3 h-full flex items-center justify-center text-white font-sans">
        <ul className="bg-[#f4df6d] gap-2 rounded text-black p-1 flex">
          <li className="flex justify-center p-2 rounded border border-black hover:bg-black hover:text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="flex justify-center p-2 rounded border border-black hover:bg-black hover:text-white">
            <Link to="add">Add Reading</Link>
          </li>
          <li className="flex justify-center p-2 rounded border border-black hover:bg-black hover:text-white">
            <Link to="dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>

      {/* Toggle Button and User Icon */}
      <div className="w-1/3 flex justify-end items-center ">
        <ToggleButton />
        <AccountCircleIcon className="text-black cursor-pointer hover:text-gray-700" fontSize="large" />
      </div>
    </div>
  );
}
