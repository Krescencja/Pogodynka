import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Search, weatherImg, temp } from './Search';
import './WeatherImage.css'
import summer from '../../img/summer.jpg'
import spring from '../../img/spring.jpg'
import autumn from '../../img/autumn.jpg'
import winter from '../../img/winter.jpg'


function WeatherImageFunction() {
  
  let imageSrc = '';

  if (temp > 20) {
    imageSrc = summer;
  } else if (temp > 10) {
    imageSrc = spring;
  } else if (temp > 0) {
    imageSrc = autumn;
  }else {
    imageSrc = winter;
  }

  return <img src={imageSrc} alt="Weather Image" />;
}
    
function WeatherImage() {
  return (
        <div>
          <h3 className='pb-2'>Pogoda dla aktualnej temperatury <span className='red-color'> {temp}</span> °C:</h3>
          <WeatherImageFunction/>
        </div>
 

  );
}

export default WeatherImage;