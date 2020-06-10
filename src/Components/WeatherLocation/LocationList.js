import React from 'react';
import PropTypes from 'prop-types';

import WeatherLocation from '../WeatherLocation';

const LocationList = ({cities}) => {

    const getComponentsFromCities = cities => (
        cities.map(city =>(
            <WeatherLocation city={city} key={city}/>
        ))
    );

    return (
        <div>
            {getComponentsFromCities(cities)}
        </div>
    );
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
};

export default LocationList;

