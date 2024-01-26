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
          You can join sport groups that are nearby or create a new one.
        </Card.Text>
        <Button variant="dark" href="/login" className='startpage-button'>Login</Button>

        <Button variant="dark" href="/signup" className='startpage-button'>Register</Button>
      </Card.Body>

      </Card>
    </div>
  );
}

export default StartPage;
