import "./current-weather.css";
import { useState } from "react";

const CurrentWeather = () => {

  const [state, setState] = useState('Fahrenheit')

  function handleConvert({state}){
    setState('Celsius')
  }
  return (
    <div className="weather">
      <div className="top">
        
        <img alt="weather" className="weather-icon" src="icons/01d.png" />
        <div>
          <p className="city">City Name </p>
          <p className="curr-weather-desc">Weather Description </p>
        </div>
      </div>
      <div className="bottom">
        <p className="temp-f">32°F</p>
        {/* <p className="temp-c">0°C</p> */}
        <div className="details">
          <div className="param-row">
            <div className="param-label">Details</div>
          </div>
          <div className="param-row">
            <div className="param-label">Feels like:</div>
            <div className="param-value">30°F</div>
          </div>
        </div>
        <button className="convert" onClick={handleConvert}>Convert to {state}</button>
      </div>
   
    </div>
  );
};

export default CurrentWeather;
