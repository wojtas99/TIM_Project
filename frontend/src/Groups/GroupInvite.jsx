import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"; 
import TopBar from "../TopBar";

const GroupInvite = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [groupId, setGroupId] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setGroupId(id);
    setIsAnimated(true);
  }, [id]);

  const handleJoinUsClick = async () => {
    try {
      const token = localStorage.getItem("authToken")
      const response = await fetch(`http://localhost:8000/group/${groupId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`,
        },
      });
      
      if (response.ok) {
        alert('Dołączono do grupy!');
        navigate('/joingroup'); 
      } else {
        alert('Błąd podczas dołączania do grupy');
      }
    } catch (error) {
      console.error('Wystąpił błąd:', error);
    }
  };



  return (
    <div className="main-page">
      <TopBar></TopBar>
      <div className="create-page">
        <div className={`create-group-form ${isAnimated ? "animate" : ""}`}>
          <p>You have chosen Your group, if You want to attend on a meeting, click JOIN US!!</p>
          <buttonCreate onClick={handleJoinUsClick}>JOIN US!</buttonCreate>
        </div>
      </div>
    </div>
  );
};

export default GroupInvite;
