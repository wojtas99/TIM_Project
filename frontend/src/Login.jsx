import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import "./Login.css"

export const Login = (props) => {
    const navigate = useNavigate();
    const [login, setlogin] = useState('');
    const [password, setpassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Tworzymy obiekt z danymi do przesłania
    const data = {
        login: login,
        password: password,
      };
  
      // Wysyłamy dane za pomocą żądania AJAX
      fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            alert("Logowanie udana!");
            window.location.href = '/success'; 
          } else {
            alert("Błąd logowanie. Spróbuj ponownie.");
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
            <form className="login-form" onSubmit={handleSubmit}>
                <h1>Log In</h1>
                <label htmlFor="login"> Login</label>
                <input value={login} onChange={(e) => setlogin(e.target.value)} type="login" placeholder="Your Login" id="login" name="login"/>
                <label htmlFor="password"> Password</label>
                <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" placeholder="*******" id="password" name="password" />
                <button type="submit">Log In</button>

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

export default Login;