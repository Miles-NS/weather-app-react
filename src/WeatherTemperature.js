import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertcelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div id="temp">
        <span className="temperature">
          {Math.round(Math.round(props.celsius))}
        </span>
        <span className="unit">
          ˚C|
          <a href="/" onClick={convertFahrenheit}>
            ˚F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div id="temp">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={convertcelsius}>
            'C
          </a>
          |'F
        </span>
      </div>
    );
  }
}
