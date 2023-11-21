import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Dashboard.css";
import TopBar from "./TopBar";
import Groups from "./Groups";

function Dashboard() {
  const navigate = useNavigate();
  const [isAnimated, setIsAnimated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
  const fetchUser = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
          navigate('/login');
          return;
        }

        const response = await fetch('http://localhost:8000/dashboard', {
          method: 'GET',
          headers: {
            Authorization: `Token ${authToken}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        console.error(err);
        navigate('/login');
      };
    // Po montażu komponentu, po kilku sekundach uruchom animację
    setTimeout(() => {
      setIsAnimated(true);
    }, 500); // Opóźnienie 1s (1000ms)
  };fetchUser();
  }, [navigate]);

  return (
    <div>
      <TopBar />
      <div className={`dashboard-container ${isAnimated ? "animate" : ""}`} >
      {user && (
        <h1>{user.email}</h1>
        )}
      </div>
      <Groups />
    </div>
  );
}

export default Dashboard;
