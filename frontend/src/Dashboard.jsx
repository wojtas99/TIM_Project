import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './App.css';
import "./Dashboard.css";
import Groups from "./Groups";
import TopBar from "./TopBar";

const Dashboard = () => {
const navigate = useNavigate();
const [user, setUser] = useState(null);

     useEffect(() => {
      fetchUser();
  }, []);

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
  const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/login');};


        return (
          <div className="dashboard-page">
            <TopBar></TopBar>
            <div className="managing-groups">
              <Groups></Groups>   
            </div>
          </div>
            );
};
export default Dashboard;
