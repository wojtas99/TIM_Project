import React, { useState, useEffect } from "react";
import "./Joingroup.css";
import TopBar from "../TopBar";
import GroupItem from "./Groupitem";

const Joingroup = () => {
    const [groups, setGroups] = useState([]); 



  useEffect(() => {
    const fetchGroups = async () => {
        try {
          const response = await fetch('http://localhost:8000/joingroup');
          
          if (!response.ok) {
            alert("Błąd pobierania danych grup. Spróbuj ponownie.");
            return;
          }
  
          const data = await response.json();
          setGroups(data);
        } catch (error) {
          console.error('Wystąpił błąd:', error);
          
        }
      };
  
      fetchGroups();
}, []); 




  return (
    
    <div className="dashboard-page"> 
        <TopBar></TopBar>
        <div className="create-page"> 
          {groups.map((group) => (
            <GroupItem key={group.id} group={group} />
          ))}
        </div>
    </div>
  );
};

export default Joingroup;