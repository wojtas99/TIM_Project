import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"; 
import TopBar from "../TopBar/TopBar";

const Groupsquad = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [groupId, setGroupId] = useState(null);
  const [people, setPeople] = useState([]);
  const { id } = useParams();



  useEffect(() => {
    setIsAnimated(true);
    const token = localStorage.getItem("authToken");
    setGroupId(id);
    const fetchPeople = async () => {
      try {
        const response = await fetch(`http://localhost:8000/groupsquad/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setPeople(data);
        }
      } catch (error) {
        console.error('Wystąpił błąd podczas pobierania danych', error);
      }
    };
    if (token) {
      fetchPeople();
    } else {
      console.error('Brak tokena autoryzacyjnego');
    }
  }, []);


  return (
    <div className="main-page">
      <TopBar></TopBar>
      <div className="create-page">
        <div className={`create-group-form ${isAnimated ? "animate" : ""}`}>
          <p>gohabal</p>
        </div>
      </div>
    </div>
  );
};

export default Groupsquad;
