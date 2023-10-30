import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      loginError: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleLogin = () => {
    // Wysłanie żądania POST z danymi logowania
    fetch('/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
    .then(response => {
      if (response.status === 200) {
        // Zalogowano pomyślnie
        console.log('Zalogowano pomyślnie');
        // Tutaj możesz przekierować użytkownika lub wykonać inne działania
      } else {
        // Nieprawidłowe dane logowania
        console.log('Nieprawidłowe dane logowania');
        this.setState({ loginError: 'Nieprawidłowe dane logowania' });
      }
    })
    .catch(error => {
      console.error('Błąd podczas wysyłania żądania: ', error);
      this.setState({ loginError: 'Błąd podczas wysyłania żądania' });
    });
  }

  render() {
    return (
      <div>
        <h1>Logowanie</h1>
        <div>
          <label>Nazwa użytkownika:</label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
        </div>
        <div>
          <label>Hasło:</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
        </div>
        <button onClick={this.handleLogin}>Zaloguj</button>
        {this.state.loginError && <p>{this.state.loginError}</p>}
      </div>
    );
  }
}

export default Login;
