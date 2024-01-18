import React, { useState } from "react";
import "./Creategroup.css";

function CreateGroup() {
  const [selectedOption, setSelectedOption] = useState('');
  const [trainer, setTrainer] = useState('');
  const [size, setSize] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      trainer: trainer,
      size: size,
      date: date,
      time: time,
    };

    fetch("http://127.0.0.1:8000/creategroup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          alert("Grupa utworzona!");
        } else {
          alert("Błąd utworzenia grupy. Spróbuj ponownie.");
        }
      })
      .catch((error) => {
        console.error("Błąd: " + error);
      });
  };


  return (
      <div className="main-page">
        <form className="create-group-form">
          <createheader>Create New Group</createheader>
          <div className="selectoption">
            <select value={selectedOption} onChange={handleOptionChange}>
              <option value="">Choose a discipline</option>
              <option value="Box">Box</option>
              <option value="Kickboxing">Kickboxing</option>
              <option value="Karate">Karate</option>
              <option value="Soccer">Soccer</option>
              <option value="Basketball">Basketball</option>
              <option value="Baseball">Baseball</option>
            </select>
          </div>
          <label htmlFor="trainer">Trainer</label>
          <input value={trainer} onChange={(e) => setTrainer(e.target.value)} type="text" placeholder="Organization/Name of Trainer" id="trainer" name="trainer" />
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
}

export default CreateGroup;
