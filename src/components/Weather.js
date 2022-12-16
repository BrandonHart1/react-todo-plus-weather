import React from 'react';
import './Weather.css';

function Weather() {
  return (
    <div className='weather__container'>
      <div className='weather'>
        <h2>Weather</h2>
      </div>
      <div className='location'>
        <h2>Location</h2>
      </div>
      <div className='forecast'>
        <h2>Forecast</h2>
      </div>
    </div>
  );
}

export default Weather;
