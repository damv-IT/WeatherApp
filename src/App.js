import React from 'react';
import './App.css';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import LocationListContainer from './Containers/LocationListContainer';
import ForecastExtendedContainer from './Containers/ForecastExtendedContainer';

const cities = [
  'Zapopan,mx',
  'Sidney,au',
  'Tokyo,jp',
  'Madrid,es',
  'Washington,us',
  'Mexico,mx',
];

const App = () => (
  <Grid>
    <Row>
      <AppBar position='sticky'>
        <ToolBar>
          <Typography variant='subtitle1' color='inherit'>
            Weather App
              </Typography>
        </ToolBar>
      </AppBar>
    </Row>
    <Row>
      <Col xs={12} md={6}>
        <LocationListContainer
          cities={cities} />
      </Col>
      <Col xs={12} md={6}>
        <Paper elevation={4}>
          <div className='details'>
            <ForecastExtendedContainer />
          </div>
        </Paper>
      </Col>
    </Row>
  </Grid>
);

export default App;