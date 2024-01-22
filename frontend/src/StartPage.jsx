import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StartPage.css';
import './App.css';

function StartPage() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
      setIsAnimated(true);
  }, []);




  return (
    <div className="main-page">
      <Card 
      className={`text-center ${isAnimated ? "animate" : ""} custom-card`}>
        <Card.Header>Welcome on our Website!</Card.Header>
        <Card.Body>
        <Card.Title>Do You want to try a new sport?</Card.Title>
        <Card.Text>
          You can join new sport groups that are nearby or create a new one.
        </Card.Text>
        <Button variant="primary" href="/login">Login</Button>

        <Button variant="primary" href="/signup">Register</Button>
      </Card.Body>
      <Card.Footer>Join Us now!</Card.Footer>
      </Card>
    </div>
  );
}

export default StartPage;
