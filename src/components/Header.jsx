import React from "react";
import { FaBell, FaPlus, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 shadow bg-white">
      <div className="text-2xl font-bold text-blue-500">Dashboard</div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <FaSearch />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-1 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <FaBell className="text-gray-600" />
        <img
          src="https://i.pravatar.cc/30"
          alt="user"
          className="w-8 h-8 rounded-full"
        />
        <button className="bg-blue-500 text-white p-2 rounded-full">
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default Header;
