import React from 'react';
import './Weather.css';

function Weather() {
  return (
    <div className='weather__container'>
      <div className='weather__info'>
        <div className='location'>
          <h2>Location</h2>
        </div>
        <div className='temperature'>
          <h1>Weather</h1>
        </div>
        <div className='forecast'>
          <h2>Forecast</h2>
        </div>
      </div>
    </div>
  );
}

export default Weather;
