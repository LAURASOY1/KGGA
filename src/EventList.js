import React from "react";

const EventList = ({ events, handleEdit, handleDelete }) => {
  return (
    <div>
      <h2>Scheduled Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <div>
              <strong>Title:</strong> {event.title}
            </div>
            <div>
              <strong>Description:</strong> {event.description}
            </div>
            <div>
              <strong>Category:</strong> {event.category}
            </div>
            <div>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
