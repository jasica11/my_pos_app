import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-1/4 min-h-screen p-4">
      <h1 className="text-xl font-bold mb-6 text-yellow-400">My POS App 📳</h1>
      <nav>
        <ul className="cursor-pointer">
          <li className="mb-2">
            <NavLink to="/" className="flex items-center">
              Raw Material Management
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink to="/purchase" className="flex items-center">
              Purchase Management
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink to="/reports" className="flex items-center">
              Reports Management
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
