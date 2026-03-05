// src/components/Dashboard/Pages/SettingsPage.jsx
export default function SettingsPage() {
    return (
      <section className="panel">
        <div className="panel-head">
          <h2>Settings</h2>
          <button className="link-btn">Save</button>
        </div>
  
        <div className="settings">
          <div className="field">
            <label>Display name</label>
            <input placeholder="Van" />
          </div>
  
          <div className="field">
            <label>Email</label>
            <input placeholder="van@email.com" />
          </div>
  
          <div className="field">
            <label>Theme</label>
            <select>
              <option>Dark (default)</option>
              <option>Light</option>
            </select>
          </div>
        </div>
      </section>
    );
  }