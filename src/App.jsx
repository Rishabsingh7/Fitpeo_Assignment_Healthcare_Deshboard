import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardMainContent from "./components/DashboardMainContent";

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
};

export default App;
