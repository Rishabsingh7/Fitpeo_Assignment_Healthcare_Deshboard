import React from "react";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";

const DashboardMainContent = () => {
  return (
    <div className="p-6 bg-gray-100 flex flex-col gap-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 bg-white p-4 rounded shadow">
          <AnatomySection />
          <HealthStatusCards />
        </div>
        <div className="w-full lg:w-[400px] bg-white p-4 rounded shadow">
          <CalendarView />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UpcomingSchedule />
        <ActivityFeed />
      </div>
    </div>
  );
};

export default DashboardMainContent;
