import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import './App.css';
import { IoIosHome } from "react-icons/io"

const Login = () => {
const navigate = useNavigate();
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [isAnimated, setIsAnimated] = useState(false);
const [setError] = useState('');

  useEffect(() => {
      setIsAnimated(true);
  }, []);

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

       if (!response.ok) {
         if (response.status === 404){
        alert('Login or password is incorrect.');
        }
      } else {
        const data = await response.json();
        const {token} = data;
        localStorage.setItem('authToken', token);
        alert('Zalogowano pomyślnie');
        navigate('/dashboard');
      }

    } catch (err) {
      setError(err.message);
    }
  };

 const navigateToStartPage = () => {
    navigate("/");
  };

  
 return (
    <div className="main-page">
      <div className={`auth-form-Login ${isAnimated ? "animate" : ""}`}>
          <labelLogin>Login</labelLogin>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="username"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
        />
        <buttonLogin onClick={handleLogin}>Login</buttonLogin>
        </div>
            <div className={`auth-form-container-button ${isAnimated ? "animate" : ""}`}>
       <IoIosHome onClick={navigateToStartPage} />
      </div>
      </div>
  );
};

export default Login;
