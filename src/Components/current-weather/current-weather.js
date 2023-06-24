import "./current-weather.css";
import { useState } from "react";

const CurrentWeather = ({data}) => {

  const [state, setState] = useState()

  // function handleConvert({state}){
  //   setState('Celsius')
    
  // }
  return (
    <div className="weather">
       
      <div className="top">
      
        <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
        <div>
          <p className="city">{data.city} </p>
          <p className="curr-weather-desc">{data.weather[0].main} </p>
        </div>
      </div>
      <div className="bottom">
        <p className="temp">{Math.round(data.main.temp)}°F</p>
       
        <div className="details">
          <div className="param-row">
            <div className="param-label">Details</div>
          </div>
          <div className="param-row">
            <span className="param-label">Feels like:  </span>
            <span className="param-value" > {Math.round(data.main.feels_like)}°F</span>
          </div>
          <div className="param-row">
            <span className="param-label">Wind:  </span>
            <span className="param-value">  {Math.round(data.wind.speed)}mph</span>
          </div>
          <div className="param-row">
            <span className="param-label">Humidity:  </span>
            <span className="param-value" > {Math.round(data.main.humidity)}%</span>
          </div>
        </div>
        {/* <button className="convert" onClick={handleConvert}>Convert to Metric</button> */}
      </div>
   
    </div>
  );
};

export default CurrentWeather;
