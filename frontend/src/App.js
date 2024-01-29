import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartPage from "./StartPage";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Creategroup from "./Creategroup";
import Profile from "./Profile";
import Joingroup from "./Groups/Joingroup";
import GroupInvite from "./Groups/GroupInvite";
import Managegroup from "./Groups/Managegroup";

function App() {
  const [isContentVisible, setIsContentVisible] = useState(true);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<StartPage isContentVisible={isContentVisible} setIsContentVisible={setIsContentVisible} />}
        />
        <Route
          path="/login"
          element={<Login isContentVisible={isContentVisible} setIsContentVisible={setIsContentVisible} />}
        />
        <Route
          path="/signup"
          element={<Register isContentVisible={isContentVisible} setIsContentVisible={setIsContentVisible} />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard isContentVisible={isContentVisible} setIsContentVisible={setIsContentVisible} />}
        />
        <Route
          path="/creategroup"
          element={<Creategroup isContentVisible={isContentVisible} setIsContentVisible={setIsContentVisible} />}
        />  
        <Route
          path="/profile"
          element={<Profile isContentVisible={isContentVisible} setIsContentVisible={setIsContentVisible} />}
        />   
        <Route
          path="/joingroup"
          element={<Joingroup isContentVisible={isContentVisible} setIsContentVisible={setIsContentVisible} />}
        />
        <Route
          path="/group/:id"
          element={<GroupInvite isContentVisible={isContentVisible} setIsContentVisible={setIsContentVisible} />}
        />   
        <Route
          path="manage"
          element={<Managegroup isContentVisible={isContentVisible} setIsContentVisible={setIsContentVisible} />}
        />    
      </Routes>
    </Router>
  );
}

export default App;
