import React, {Component} from 'react';
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

class App extends Component {

  constructor(){
    super();
    this.state = {
      city: null
    }
  }

  handleLocationSelect = city => {
    console.log(`Evento handleLocationSelect desde App, ciudad: ${city}`); 
    this.setState({city});
  }
  
  render() {
    const {city} = this.state;
    return (
      <div className="App">
        <LocationList 
          cities={cities}
          onSelectedLocation={this.handleLocationSelect}/>
        
        {city ?
        <span>{city}</span> :
        <h4>City has not been selected</h4>
        }
      </div>
    );
  }
}

export default App;