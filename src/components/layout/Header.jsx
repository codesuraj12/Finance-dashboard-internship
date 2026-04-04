import React, { useContext, useState } from 'react'
import RoleSwitcher from '../RoleSwitcher.jsx'
import { Appcontext } from '../../context/Appcontext.jsx';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';


const Header = () => {

  const { role, setRole } = useContext(Appcontext)

  const location = useLocation();

  // title change logic
  const gettitle = () => {
    switch (location.pathname) {
      case "/":
        return "Overview";

      case "/transactions":
        return "Transactions";
      case "/insights":
        return "Insights";
      default:
        return "Dashboard";
    }
  }

  const [menuopen, setMenuopen] = useState(false)

  return (
    <>
    <div className="bg-white flex justify-between items-center border-b border-gray-300 p-6  ">

         <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setMenuopen(!menuopen)}
        >
        <i class="fa-solid fa-bars"></i>
        </button>
      <h1 className="text-2xl font-bold">{gettitle()}</h1>
      <RoleSwitcher role={role} setRole={setRole} />
    </div>

  {menuopen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          {/* Sidebar */}
          <div className="w-64 h-full">
            <Sidebar />
          </div>
          {/* Backdrop — click karo toh close */}
          <div
            className="flex-1 bg-black/40"
            onClick={() => setMenuopen(false)}
          />
        </div>
      )}

    </>
  );
};

export default Header;