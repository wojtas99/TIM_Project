import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import TopBar from "./TopBar";
import Groups from "./Groups";

function Dashboard() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Po montażu komponentu, po kilku sekundach uruchom animację
    setTimeout(() => {
      setIsAnimated(true);
    }, 500); // Opóźnienie 1s (1000ms)
  }, []);

  return (
    <div>
      <TopBar />
      <div
        className={`dashboard-container ${isAnimated ? "animate" : ""}`}
      >
        <h1>Welcome!</h1>
        <p>Here You can manage your groups, check Your profile etc.</p>
      </div>
      <Groups />
    </div>
  );
}

export default Dashboard;
