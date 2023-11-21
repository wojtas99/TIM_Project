import React, { useState } from "react";
import "./Profile.css";
import TopBar from "./TopBar"; 
import { useNavigate } from 'react-router-dom';
function Profile() {
    const navigate = useNavigate();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [email_address, setEmail] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Tworzymy obiekt z danymi do przesłania
    const data = {
        login: login,
        password: password,
        email_address: email_address,
        fname: fname,
        lname: lname
    };

    // Wysyłamy dane za pomocą żądania AJAX
    fetch("http://127.0.0.1:8000/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          alert("Profil zaktualizowany!");
        } else {
          alert("Błąd aktualizacji danych. Spróbuj ponownie.");
        }
      })
      .catch((error) => {
        console.error("Błąd: " + error);
      });
  };
    const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <div className="topbar">
      <TopBar />
      <div className="profile-page">
        <form className="profile-group-form" onSubmit={handleSubmit}>
          <h2>Edit Your Profile</h2><br></br><br></br>
          <label htmlFor="login">Login</label>
          <input value={login} onChange={(e) => setLogin(e.target.value)} type="text" placeholder="Your Login" id="login" name="login" />
          <label htmlFor="password">Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*******" id="password" name="password" />
          <label htmlFor="email">Email</label>
          <input value={email_address} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your.email@com.pl" id="email" name="email" />
          <label htmlFor="fname">First Name</label>
          <input value={fname} onChange={(e) => setFname(e.target.value)} type="text" placeholder="First Name" id="fname" name="fname" />
          <label htmlFor="email">Last Name</label>
          <input value={lname} onChange={(e) => setLname(e.target.value)} type="text" placeholder="Last Name" id="lname" name="lname" />
          <button type="submit">Submit Changes</button>
          <button onClick={handleLogout}>Logout</button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
