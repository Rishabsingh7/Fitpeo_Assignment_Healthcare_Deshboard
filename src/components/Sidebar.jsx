import React from "react";
import { MdDashboard, MdHistory, MdCalendarToday, MdEventAvailable, MdBarChart, MdChat, MdSupportAgent, MdSettings } from "react-icons/md";

const Sidebar = () => {
  const links = [
    { name: "Dashboard", icon: <MdDashboard /> },
    { name: "History", icon: <MdHistory /> },
    { name: "Calendar", icon: <MdCalendarToday /> },
    { name: "Appointments", icon: <MdEventAvailable /> },
    { name: "Statistics", icon: <MdBarChart /> },
    { name: "Chat", icon: <MdChat /> },
    { name: "Support", icon: <MdSupportAgent /> },
    { name: "Setting", icon: <MdSettings /> },
  ];

  return (
    <div className="w-[250px] bg-white shadow h-screen p-6">
      <h2 className="text-2xl font-bold mb-6 text-sky-500">
        Health<span className="text-2xl font-bold mb-6 text-blue-900">care.</span>
      </h2>
      <ul className="space-y-4">
        {links.map((link, i) => (
          <li
            key={i}
            className="flex items-center text-gray-700 hover:text-blue-500 cursor-pointer py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <div className="mr-3 text-xl"> {}
              {link.icon}
            </div>
            {link.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;