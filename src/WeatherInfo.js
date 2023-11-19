import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="weather-information">
      <div id="currentTempBox">
        <h2 className="mt-2">
          {props.data.city}, {props.data.country}
        </h2>
        <CurrentDate date={props.data.date} />
        <div id="icon">
          <img src={props.data.icon} alt={props.data.description} width="200" />
        </div>
        <div className="container mb-3">
          <div className="row">
            <div className="col-md-6">
              <WeatherTemperature celsius={props.data.temperature} />
              <span id="feels-like">
                feels like : {Math.round(props.data.feels)} 'C
              </span>
            </div>
            <div className="col-md-6">
              <div className="mt-3" id="description">
                {props.data.description}
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
              {Math.round(props.data.wind)} km/hr
            </div>
          </div>
          <div className="col-md-6">
            <div id="humidity">
              Humidity <br />
              {props.data.humidity}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
