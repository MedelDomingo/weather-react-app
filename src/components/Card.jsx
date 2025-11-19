import React from "react";

const Card = (props) => {
  if (!props.details) return <p>Location not found.</p>;
  return (
    <div className="card-wrapper">
      <h2>{props.locationName}</h2>
      <ul>
        {Object.entries(props.details).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
