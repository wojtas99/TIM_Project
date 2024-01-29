import React, {useState, useEffect} from "react";
import "./TopBar.css";
import { VscAccount } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
 


function TopBar() {
  const navigate = useNavigate();
  const [isAnimated, setIsAnimated] = useState(false);  
  const handleNavigation = (destination) => {
    navigate(destination);
  };

  useEffect(() => {
    setIsAnimated(true);
}, []);

  return (
    <div className={`topbar ${isAnimated ? "animate" : ""}`}>
      <Navbar  data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/dashboard">Dashboard</Navbar.Brand>
            <Nav className="me-auto">
              <NavDropdown title="Groups" id="collapsible-nav-dropdown">
                      <NavDropdown.Item href="/creategroup">Create Group</NavDropdown.Item>
                      <NavDropdown.Item href="/joingroup">Join New Group</NavDropdown.Item>                      
                      <NavDropdown.Item href="/manage">Manage Your Groups</NavDropdown.Item>
              </NavDropdown>
              <div className="topRight">
                <Nav.Link href="/">Logout</Nav.Link>
              </div>
            </Nav>
          </Container>
      </Navbar>
    </div>

  );
}

export default TopBar;