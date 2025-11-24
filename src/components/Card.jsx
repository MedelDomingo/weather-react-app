import React from "react";
import List from "./List";

import "./Card.scss";

const Card = (props) => {
  return (
    <div className="card-wrapper">
      <h1>{props.locationName}</h1>
      <div className="card-details__wrapper">
        <p className="w-temperature">
          {props.temperature}
          <span>°C</span>
        </p>
        <p className="w-description">
          <span>{props.weatherIcon}</span>
          {props.description}
        </p>
      </div>
      <ul className="list-view">
        <List label="Feels Like:" overcast={props.feelsLike} />
        <List label="Humidity:" overcast={props.humidity} />
        <List label="Wind Speed:" overcast={props.windspeed} />
      </ul>
    </div>
  );
};

export default Card;
