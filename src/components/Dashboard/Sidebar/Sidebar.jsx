// src/components/Dashboard/Sidebar/Sidebar.jsx
import SidebarItem from "./SidebarItem";

const items = [
  { key: "dashboard", label: "Dashboard" },
  { key: "projects", label: "Projects" },
  { key: "albums", label: "Albums" },
  { key: "clients", label: "Clients" },
  { key: "settings", label: "Settings" },
];

export default function Sidebar({ open, activeTab, onSelectTab }) {
  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <div className="brand">
        <div className="brand-badge">PH</div>
        <div className="brand-text">
          <p className="brand-name">PhotoHub</p>
          <p className="brand-sub">Studio Dashboard</p>
        </div>
      </div>

      <nav className="nav">
        {items.map((it) => (
          <SidebarItem
            key={it.key}
            label={it.label}
            active={activeTab === it.key}
            onClick={() => onSelectTab(it.key)}
          />
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="user">
          <div className="avatar">V</div>
          <div className="user-text">
            <p className="user-name">Van</p>
            <p className="user-role">Admin</p>
          </div>
        </div>

        <a className="logout" href="/">
          Logout
        </a>
      </div>
    </aside>
  );
}