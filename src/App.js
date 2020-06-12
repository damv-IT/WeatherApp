import React, {Component} from 'react';
import './App.css';
import {Grid, Col, Row} from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <ToolBar>
              <Typography variant='title' color='inherit'>
                Weather App
              </Typography>
            </ToolBar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleLocationSelect}
            />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className='details'>
                {city ?
                  <span>{city}</span> :
                  <h4>City has not been selected</h4>
                }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

/*
<div className="App">
        <LocationList 
          cities={cities}
          onSelectedLocation={this.handleLocationSelect}/>
        
        {city ?
        <span>{city}</span> :
        <h4>City has not been selected</h4>
        }
      </div>

*/

export default App;