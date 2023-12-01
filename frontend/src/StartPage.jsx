import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  return (
    <div className="main-page">
      <div className={`auth-form-StartPage ${isAnimated ? "animate" : ""}`}>
             <labelStartPage>
              <hwelcome>Welcome to Our Website{"\n"}{"\n"}</hwelcome>
              Want to try a new sport?{"\n"}
              But you don't know where to seek for it?{"\n"}
              We are here just for YOU!
            </labelStartPage>
              <buttonStartPageLogin onClick={navigateToLogin}>Login </buttonStartPageLogin>
              <buttonStartPageRegister onClick={navigateToRegister}>Register</buttonStartPageRegister>
      </div>
    </div>
  );
}

export default StartPage;
