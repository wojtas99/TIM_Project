import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Register.css';
import { IoIosHome } from "react-icons/io";
const SignUp = () => {
const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [setError] = useState('');
  const [isAnimated, setIsAnimated] = useState(false);
  

  useEffect(() => {
    // Po montażu komponentu, po kilku sekundach uruchom animację
    setTimeout(() => {
      setIsAnimated(true);
    }, 500); // Opóźnienie 1s (1000ms)
  }, []);
  const handleSignUp = async () => {
    try {
      const response = await fetch('http://localhost:8000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }), // Include email in the request
      });

       if (!response.ok) {
        const responseBody = await response.text();
         if (response.status === 400 && responseBody.length === 40){
        alert('Email is already taken.');
        }
        if (response.status === 400 && responseBody.length === 97){
        alert('Email and login is already taken.');
        }
        if (response.status === 400 && responseBody.length === 58){
        alert('Login is already taken.');
        }
      } else {
        const data = await response.json();
        const {token} = data;
        localStorage.setItem('authToken', token);
        alert('Zarejestrowano pomyślnie');
        navigate('/login');
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
        <div className={`auth-form-container ${isAnimated ? "animate" : ""}`}>
        <form className="register-form"></form>
        <h2>Sign Up</h2>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="username"
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
        />
        <button onClick={handleSignUp}>Sign Up</button>
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


export default SignUp;
