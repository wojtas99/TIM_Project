import React, {useState} from "react";

export const Login = (props) => {
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
          } else {
            alert("Błąd logowanie. Spróbuj ponownie.");
          }
        })
        .catch((error) => {
          console.error("Błąd: " + error);
        });
    };
  

    return (
        <div className="auth-form-container">
                <div className="welcome-container">
                    <h2>Welcome to Our Website</h2>
                    <p>Want to try a new sport? But You don't know where to seek for it? <br></br>We are here just for YOU!</p>
                </div>

            <form className="login-form" onSubmit={handleSubmit}>
                <h1>Log In</h1>
                <label htmlFor="login"> Login</label>
                <input value={login} onChange={(e) => setlogin(e.target.value)} type="login" placeholder="Your Login" id="login" name="login"/>
                <label htmlFor="password"> Password</label>
                <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" placeholder="*******" id="password" name="password" />
                <button type="submit">Log In</button>
                <button className='link-button' onClick={() =>props.onFormSwitch('register')}> Don't have an account? Register here.</button>
            </form>

        </div>
    );
};