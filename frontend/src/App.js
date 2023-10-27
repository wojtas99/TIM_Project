import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import StartPage from "./StartPage";


function App() {
  return (
    <Router>
      <div className="App">
        <StartPage />
      </div>
    </Router>
  );
}

export default App;