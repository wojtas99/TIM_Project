import React from "react";
import { Link } from "react-router-dom";

const GroupItem = ({ group }) => {
  return (
    <div className="box-for-list"> 
    <Link to={`/group/${group.id}`} className="group-item-link">
        <div className="group-item">
          <strong>Discipline:</strong> {group.discipline}  |  <strong>Trainer:</strong> {group.trainer_name}  |  <strong>Size of Group:</strong> {group.actual_size}/{group.max_size}  |  <strong>Date:</strong> {group.start_date}  |  <strong>Time:</strong> {group.start_time}  
        </div>
      </Link>
    </div>
  );
};

export default GroupItem;
