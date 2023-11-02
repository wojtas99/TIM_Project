import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { IoIosHome } from 'react-icons/io';

export const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'login') {
      setLogin(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Wysłanie żądania POST z danymi logowania
    fetch('http://127.0.0.1:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login, password }),
    })
      .then((response) => {
        if (response.status === 200) {
          alert('Zalogowano pomyślnie');
          navigate('/dashboard');
        } else {
          alert('Nieprawidłowe dane logowania');
          setLoginError('Nieprawidłowe dane logowania');
        }
      })
      .catch((error) => {
        console.error('Błąd podczas wysyłania żądania: ', error);
        setLoginError('Błąd podczas wysyłania żądania');
      });
  };


  const navigateToStartPage = () => {
    navigate("/");
  };

  const refreshPage = () => {
    window.location.reload();
  };


  return (
    <div className="main-page">
      <div className="auth-form-container">
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
          <button className="home-button" onClick={() => {
            navigateToStartPage();
            refreshPage();
            
          }}>
            <IoIosHome />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
