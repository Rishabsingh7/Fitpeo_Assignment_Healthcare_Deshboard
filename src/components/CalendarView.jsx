import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SimpleAppointmentCard from "./SimpleAppointmentCard";
import { upcomingAppointments } from "../data/appointments";



const CalendarView = () => {
  // Array of days of the week
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  // Highlighted dates based on the image
  const highlightedDates = [26, 30, 31]; // Dates with a blue background

  return (
    <div className="p-4 bg-white rounded-lg  max-w-2xl mx-auto">
      {/* Top section: Month, and Navigation arrows */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">October 2021</h2>
        <div className="flex items-center space-x-3">
          {/* User icon and Plus icon removed */}
          {/* Navigation arrows */}
          <div className="flex space-x-1">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <FaChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <FaChevronRight className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium text-gray-700">
        {/* Day headers */}
        {daysOfWeek.map((day) => (
          <div key={day} className="py-2 text-gray-500 font-medium">
            {day}
          </div>
        ))}

        {/* Dates and Time Slots */}
        {/* We'll iterate from 25 to 31 directly to match the image's visible dates */}
        {Array.from({ length: 7 }, (_, index) => {
          const date = 25 + index; // Dates from 25 to 31
          const isDateHighlighted = highlightedDates.includes(date);

          return (
            <div
              key={date}
              className={`flex flex-col items-center justify-start p-1 rounded-lg min-h-[120px] ${
                isDateHighlighted ? "bg-blue-50 text-blue-800" : "text-gray-800"
              }`}
            >
              <div className={`text-lg font-bold mb-1 ${isDateHighlighted ? "text-blue-800" : "text-gray-800"}`}>
                {date}
              </div> {/* Date number */}

              {/* Time slots for each day, matching the image */}
              <div className="text-xs text-gray-600 space-y-0.5 w-full">
                {date === 25 && ( // Monday 25th
                  <div>
                    <div className="py-1.5">10:00</div>
                    <div className="py-1.5">11:00</div>
                    <div className="py-1.5">12:00</div>
                  </div>
                )}
                {date === 26 && ( // Tuesday 26th - Highlighted background for the column
                  <div>
                    <div className="py-1.5 text-gray-600">08:00</div>
                    <div className="py-1.5 bg-blue-600 text-white rounded-md font-semibold">09:00</div> {/* Highlighted time */}
                    <div className="py-1.5 text-gray-600">10:00</div>
                  </div>
                )}
                {date === 27 && ( // Wednesday 27th
                  <div>
                    <div className="py-1.5">12:00</div>
                    <div className="py-1.5 text-gray-400">—</div> {/* Placeholder for empty time slot */}
                    <div className="py-1.5">13:00</div>
                  </div>
                )}
                {date === 28 && ( // Thursday 28th
                  <div>
                    <div className="py-1.5">10:00</div>
                    <div className="py-1.5 bg-blue-200 text-blue-800 rounded-md font-semibold">11:00</div> {/* Highlighted time */}
                    <div className="py-1.5 text-gray-400">—</div>
                  </div>
                )}
                {date === 29 && ( // Friday 29th
                  <div>
                    <div className="py-1.5 text-gray-400">—</div>
                    <div className="py-1.5">14:00</div>
                    <div className="py-1.5">16:00</div>
                  </div>
                )}
                {date === 30 && ( // Saturday 30th - Highlighted background for the column
                  <div>
                    <div className="py-1.5 bg-blue-600 text-white rounded-md font-semibold">12:00</div> {/* Highlighted time */}
                    <div className="py-1.5 text-gray-600">14:00</div>
                    <div className="py-1.5 text-gray-600">15:00</div>
                  </div>
                )}
                {date === 31 && ( // Sunday 31st - Highlighted background for the column
                  <div>
                    <div className="py-1.5 bg-blue-600 text-white rounded-md font-semibold">09:00</div> {/* Highlighted time */}
                    <div className="py-1.5 text-gray-600">10:00</div>
                    <div className="py-1.5 text-gray-600">11:00</div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      
       <div>
      <h2 className="text-lg font-semibold mb-2 py-3.5">The Upcoming Schedule</h2>
      <div className="mb-4">
        <div className="text-sm font-bold mb-1 py-2.5">On Thursday</div>
        {upcomingAppointments.thursday.map((appt, index) => (
          <SimpleAppointmentCard
            key={index}
            title={appt.title}
            time={appt.time}
            icon={appt.icon}
          />
        ))}
      </div>
      <div>
        <div className="text-sm font-bold mb-1 py-2.5">On Saturday</div>
        {upcomingAppointments.saturday.map((appt, index) => (
          <SimpleAppointmentCard
            key={index}
            title={appt.title}
            time={appt.time}
            icon={appt.icon}
          />
        ))}
      </div>
    </div>

    </div>
  );

};

export default CalendarView;
