import React, { createElement } from "react";
import * as WeatherIcons from "react-icons/wi";

const GetWeatherIcons = (props) => {
  const iconMap = {
    "01d": "WiDaySunny",
    "01n": "WiDaySunny",
    "02d": "WiDaySunnyOvercast",
    "02n": "WiDaySunnyOvercast",
    "03d": "WiCloud",
    "03n": "WiCloud",
    "04d": "WiCloudy",
    "04n": "WiCloudy",
    "09d": "WiDayRainMix",
    "09n": "WiNightAltRainMix",
    "10d": "WiDayRain",
    "10n": "WiNightAltRain",
    "11d": "WiDayThunderstorm",
    "11n": "WiNightThunderstorm",
    "13d": "WiDaySnow",
    "13n": "WiNightAltSnow",
    "50d": "WiFog",
    "50n": "WiFog",
  };

  const IconName = iconMap[`${props.iconCode}`];
  const IconComponent = WeatherIcons[IconName];

  if (IconComponent) {
    return createElement(IconComponent);
  }
  // return a default icon or null if the code is not found.
  return null;
};

export default GetWeatherIcons;
