import React from "react";
import "./TopBar.css"; // Importuj stylizację
import { VscAccount } from "react-icons/vsc";

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <VscAccount />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;