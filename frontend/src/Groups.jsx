import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Groups.css';

const GroupsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (destination) => {
    navigate(destination);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="groups-menu" onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
      <div className="groups-title" onClick={toggleMenu}>Groups</div>
      {isOpen && (
        <div className="options">
          <button className="option" onClick={() => handleNavigation('/creategroup')}>
            Create a Group
           </button>
           <button className="option" onClick={() => handleNavigation('/joingroup')}>
            Join New Group
           </button>
           <button className="option" onClick={() => handleNavigation('/managegroups')}>
            Manage Your Groups
           </button>     
        </div>
      )}
    </div>
  );
};

export default GroupsMenu;
