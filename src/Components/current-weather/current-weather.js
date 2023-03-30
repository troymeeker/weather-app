import "./current-weather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        
        <img alt="weather" className="weather-icon" src="icons/01d.png" />
        <div>
          <p className="city">City Name </p>
          <p className="curr-weather-desc">Weather Description </p>
        </div>
      </div>
   
    </div>
  );
};

export default CurrentWeather;
