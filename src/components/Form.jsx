import React, { useEffect, useState } from "react";

import GetWeatherIcons from "../utils/GetWeatherIcons";
import { FiEyeOff } from "react-icons/fi";
import Input from "./Input";
import Button from "./Button";
import Card from "./Card";

import { CiSearch } from "react-icons/ci";
import "./Form.scss";

const Form = (props) => {
  const [locationInput, setLocationInput] = useState("");
  const [locationFound, setLocationFound] = useState(true);
  const [weatherDetails, setWeatherDetails] = useState("");
  const [locationTitle, setLocationTitle] = useState("Manila");

  const searchLocation = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
        import.meta.env.VITE_APP_ID
      }&units=metric`;

      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      setWeatherDetails({
        //Location names
        locationName: data.name,
        temperature: Math.floor(data.main.temp),

        // Cards details
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        feelsLike: data.main.feels_like,

        //Weather details
        icon: data.weather[0].icon,
        description: data.weather[0].description,

        // Time Stamp
        timeZone: data.timezone,
        timeStamp: data.dt,
      });

      setLocationFound(true);
    } catch (err) {
      setLocationFound(false);
      console.log("No location Found:", err);
    }
  };

  useEffect(() => {
    searchLocation(locationTitle);
  }, [locationTitle]);

  const onChangeHandler = (e) => {
    setLocationInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setLocationTitle(locationInput);
    setLocationInput("");
  };

  return (
    <>
      <div className="form-details__wrapper">
        <div className="form-inner__wrapper">
          <form onSubmit={submitHandler}>
            <Input
              type="text"
              placeholder="Search Location..."
              onChange={onChangeHandler}
              value={locationInput}
            />
            <Button buttonText={<CiSearch />} type="submit" />
          </form>
          {locationFound ? (
            <Card
              locationName={weatherDetails.locationName}
              icon={weatherDetails.icon}
              description={weatherDetails.description}
              temperature={weatherDetails.temperature}
              feelsLike={weatherDetails.feelsLike}
              humidity={weatherDetails.humidity}
              windspeed={weatherDetails.windSpeed}
              weatherIcon={<GetWeatherIcons iconCode={weatherDetails.icon} />}
            />
          ) : (
            <p className="error-note">Location not found.</p>
          )}
        </div>
      </div>
      <div className="weather-current__wrapper">
        {locationFound ? (
          <GetWeatherIcons iconCode={weatherDetails.icon} />
        ) : (
          <FiEyeOff />
        )}
      </div>
    </>
  );
};

export default Form;
