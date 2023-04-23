import React, { useState } from 'react';
import './Search.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Search = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({});
  
    const API_KEY = '6fc0bb357e558297554ff67fd8d4e4f3'; // API
  
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then(response => {
                setWeather(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };
  
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="city" className='pb-2'>Wybierz miasto:</label>
                <input className='bg-transparent border-0 mb-3'
                    type="text"
                    id="city"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                />
                <button type="submit" className='border-0 mb-3'>Sprawdź pogodę</button>
            </form>
            {weather.main &&
                <div className="weather-info">
                    <h2>{weather.name}</h2>
                    <p>Temperatura: {weather.main.temp} °C</p>
                    <p>Ciśnienie: {weather.main.pressure} hPa</p>
                    <p>Wilgotność: {weather.main.humidity} %</p>
                </div>
            }
        </div>
    )
}

export default Search;