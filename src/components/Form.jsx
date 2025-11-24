import React, { useEffect, useState } from "react";

import GetWeatherIcons from "../utils/GetWeatherIcons";
import Input from "./Input";
import Button from "./Button";
import Card from "./Card";

import { CiSearch } from "react-icons/ci";
import "./Form.scss";

const Form = () => {
  const [locationInput, setLocationInput] = useState("");
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
      });
    } catch (err) {
      console.log("No fetch API:", err);
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
      <form onSubmit={submitHandler}>
        <Input
          type="text"
          placeholder="Enter location (e.g., Metro)"
          onChange={onChangeHandler}
          value={locationInput}
        />
        <Button buttonText={<CiSearch />} type="submit" />
      </form>
      {weatherDetails && (
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
      )}
    </>
  );
};

export default Form;
