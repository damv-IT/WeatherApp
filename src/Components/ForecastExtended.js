import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {SUNNY} from '../Constants/WeatherStates';
import ForecastItem from './ForecastItem';

const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];
const hour = 12;

const data = {
    temperature: 45, 
    weatherState: SUNNY, 
    humidity: 25, 
    wind: 5,
}

class ForecastExtended extends Component {

    renderForecastItemDays() {
        const forecastItemArray = days.map(day => {
            return (<ForecastItem
                key={`${day}${hour}`}
                weekDay={day}
                hour={hour}
                data={data}
            />)
        });

        return forecastItemArray;
    }

    render() {
        const {city} = this.props;
        return (
            <div>
                <h3 className='forecast-title'> Forecast Extended for: {city}</h3>
                {this.renderForecastItemDays()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
};

export default ForecastExtended;