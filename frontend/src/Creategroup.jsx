import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Creategroup.css";
import TopBar from "./TopBar";

const CreateGroup = () => {
  const navigate = useNavigate();
  const [trainer_name, setTrainer_name] = useState('');
  const [discipline, setDiscipline] = useState('');
  const [max_size, setMax_size] = useState('');
  const [start_date, setDate] = useState('');
  const [start_time, setTime] = useState('');
  const [setError] = useState('');
  const [isAnimated, setIsAnimated] = useState(false);


  useEffect(() => {
    setIsAnimated(true);
}, []);


  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8000/creategroup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ discipline, trainer_name, max_size, start_date, start_time }), // Include email in the request
      });

      if (!response.ok) {
        alert("Błąd utworzenia grupy. Spróbuj ponownie.");
      } else {

        alert("Grupa utworzona!");
        navigate('/dashboard')
      }
    
  } catch (err) {
    setError(err.message);
  }
};

  return (
    
      <div className="main-page"> 
        <TopBar></TopBar>
        <div className="create-page"> 
          <div className={`create-group-form ${isAnimated ? "animate" : ""}`}>
            <createheader>Create New Group</createheader>
            <br/>
            <label htmlFor="Discipline">Discipline</label>
            <input value={discipline} onChange={(e) => setDiscipline(e.target.value)} type="text" placeholder="Discipline" id="discipline" name="discipline" />
            <label htmlFor="trainer_name">Trainer</label>
            <input value={trainer_name} onChange={(e) => setTrainer_name(e.target.value)} type="text" placeholder="Name of Trainer" id="trainer_name" name="trainer_name" />

            <label htmlFor="max_size">Size</label>
            <input value={max_size} onChange={(e) => setMax_size(e.target.value)} type="number" placeholder="Maximal size of group" id="max_size" name="max_size" />  
            <label htmlFor="start_date">Date</label>
            <input value={start_date} onChange={(e) => setDate(e.target.value)} type="date" placeholder="Date" id="start_date" name="start_date" />  
            <label htmlFor="start_time">Time</label>
            <input value={start_time} onChange={(e) => setTime(e.target.value)} type="time" placeholder="Time" id="start_time" name="start_time" />
            <buttonCreate onClick={handleSubmit}>Create Group!</buttonCreate>
          </div>
          </div>
      </div>
  );
};

export default CreateGroup;
