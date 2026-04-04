import React from 'react'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-cyan-800  shadow-lg  flex flex-col">
      <h2 className="text-2xl font-bold mb-8 text-white tracking-wide p-6 border-b-1 border-blue-900 shadow-lg">Finance</h2>

      <ul className="space-y-4  px-6">
        <li className="hover:text-blue-500 font-semibold flex gap-2   p-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 
              ${isActive
                ? " text-cyan-200 font-bold"
                : " text-white font-semibold hover:text-white"
              }`}
          >
         <i className="fa-solid fa-house"></i>    Overview
          </NavLink>
        </li>
        <li className="hover:text-blue-500 cursor-pointer  p-2">
          <NavLink
            to="/transactions"
            className={({ isActive }) =>
              `flex items-center gap-3 
              ${isActive
                ? " text-cyan-200 font-bold"
                : " text-white font-semibold hover:text-white"
              }`
            }
          >
         <i className="fa-solid fa-list"></i>     Transactions
          </NavLink>
        </li>
        <li className="hover:text-blue-500 cursor-pointer p-2">
          <NavLink
            to="/insights"
            className={({ isActive }) =>
              `flex items-center gap-3 
              ${isActive
                ? " text-cyan-200 font-bold"
                : " text-white font-semibold hover:text-white"
              }`
            }
          >
          <i className="fa-solid fa-chart-line"></i>   Insights
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;