import React, { useContext } from "react";
import { Appcontext } from "../context/Appcontext";

const RoleSwitcher = () => {

  const {role, setRole} = useContext(Appcontext)

  return (
    <div className="flex items-center gap-2">
      
      <label className="text-sm text-gray-600 font-medium">
        Role:
      </label>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>

    </div>
  );
};

export default RoleSwitcher;