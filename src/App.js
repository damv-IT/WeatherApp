import React from 'react';
import './App.css';
import WeatherLocation from './Components/WeatherLocation';

const city = 'Ecatepec';


function App() {
  return (
    <div className="App">
      <WeatherLocation city={city}/>
    </div>
  );
}

export default App;