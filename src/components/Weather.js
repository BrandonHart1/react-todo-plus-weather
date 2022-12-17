import React, { useState } from 'react';
import './Weather.css';
import axios from 'axios';

function Weather() {
  const [data, setData] = useState({});

  const [city, setCity] = useState('');

  const api = {
    key: '4b7e73e873a4c000eb63b6ddcbfe1b49',
    base: 'https://api.openweathermap.org/data/2.5/',
  };

  const searchCity = () => {
    fetch(`${api.base}weather?q=${city}&units=imperial&&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result);
      });
  };

  return (
    <div className='weather__container'>
      <div className='search__bar'>
        <input
          value={city}
          type='text'
          onChange={(e) => setCity(e.target.value)}
          placeholder='Enter City...'
        />
        <button onClick={searchCity}>Get Weather</button>
      </div>
      {/* -------- Error fix for reloading the page -------- */}
      {typeof data.main != 'undefined' ? (
        <div className='weather__info'>
          <div className='location'>
            <h2>{data.name}</h2>
          </div>
          <div className='temperature'>
            <h3>{data.weather.temp}</h3>
          </div>
          <div className='forecast'>
            {/* <h2>{data.weather[0].main}</h2> */}
            <h2>{data.weather[0].description}</h2>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default Weather;
