import React, { useState, useEffect } from "react";
import TopBar from "../TopBar";

const GroupInvite = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <div className="dashboard-page">
      <TopBar></TopBar>
      <div className="create-page">
        <div className={`create-group-form ${isAnimated ? "animate" : ""}`}>
          <p>You have chosen Your group, if You want to attend on a meeting, click JOIN US!!</p>
          <buttonCreate>JOIN US!</buttonCreate>
        </div>
      </div>
    </div>
  );
};

export default GroupInvite;
