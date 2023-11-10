import React from "react";
import "./TopBar.css";
import { VscAccount, VscGear } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';

function TopBar() {
  const navigate = useNavigate();
  const handleNavigation = (destination) => {
    navigate(destination);
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <button2 className="logo" onClick={() => handleNavigation('/dashboard')}>
            Dashboard
          </button2>
        </div>
        <div className="topRight">
        <div className="topbarIconSet">
            <VscGear />
          </div>          
          <button2 className="topbarIconAcc" onClick={() => handleNavigation('/profile')}>
            <VscAccount />
          </button2>
        </div>
      </div>
    </div>
  );
}

export default TopBar;