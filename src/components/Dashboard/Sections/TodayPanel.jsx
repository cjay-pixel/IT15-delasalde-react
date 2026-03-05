// src/components/Dashboard/sections/TodayPanel.jsx
export default function TodayPanel() {
  return (
    <section className="panel">
      <div className="panel-head">
        <h2>Today</h2>
        <button className="link-btn">Manage</button>
      </div>

      <div className="today">
        <div className="today-card">
          <p className="today-kicker">Next Shoot</p>
          <p className="today-big">Mar 8 • 10:00 AM</p>
          <p className="today-muted">Location: Tagum City</p>
        </div>

        <div className="today-card">
          <p className="today-kicker">Pending Edits</p>
          <p className="today-big">14 sets</p>
          <p className="today-muted">Try finishing 3 sets today</p>
        </div>

        <div className="today-note">
          <p className="today-kicker">Quick Note</p>
          <textarea placeholder="Write a reminder..." />
        </div>
      </div>
    </section>
  );
}