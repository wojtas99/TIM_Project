import React, {useState, useEffect} from "react";
import "./TopBar.css";
import { VscAccount, VscGear } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';

function TopBar() {
  const navigate = useNavigate();
  const [isAnimated, setIsAnimated] = useState(false);  
  const handleNavigation = (destination) => {
    navigate(destination);
  };

  useEffect(() => {
    setIsAnimated(true);
}, []);

  return (
    <div className={`topbar ${isAnimated ? "animate" : ""}`}>
      <div className="topbarWrapper">
          <button2 className="logo" onClick={() => handleNavigation('/dashboard')}>
            Dashboard
          </button2>
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