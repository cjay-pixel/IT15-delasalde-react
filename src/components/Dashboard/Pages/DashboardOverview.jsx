// src/components/Dashboard/Pages/DashboardOverview.jsx
import StatsGrid from "../Sections/StatsGrid";
import RecentActivity from "../Sections/RecentActivity";
import TodayPanel from "../Sections/TodayPanel";

export default function DashboardOverview() {
  return (
    <>
      <StatsGrid />
      <div className="grid">
        <RecentActivity />
        <TodayPanel />
      </div>
    </>
  );
}