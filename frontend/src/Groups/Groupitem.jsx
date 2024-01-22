import React from "react";

const GroupItem = ({ group }) => {
  return (
    <div className="group-item">
      <h3>{group.discipline}</h3>
      <p><strong>Trainer Name:</strong> {group.trainer_name}</p>
      <p><strong>Max Size:</strong> {group.max_size}</p>
      <p><strong>Start Date:</strong> {group.start_date}</p>
      <p><strong>Start Time:</strong> {group.start_time}</p>
    </div>
  );
};

export default GroupItem;