import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Weather() {
    const [city, setCity] = useState("");
    const [data, setData] = useState("");

    const apikey = "91fb7b0fce7d8d511ddc5f831700fcde";


    const handleChange = (e) => {
        setCity(e.target.value);
    }
    const getWeather = () => {
        if (!city.trim()) {
            alert("please eanter a city");
        } else {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`)
                .then(res => setData(res.data))
                .catch(err => {
                    alert("City not found");
                    setData("");
                });
        }
    }
    return (
        <div className="container">
            <h1 className="title">Weather Forecasting</h1>
            <div className="WeatherContainer">
                <input type="text"
                    name="city"
                    value={city}
                    onChange={handleChange}
                />
                <button onClick={getWeather}>Get Weather</button>
                <p><b>City: </b>{data && data.name ? data.name : ""} </p>
                <h2>Weather Data:</h2>
                <p><b>Temperature: </b>{data && data.main.temp ? (data.main.temp) : ""} °C</p>
                <p><b>Humidity: </b>{data && data.wind.speed ? (data.wind.speed) : ""} km/sec</p>
                <p><b>description: </b>{data && data.weather[0].description ? (data.weather[0].description) : ""}</p>
            </div>
        </div>
    )
}

export default Weather