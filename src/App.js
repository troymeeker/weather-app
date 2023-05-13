import "./App.css";
import Search from "./Components/search/search";
import CurrentWeather from "./Components/current-weather/current-weather";
import DarkToggle from "./darkToggle";
import { weather_api_key } from "./api";
import { weather_api_url } from "./api";
import { useState } from "react";

function App() {
  const [currentWeather, setCurrentWeather]  =  useState(null)
  const [ forecast, setForecast] = useState(null)


  const handleOnSearchChange = (searchData) => {
    // console.log(searchData);
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${weather_api_url}/weather?lat=${lat}&lon=${lon}&appid=${weather_api_key}`
    );

    const forecastWeatherFetch = fetch(
      `${weather_api_url}/forecast?lat=${lat}&lon=${lon}&appid=${weather_api_key}`
    );

    Promise.all([currentWeatherFetch, forecastWeatherFetch]
      .then(async (resp) => {
        const weatherResp = await resp[0].json();
        const forecastResp = await resp[1].json();
        setCurrentWeather({ city: searchData.label , ...weatherResp});
        setForecast({ city: searchData.label, ...forecastResp});

      })
      .catch((err) => console.log(err))
        )

  }; 

  return (
    <div className="container">
      <DarkToggle />
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
