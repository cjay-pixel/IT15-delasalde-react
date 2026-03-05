// src/components/Dashboard/sections/RecentActivity.jsx
export default function RecentActivity() {
  const activity = [
    { title: "Client album shared", meta: "Wedding - Davao • 2h ago", type: "Share" },
    { title: "New project created", meta: "Portrait Session • Yesterday", type: "Create" },
    { title: "Payment received", meta: "Invoice #1032 • 2 days ago", type: "Payment" },
    { title: "Draft exported", meta: "Selection Set • 4 days ago", type: "Export" },
  ];

  return (
    <section className="panel">
      <div className="panel-head">
        <h2>Recent Activity</h2>
        <button className="link-btn">View all</button>
      </div>

      <div className="list">
        {activity.map((a, idx) => (
          <div className="list-item" key={idx}>
            <div className="pill">{a.type}</div>
            <div className="list-main">
              <p className="list-title">{a.title}</p>
              <p className="list-meta">{a.meta}</p>
            </div>
            <button className="icon-btn" aria-label="Open">
              →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}