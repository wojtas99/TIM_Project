import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StartPage.css';

function StartPage() {
  const [isContentVisible, setContentVisibility] = useState(true);
  const navigate = useNavigate();

  const handleNavigation = (destination) => {
    setContentVisibility(false);
    navigate(destination);
  };

  return (
    <div className="main-page">
      <div className="content-container">
        {isContentVisible && (
          <>
            <h1>Welcome to Our Website</h1>
            <p>Want to try a new sport? But You don't know where to seek for it? We are here just for YOU!</p>
            <div className="nav-buttons">
              <button className="nav-button" onClick={() => handleNavigation('/login')}>
                Login
              </button>
              <button className="nav-button" onClick={() => handleNavigation('/register')}>
                Register
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default StartPage;
