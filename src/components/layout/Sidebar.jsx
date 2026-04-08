import React from 'react'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-[#111827] shadow-lg  flex flex-col">
      <h2 className="text-2xl font-bold mb-8 text-white tracking-wide p-6 border-b-1 border-blue-900 shadow-lg">Finance</h2>

      <ul className="space-y-4  px-6">
        <li >
          <NavLink
            to="/"
             className={({ isActive }) =>
          `flex items-center gap-3 p-3 rounded-lg transition-all
          ${isActive
            ? "bg-[#1F2937] text-cyan-400" 
            : "text-gray-400 hover:bg-[ #0F172A] hover:text-white"
          }`
        }
          >
         <i className="fa-solid fa-house"></i>    Overview
          </NavLink>
        </li>
        <li >
          <NavLink
            to="/transactions"
             className={({ isActive }) =>
          `flex items-center gap-3 p-3 rounded-lg transition-all
          ${isActive
            ? "bg-[#1F2937] text-cyan-400"
            : "text-gray-400 hover:bg-[#0F172A] hover:text-white"
          }`
        }
          >
         <i className="fa-solid fa-list"></i>     Transactions
          </NavLink>
        </li>
        <li >
          <NavLink
            to="/insights"
             className={({ isActive }) =>
          `flex items-center gap-3 p-3 rounded-lg transition-all
          ${isActive
            ? "bg-[#1F2937] text-cyan-400"
            : "text-gray-400 hover:bg-[#0F172A] hover:text-white"
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