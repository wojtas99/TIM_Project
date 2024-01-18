import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Creategroup.css";

const CreateGroup = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const [trainer_name, setTrainer_name] = useState('');
  const [discipline, setDiscipline] = useState('');
  const [setError] = useState('');
  const [size, setSize] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8000/creategroup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ discipline, trainer_name}), // Include email in the request
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


  const navigateToStartPage = () => {
    navigate("/");
  };


  return (
    
      <div className="main-page">

        
        <form className="create-group-form">
          <createheader>Create New Group</createheader>
              
          <label htmlFor="discipline">discipline</label>
          <input value={discipline} onChange={(e) => setDiscipline(e.target.value)} type="text" placeholder="discipline" id="discipline" name="discipline" />
          <label htmlFor="trainer_name">Trainer</label>
          <input value={trainer_name} onChange={(e) => setTrainer_name(e.target.value)} type="text" placeholder="Trainer" id="trainer_name" name="trainer_name" />

          <label htmlFor="size">Size</label>
          <input value={size} onChange={(e) => setSize(e.target.value)} type="number" placeholder="Size of group" id="size" name="size" />  
          <label htmlFor="size">Date</label>
          <input value={date} onChange={(e) => setDate(e.target.value)} type="date" placeholder="Date" id="date" name="date" />  
          <label htmlFor="size">Time</label>
          <input value={time} onChange={(e) => setTime(e.target.value)} type="time" placeholder="Time" id="time" name="time" />
        
        
          <buttonCreate onClick={handleSubmit}>Create Group!</buttonCreate>
        </form>
      </div>
  );
};

export default CreateGroup;
