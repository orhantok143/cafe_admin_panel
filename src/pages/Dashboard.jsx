import React from "react";
import Card from "../components/Card";
import { dashboardData } from "../assets/menuItems";
import OrderList from "../components/OrderList";
import SkeletonCard from "../components/Skeletons/SkeletonCard";

const Dashboard = () => {
  return (
    <div className="">
      <div className=" grid gap-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-2 mx-auto">
        {dashboardData.map((card, i) => (
          <Card key={i} card={card} />
        ))}
        <SkeletonCard/>
      </div>
      <div className="w-full mt-4">
        <OrderList/>
        {/* <SalesChart /> */}
      </div>
    </div>
  );
};

export default Dashboard;
