// src/components/Dashboard/Dashboard.jsx
import { useMemo, useState } from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar/Sidebar";

import DashboardOverview from "./Pages/DashboardOverview";
import ProjectsPage from "./Pages/ProjectsPage";
import AlbumsPage from "./Pages/AlbumsPage";
import ClientsPage from "./Pages/ClientsPage";
import SettingsPage from "./Pages/SettingsPage";

const TABS = {
  dashboard: "dashboard",
  projects: "projects",
  albums: "albums",
  clients: "clients",
  settings: "settings",
};

function Dashboard() {
  const [activeTab, setActiveTab] = useState(TABS.dashboard);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pageTitle = useMemo(() => {
    switch (activeTab) {
      case TABS.dashboard:
        return { title: "Dashboard Overview", subtitle: "Your activity and quick stats." };
      case TABS.projects:
        return { title: "Projects", subtitle: "Manage your shoots, edits, and deliveries." };
      case TABS.albums:
        return { title: "Albums", subtitle: "Organize collections and share with clients." };
      case TABS.clients:
        return { title: "Clients", subtitle: "Track people, notes, and status." };
      case TABS.settings:
        return { title: "Settings", subtitle: "Update your preferences and profile." };
      default:
        return { title: "Dashboard", subtitle: "" };
    }
  }, [activeTab]);

  const closeSidebar = () => setSidebarOpen(false);

  const handleSelectTab = (tabKey) => {
    setActiveTab(tabKey);
    closeSidebar(); // ✅ mobile UX: close drawer after selecting
  };

  return (
    <div className="dash">
      {/* Mobile overlay */}
      <div
        className={`overlay-bg ${sidebarOpen ? "show" : ""}`}
        onClick={closeSidebar}
      />

      {/* SIDEBAR */}
      <Sidebar
        open={sidebarOpen}
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
      />

      {/* MAIN */}
      <main className="main">
        <header className="topbar">
          {/* Row 1 */}
          <div className="topbar-row topbar-row-1">
            <button
              className="menu-btn"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open sidebar"
            >
              ☰
            </button>

            <div className="heading">
              <h1 className="title">{pageTitle.title}</h1>
              <p className="subtitle">{pageTitle.subtitle}</p>
            </div>
          </div>

          {/* Row 2 (still nice on mobile) */}
          <div className="topbar-row topbar-row-2">
            <div className="search">
              <input placeholder="Search projects, clients..." />
            </div>

            <div className="actions">
              <button className="btn ghost">Export</button>
              <button className="btn primary">New</button>
            </div>
          </div>
        </header>

        <section className="content">
          {activeTab === TABS.dashboard && <DashboardOverview />}
          {activeTab === TABS.projects && <ProjectsPage />}
          {activeTab === TABS.albums && <AlbumsPage />}
          {activeTab === TABS.clients && <ClientsPage />}
          {activeTab === TABS.settings && <SettingsPage />}
        </section>
      </main>
    </div>
  );
}

export default Dashboard;