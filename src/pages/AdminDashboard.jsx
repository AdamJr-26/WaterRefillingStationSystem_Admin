import React from "react";
import AdminDashboardCard from "../components/AdminDashboardCard";
import { Icon } from "@iconify/react";
import ScrollContainer from "react-indiana-drag-scroll";

import { Bar, Line, Pie } from "react-chartjs-2";
import DashboardTodaysOverView from "../components/dashboard/DashboardTodaysOverView";
import DashboardEngagementCustomers from "../components/dashboard/DashboardEngagementCustomers";

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <div className="admin-dashboard--greeting">
        <p className="admin-dashboard--greeting__greeting">
          Good morning, Boss!
        </p>
        <p className="admin-dashboard--greeting__date">October 3,2022</p>
      </div>
      <div className="admin-dashboard--overview">
        <p className="admin-dashboard--overview__title">Overview</p>
        <DashboardTodaysOverView />
      </div>
      <div className="admin-dashboard--engagements">
        <p className="admin-dashboard--overview__title">Engagements</p>
        <DashboardEngagementCustomers />
      </div>
      <div className="admin-dashboard--responses">
        <p className="admin-dashboard--overview__title">Responses</p>
      </div>
    </div>
  );
}

export default AdminDashboard;

// some charts content

// 1. monthly income,
// 2. monthly expenses
// 2.1 total discounts
// 3. places kung saan sila maraming customer
// 4. most sold/bought product?
// 5. anong mabentang product.
