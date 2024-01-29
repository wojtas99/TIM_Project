import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartPage from "./StartPage/StartPage";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Dashboard from "./Dashboard/Dashboard";
import Creategroup from "./Groups/CreateGroup/Creategroup";
import Profile from "./Profile/Profile";
import Joingroup from "./Groups/JoinGroup/Joingroup";
import GroupInvite from "./Groups/GroupInvite";
import Managegroup from "./Groups/Managegroup";
import Groupsquad from "./Groups/Groupsquad";

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
          path="/manage"
          element={<Managegroup isContentVisible={isContentVisible} setIsContentVisible={setIsContentVisible} />}
        />
        <Route
          path="/groupsquad/:id"
          element={<Groupsquad isContentVisible={isContentVisible} setIsContentVisible={setIsContentVisible} />}
        />       
      </Routes>
    </Router>
  );
}

export default App;
