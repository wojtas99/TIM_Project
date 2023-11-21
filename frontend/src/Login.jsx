<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
=======
import React, { useState } from 'react';
>>>>>>> origin
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { IoIosHome } from "react-icons/io";
const Login = () => {
const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
<<<<<<< HEAD
  const [loginError, setLoginError] = useState('');
  const [isAnimated, setIsAnimated] = useState(false);
  

  useEffect(() => {
    // Po montażu komponentu, po kilku sekundach uruchom animację
    setTimeout(() => {
      setIsAnimated(true);
    }, 500); // Opóźnienie 1s (1000ms)
  }, []);

=======
  const [setError] = useState('');
  const handleSignUp = async () => {
    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
>>>>>>> origin

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


  const refreshPage = () => {
    window.location.reload();
  };
 return (
    <div className="main-page">
<<<<<<< HEAD
      <div className={`auth-form-container ${isAnimated ? "animate" : ""}`}>
        <form className="login-form" onSubmit={handleLogin}>
          <h1>Log In</h1>
          <label htmlFor="login">Login:</label>
          <input
            type="text"
            name="login"
            value={login}
            onChange={handleInputChange}
            placeholder="Your Login"
            id="login"
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            placeholder="*******"
            id="password"
          />
          <button type="submit">Submit</button>
          {loginError && <p>{loginError}</p>}
        </form>
=======
      <div className="auth-form-container register-form">
        <h2>Login</h2>
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
        <button onClick={handleSignUp}>Login</button>
      <button
          className="home-button"
          onClick={() => {
            navigateToStartPage();
            refreshPage();
          }}
        >
          <IoIosHome />
        </button>
>>>>>>> origin
      </div>
      <div className={`button-animated ${isAnimated ? "animate" : ""}`}>
        <button className="home-button" onClick={() => {
              navigateToStartPage();
              refreshPage();
              
            }}>
              <IoIosHome />
            </button>
      </div>
    </div>
  );
};

export default Login;
