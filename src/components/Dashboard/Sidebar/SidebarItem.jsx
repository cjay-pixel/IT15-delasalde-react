// src/components/Dashboard/Sidebar/SidebarItem.jsx
export default function SidebarItem({ label, active, onClick }) {
    return (
      <button className={`nav-item ${active ? "active" : ""}`} onClick={onClick}>
        <span className="dot" />
        <span className="nav-text">{label}</span>
      </button>
    );
  }