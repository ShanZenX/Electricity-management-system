import React from "react";

export default function DashBoardNav() {
  return (
    <div>
      <div className="flex w-full justify-center mt-5 mb-5 items-center">
        <nav className="p-2 bg-gray-200">
          <ul className="flex gap-2">
            <li className="p-2 bg-gray-800 text-white">
              <Link to=".">Chart</Link>
            </li>
            <li className="p-2 bg-gray-800 text-white">
              <Link to="table">Table</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
