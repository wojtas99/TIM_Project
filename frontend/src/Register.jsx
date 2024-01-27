import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import './Register.css';
import './App.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [setError] = useState('');
  const [isAnimated, setIsAnimated] = useState(false);
  

  useEffect(() => {
      setIsAnimated(true);
  }, []);
  
  const handleSignUp = async () => {
    try {
      const response = await fetch('http://localhost:8000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password, first_name, last_name }), 
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


 return (
    <div className="main-page">
        <div className={`auth-form-Register ${isAnimated ? "animate" : ""}`}>
        <labelRegister>Sign Up</labelRegister>
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
          placeholder="your.email@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="*******"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
        />
        <label htmlFor="first_name">First Name:</label>
        <input
          type="text"
          placeholder="Your First Name"
          value={first_name}
          onChange={(e) => setFirst_name(e.target.value)}
          id="first_name"
        />
        <label htmlFor="last_name">Last Name:</label>
        <input
          type="text"
          placeholder="Your Last Name"
          value={last_name}
          onChange={(e) => setLast_name(e.target.value)}
          id="last_name"
        />
        <buttonRegister onClick={handleSignUp}>Sign Up</buttonRegister>
      </div>
            <div onClick={navigateToStartPage} className={`auth-form-container-button ${isAnimated ? "animate" : ""}`}>
       <IoIosHome/>
      </div>
    </div>
  );
};


export default SignUp;
