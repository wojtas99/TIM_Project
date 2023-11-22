import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosHome } from "react-icons/io";
import './StartPage.css';
import './App.css';

function StartPage() {
  const navigate = useNavigate();
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
      setIsAnimated(true);
  }, []);
   const navigateToLogin= () => {
    navigate("/login");
  };
   const navigateToRegister = () => {
    navigate("/signup");
  };
 const navigateToStartPage = () => {
    navigate("/");
  };
  return (
    <div className="main-page">
      <div className={`auth-form-container ${isAnimated ? "animate" : ""}`}>
            <labelStartPage>Welcome to Our Website</labelStartPage>
            <labelStartPage>Want to try a new sport? But You don't know where to seek for it?</labelStartPage>
            <labelStartPage>We are here just for YOU!</labelStartPage>
              <buttonStartPage onClick={navigateToLogin}>Login</buttonStartPage>
              <buttonStartPage onClick={navigateToRegister}>Register</buttonStartPage>
      </div>
       <div className={`button-animated ${isAnimated ? "animate" : ""}`}>
      <homeButton className="home-button" onClick={() => {
              navigateToStartPage();
            }}>
              <IoIosHome />
              </homeButton>
               </div>
    </div>
  );
}

export default StartPage;
