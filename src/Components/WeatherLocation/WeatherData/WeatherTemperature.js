import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import * as States from '../../../Constants/WeatherStates';

const icons = {
    [States.SUNNY]: "day-sunny",
    [States.CLOUD]: "cloud",
    [States.RAIN]: "rain",
    [States.SNOW]: "snow",
    [States.DRIZZLE]: "day-showers",
    [States.THUNDER]: "day-thunderstorm",
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    const iconSize = "4x";
    if(icon)
        return (<WeatherIcons name={icon} size={iconSize}/>);

    return <WeatherIcons name={icons.sunny} size={iconSize}/> 
};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className='weatherTemperatureContainer'>
        { getWeatherIcon(weatherState) }
        <span className='temperature'>{temperature}</span>
        <span className='temperatureType'>{'°C'}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
}

export default WeatherTemperature;