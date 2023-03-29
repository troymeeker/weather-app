import "./current-weather.css"

const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <p className="city">City Name </p>
                <p className="curr-weather-desc">Weather Description</p>
            
            
            </div>
            <img alt="weather" className="weather-icon" src="icons/01d.png"/>
        </div>
    );
}

export default CurrentWeather;