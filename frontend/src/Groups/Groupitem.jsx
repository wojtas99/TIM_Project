// GroupItem.jsx
import React from "react";
import { Link } from "react-router-dom";

const GroupItem = ({ group }) => {
  return (
    <Link to={`/group/${group.id}`} className="group-item-link">
      <div className="group-item">
        <p><strong>Discipline:</strong> {group.discipline}</p>
        <p><strong>Trainer:</strong> {group.trainer_name}</p>
        <p><strong>Size of Group:</strong> {group.actual_size}/{group.max_size}</p>
        <p><strong>Date:</strong> {group.start_date}</p>
        <p><strong>Time:</strong> {group.start_time}</p>
      </div>
    </Link>
  );
};

export default GroupItem;
