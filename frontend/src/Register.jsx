import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import "./Register.css";

export const Register = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email_address, setEmail] = useState("");

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
      });
  };

  const navigateToStartPage = () => {
    navigate("/");
  };

  const refreshPage = () => {
    window.location.reload();
  };


  return (
    <div className="auth-form-container">
       <form className="register-form" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <label htmlFor="login">Login</label>
        <input value={login} onChange={(e) => setLogin(e.target.value)} type="text" placeholder="Your Login" id="login" name="login" />
        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*******" id="password" name="password" />
        <label htmlFor="email">Email</label>
        <input value={email_address} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your.email@com.pl" id="email" name="email" />
        <button type="submit">Register</button>
        
        <button className="home-button" onClick={() => {
          navigateToStartPage();
          refreshPage();
        }}>
          <IoIosHome />
        </button>
      </form>
    </div>
  );
};


export default Register;