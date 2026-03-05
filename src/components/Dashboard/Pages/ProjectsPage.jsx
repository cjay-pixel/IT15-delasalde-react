// src/components/Dashboard/Pages/ProjectsPage.jsx
export default function ProjectsPage() {
    const projects = [
      { name: "Wedding - Davao", status: "Editing", date: "Mar 02" },
      { name: "Portrait - Tagum", status: "Scheduled", date: "Mar 08" },
      { name: "Product Shoot - Studio", status: "Completed", date: "Feb 26" },
    ];
  
    return (
      <section className="panel">
        <div className="panel-head">
          <h2>Projects</h2>
          <button className="link-btn">Add project</button>
        </div>
  
        <div className="table">
          <div className="t-row t-head">
            <div>Name</div>
            <div>Status</div>
            <div>Date</div>
          </div>
  
          {projects.map((p, i) => (
            <div className="t-row" key={i}>
              <div className="t-strong">{p.name}</div>
              <div>
                <span className="pill">{p.status}</span>
              </div>
              <div className="t-muted">{p.date}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }