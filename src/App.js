import React, { useState } from 'react';
import './App.css';


const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperature = () => {
    if(temperatureValue === 30) return;

    const newTemperature = (temperatureValue + 1);

    if (newTemperature >= 15) {
       setTemperatureColor('hot')
    }
    setTemperatureValue(newTemperature);
  }
  
  const decreaseTemperature = () => {
    if(temperatureValue === 0) return;

    const newTemperature = (temperatureValue - 1);

    if (newTemperature < 15) {
       setTemperatureColor('cold')
    }
    setTemperatureValue(newTemperature);
  }

  return (
    <div className="App">
      <div className="temperature-container">
            <div className={`temperature-display ${temperatureColor}`}><p>{temperatureValue}°C</p></div>
            <div className='button-container'>
              <button onClick={() => increaseTemperature()} className='button'>+</button>
              <div className='divider'></div>
              <button onClick={() => decreaseTemperature()} className='button'>-</button>
            </div>
      </div>
    </div>
  );
}

export default App;
