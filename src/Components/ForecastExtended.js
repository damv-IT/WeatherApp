import React from 'react';
import PropTypes from 'prop-types';

import ForecastItem from './ForecastItem';

const renderForecastItemDays = (forecastData) => {

    return forecastData.map(forecast => {
        const {weekDay, hour, data} = forecast;
        
        return (<ForecastItem
                key={`${weekDay}${hour}`}
                weekDay={weekDay}
                hour={hour}
                data={data}
                />);
    });
}

const ForecastExtended = ({ city, forecastData }) => (
    <div>
        <h3 className='forecast-title'> Forecast Extended for: {city}</h3>
        {
            forecastData ?
                renderForecastItemDays(forecastData) :
                <h3>Loaging forecast...</h3>
        }
    </div>
);

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array.isRequired,
};

export default ForecastExtended;