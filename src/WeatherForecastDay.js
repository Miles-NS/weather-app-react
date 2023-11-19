import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}˚C`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}˚C`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="weather-forcast-date">
        <strong>{day()}</strong>
      </div>
      <p className="icons">
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.icon}
          width="50"
        />
      </p>
      <div className="weather-temp">
        <span className="temperature-max">
          <strong>{maxTemperature()}</strong>
        </span>
        <span className="Temperature-min"> {minTemperature()}</span>
      </div>
    </div>
  );
}
