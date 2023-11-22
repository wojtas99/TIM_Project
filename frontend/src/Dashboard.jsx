import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Dashboard.css";
const Dashboard = () => {
const navigate = useNavigate();
const [user, setUser] = useState(null);

     useEffect(() => {
      fetchUser();
  }, [user]);

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
        navigate('/login');}}
        return (
            <div className="main-page"></div>
            );
};
export default Dashboard;
