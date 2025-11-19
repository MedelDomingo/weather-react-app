import React, { useEffect, useState } from "react";
import "./Form.scss";
import Input from "./Input";
import Button from "./Button";

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
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        locationName: data.name,
        temperature: Math.floor(data.main.temp),
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
        <Button buttonText="Search" type="submit" />
      </form>
      <h1>{weatherDetails.locationName}</h1>
      <h2>Humidity: {weatherDetails.humidity}</h2>
      <h2>Wind Speed: {weatherDetails.windSpeed}</h2>
      <h2>
        {weatherDetails.temperature} <span>°C</span>
      </h2>
    </>
  );
};

export default Form;
