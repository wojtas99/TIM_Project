import React from "react";
import "./Dashboard.css"; // Importuj styl
import TopBar from "./TopBar"; // Popraw import na "Topbar" zamiast "Topbar"

function Dashboard() {
  return (
    <div>
      <TopBar />
      <div className="dashboard-container">
        <h1>Witaj w Dashboard</h1>
        <p>Tutaj możesz wyświetlać różne elementy, panele, listy itp.</p>
      </div>
    </div>
  );
}

export default Dashboard;
