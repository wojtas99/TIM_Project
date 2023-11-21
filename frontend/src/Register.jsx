<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
=======
import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
>>>>>>> origin
import { IoIosHome } from "react-icons/io";
const SignUp = () => {
const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [setError] = useState('');
  const [emailError, setEmailError] = useState('');

<<<<<<< HEAD
export const Register = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email_address, setEmail] = useState("");
  const [isAnimated, setIsAnimated] = useState(false);
  

  useEffect(() => {
    // Po montażu komponentu, po kilku sekundach uruchom animację
    setTimeout(() => {
      setIsAnimated(true);
    }, 500); // Opóźnienie 1s (1000ms)
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Tworzymy obiekt z danymi do przesłania
    const data = {
      login: login,
      password: password,
      email_address: email_address
    };

    // Wysyłamy dane za pomocą żądania AJAX
    fetch("http://127.0.0.1:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          alert("Rejestracja udana!");
        } else {
          alert("Błąd rejestracji. Spróbuj ponownie.");
        }
      })
      .catch((error) => {
        console.error("Błąd: " + error);
=======
  const handleSignUp = async () => {
    try {
      const response = await fetch('http://localhost:8000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }), // Include email in the request
>>>>>>> origin
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
<<<<<<< HEAD
      <div className={`auth-form-container ${isAnimated ? "animate" : ""}`}>
        <form className="register-form" onSubmit={handleSubmit}>
          <h1>Register</h1>
          <label htmlFor="login">Login</label>
          <input value={login} onChange={(e) => setLogin(e.target.value)} type="text" placeholder="Your Login" id="login" name="login" />
          <label htmlFor="password">Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*******" id="password" name="password" />
          <label htmlFor="email">Email</label>
          <input value={email_address} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your.email@com.pl" id="email" name="email" />
          <button type="submit">Register</button>
        </form>
=======
      <div className="auth-form-container register-form">
        <h2>Sign Up</h2>
        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
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

export default SignUp;
