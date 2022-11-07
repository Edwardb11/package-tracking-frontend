import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import AreaCharts from "../dashboard/AreaCharts";
import Cards from "../dashboard/Cards";
import RadialBarCharts from "../dashboard/RadialBarChart";

import WelcomeBanner from "../dashboard/WelcomeBanner";

const Dashboard = () => {
  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <NavBar />
      <main>
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          {/* Welcome banner */}
          <WelcomeBanner />
          {/* Cards */}
          <Cards />
          <div className=" grid grid-cols-10 gap-1">
            <AreaCharts />
            <RadialBarCharts />

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
