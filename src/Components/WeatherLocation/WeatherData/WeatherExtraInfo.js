import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({humidity, wind}) => (
    <div className='weatherExtraInfoContainer'>
        <span className='extraInfoText'>{`Humidity: ${humidity}%`}</span>
        <span className='extraInfoText'>{`Wind: ${wind} m/s`}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
};

export default WeatherExtraInfo;