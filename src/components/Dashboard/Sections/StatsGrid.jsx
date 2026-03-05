// src/components/Dashboard/sections/StatsGrid.jsx
export default function StatsGrid() {
    const stats = [
      { label: "Projects", value: "12" },
      { label: "Photos Delivered", value: "2,340" },
      { label: "Pending Reviews", value: "7" },
      { label: "Storage Used", value: "18.6 GB" },
    ];
  
    return (
      <div className="stats">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <p className="stat-label">{s.label}</p>
            <p className="stat-value">{s.value}</p>
          </div>
        ))}
      </div>
    );
  }