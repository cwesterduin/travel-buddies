import React, {useState} from "react";
import axios from 'axios'
import WeatherIcon from "../WeatherIcon";

function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState("")

  const apiKey = "d4ef3671c18ff18482439536bbb0fa40";

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(getWeather);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function getWeather(response) {
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      icon: response.data.weather[0].icon,
      city: response.data.name,
      description: response.data.weather[0].description,
    });
    console.log(temperature);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a city..."
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
      <p>
        Current weather in {city} is {weatherData.description}{" "}
        {weatherData.temperature}°{" "}
        <WeatherIcon code={weatherData.icon} alt={weatherData.description} />
      </p>
    </div>
  );
}

export default Weather;