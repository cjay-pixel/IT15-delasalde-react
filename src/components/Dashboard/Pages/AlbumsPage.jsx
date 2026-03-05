// src/components/Dashboard/Pages/AlbumsPage.jsx
export default function AlbumsPage() {
    const albums = ["Wedding Highlights", "Portrait Selections", "Product Catalog", "Event Coverage"];
  
    return (
      <section className="panel">
        <div className="panel-head">
          <h2>Albums</h2>
          <button className="link-btn">Create album</button>
        </div>
  
        <div className="cards">
          {albums.map((a) => (
            <div className="card" key={a}>
              <p className="card-title">{a}</p>
              <p className="card-sub">Tap to open</p>
            </div>
          ))}
        </div>
      </section>
    );
  }