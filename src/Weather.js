import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";
import background from "./cuteclouds.png";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      city: response.data.city,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      feels: response.data.temperature.feels_like,
      country: response.data.country,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "f6o0c2ff290db7742a02f3a3t7d67c34";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
  if (weatherData.ready) {
    return (
      <div className="container">
        <div
          className="my-5"
          id="weather-box"
          style={{ backgroundImage: `url(${background})` }}
        >
          <form className="pt-3" id="search-form" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter city..."
              className="enterCity"
              id="search-input"
              onChange={handleCityChange}
            />
            <input
              type="submit"
              value="search"
              id="city-input"
              onChange={search}
            />
          </form>
          <WeatherInfo data={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
