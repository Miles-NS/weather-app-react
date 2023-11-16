import React from "react";
import "./Weather.css";
import background from "./cuteclouds.png";

export default function Weather() {
  let weatherData = {
    city: "Manzini",
    country: "Eswatini",
    temperature: "17",
    date: "Thursday, 17:02",
    maxTemp: "19",
    minTemp: "11",
    description: "rainy",
    humidity: "100",
    wind: "20",
    icon: "🌧",
  };
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
          <h3>{weatherData.date}</h3>
          <div id="icon">{weatherData.icon}</div>
          <div className="container mb-3">
            <div className="row">
              <div className="col-md-6">
                <div id="temp">{weatherData.temperature}'C</div>
                <span id="temp-max">⬆{weatherData.maxTemp}'C </span>
                <span id="temp-min"> ⬇ {weatherData.minTemp}'C</span>
              </div>
              <div className="col-md-6">
                <div className="mt-3" id="description">
                  {weatherData.description}
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
                {weatherData.wind} km/hr
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
                  <strong>{weatherData.maxTemp}˚C</strong>
                </span>
                <span className="Temperature-min">
                  {" "}
                  {weatherData.minTemp}˚C
                </span>
              </div>
            </div>
            <div className="col">
              <div className="weather-forcast-date">
                <strong>Sat</strong>
              </div>
              <p className="icons">☀</p>
              <div className="weather-temp">
                <span className="temperature-max">
                  <strong>{weatherData.maxTemp}˚C</strong>
                </span>
                <span className="Temperature-min">
                  {" "}
                  {weatherData.minTemp}˚C
                </span>
              </div>
            </div>
            <div className="col">
              <div className="weather-forcast-date">
                <strong>Sun</strong>
              </div>
              <p className="icons">☀</p>
              <div className="weather-temp">
                <span className="temperature-max">
                  <strong>{weatherData.maxTemp}˚C</strong>
                </span>
                <span className="Temperature-min">
                  {" "}
                  {weatherData.minTemp}˚C
                </span>
              </div>
            </div>
            <div className="col">
              <div className="weather-forcast-date">
                <strong>Mon</strong>
              </div>
              <p className="icons">☀</p>
              <div className="weather-temp">
                <span className="temperature-max">
                  <strong>{weatherData.maxTemp}˚C</strong>
                </span>
                <span className="Temperature-min">
                  {" "}
                  {weatherData.minTemp}˚C
                </span>
              </div>
            </div>
            <div className="col">
              <div className="weather-forcast-date">
                <strong>Tues</strong>
              </div>
              <p className="icons">☀</p>
              <div className="weather-temp">
                <span className="temperature-max">
                  <strong>{weatherData.maxTemp}˚C</strong>
                </span>
                <span className="Temperature-min">
                  {" "}
                  {weatherData.minTemp}˚C
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
