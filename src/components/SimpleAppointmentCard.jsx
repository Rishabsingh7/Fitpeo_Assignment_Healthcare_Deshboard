import React from "react";

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-3 rounded shadow mb-4">
      <div className="flex items-center gap-2">
        <span className="text-lg">{icon}</span>
        <div className="text-sm font-semibold">{title}</div>
      </div>
      <div className="text-xs text-gray-500">{time}</div>
    </div>
  );
};

export default SimpleAppointmentCard;
