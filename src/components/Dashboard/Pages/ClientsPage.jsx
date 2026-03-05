// src/components/Dashboard/Pages/ClientsPage.jsx
export default function ClientsPage() {
    const clients = [
      { name: "Maria S.", note: "Wedding client" },
      { name: "John D.", note: "Portrait session" },
      { name: "Byteex Studio", note: "Product shoot" },
    ];
  
    return (
      <section className="panel">
        <div className="panel-head">
          <h2>Clients</h2>
          <button className="link-btn">Add client</button>
        </div>
  
        <div className="list">
          {clients.map((c, i) => (
            <div className="list-item" key={i}>
              <div className="pill">Client</div>
              <div className="list-main">
                <p className="list-title">{c.name}</p>
                <p className="list-meta">{c.note}</p>
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