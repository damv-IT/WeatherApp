import React from 'react';
import './App.css';

import LocationList from './Components/WeatherLocation/LocationList';

const cities = [
  'Zapopan,mx',
  'Sidney,au',
  'Tokyo,jp',
  'Madrid,es',
  'Washington,us',
  'Mexico,mx',
];


function App() {
  return (
    <div className="App">
      <LocationList cities={cities}/>
    </div>
  );
}

export default App;