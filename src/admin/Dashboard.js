import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Cards from "../dashboard/Cards";
import ChartHistory from "../dashboard/ChartsHistory";
import ChartsState from "../dashboard/ChartsState";
import RecentActivities from "../dashboard/RecentActivities";

import WelcomeBanner from "../dashboard/WelcomeBanner";

const Dashboard = () => {
  return (
    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <NavBar />
      <main>
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          {/* Welcome banner */}
          <WelcomeBanner />
          {/* Cards */}
          <Cards />
          <div className="relative flex flex-wrap justify-center ">
            <ChartsState/>
            <ChartHistory />
          </div>
            <RecentActivities/>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
