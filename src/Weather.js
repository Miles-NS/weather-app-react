import React, { useState } from "react";
import "./Weather.css";
import background from "./cuteclouds.png";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      city: response.data.city,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      feels: response.data.temperature.feels_like,
      country: response.data.country,
      description: response.data.condition.description,
      icon: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="container">
        <div
          className="my-5"
          id="weather-box"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div id="currentTempBox">
            <form className="pt-3" id="search-form">
              <input
                type="search"
                placeholder="Enter city..."
                className="enterCity"
                id="search-input"
              />
              <input type="submit" value="search" id="city-input" />
            </form>
            <h2 className="mt-2">
              {weatherData.city}, {weatherData.country}
            </h2>
            <h3>Thursday, 17:02</h3>
            <div id="icon">
              <img src={weatherData.icon} alt={weatherData.description} />
            </div>
            <div className="container mb-3">
              <div className="row">
                <div className="col-md-6">
                  <div id="temp">{Math.round(weatherData.temperature)}'C</div>
                  <span id="feels-like">
                    feels like : {weatherData.feels} 'C
                  </span>
                </div>
                <div className="col-md-6">
                  <div className="mt-3" id="description">
                    rainy
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container " id="weather-info">
            <div className="row">
              <div className="col-md-6">
                <div id="wind">
                  Wind speed <br />
                  {Math.round(weatherData.wind)} km/hr
                </div>
              </div>
              <div className="col-md-6">
                <div id="humidity">
                  Humidity <br />
                  {weatherData.humidity}%
                </div>
              </div>
            </div>
          </div>
          <div className="container " id="forecast">
            <div className="row">
              <div className="col">
                <div className="weather-forcast-date">
                  <strong>Fri</strong>
                </div>
                <p className="icons">☀</p>
                <div className="weather-temp">
                  <span className="temperature-max">
                    <strong>19˚C</strong>
                  </span>
                  <span className="Temperature-min"> 11˚C</span>
                </div>
              </div>
              <div className="col">
                <div className="weather-forcast-date">
                  <strong>Sat</strong>
                </div>
                <p className="icons">☀</p>
                <div className="weather-temp">
                  <span className="temperature-max">
                    <strong>19˚C</strong>
                  </span>
                  <span className="Temperature-min"> 11˚C</span>
                </div>
              </div>
              <div className="col">
                <div className="weather-forcast-date">
                  <strong>Sun</strong>
                </div>
                <p className="icons">☀</p>
                <div className="weather-temp">
                  <span className="temperature-max">
                    <strong>19˚C</strong>
                  </span>
                  <span className="Temperature-min"> 11˚C</span>
                </div>
              </div>
              <div className="col">
                <div className="weather-forcast-date">
                  <strong>Mon</strong>
                </div>
                <p className="icons">☀</p>
                <div className="weather-temp">
                  <span className="temperature-max">
                    <strong>19˚C</strong>
                  </span>
                  <span className="Temperature-min"> 11˚C</span>
                </div>
              </div>
              <div className="col">
                <div className="weather-forcast-date">
                  <strong>Tues</strong>
                </div>
                <p className="icons">☀</p>
                <div className="weather-temp">
                  <span className="temperature-max">
                    <strong>19˚C</strong>
                  </span>
                  <span className="Temperature-min"> 11˚C</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "f6o0c2ff290db7742a02f3a3t7d67c34";
    let city = "Manzini";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
