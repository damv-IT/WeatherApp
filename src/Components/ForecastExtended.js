import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import {SUNNY} from '../Constants/WeatherStates';
import ForecastItem from './ForecastItem';

import {transformForecastData, getUrlForecastByCity} from '../Services/WeatherAPIServices';

class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = {
            forecastData: null,
        }
    }

    renderForecastItemDays() {
        const {forecastData} = this.state;

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

    //DEPRECATED
    /*componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({forecastData: null});
            this.updateCity(nextProps.city);
        }
    }*/

    static getDerivedStateFromProps(nextProps, prevState){
        const {city} = nextProps;
        return city === prevState.city 
            ? {forecastData: prevState.forecastData, city}
            : {forecastData: null, city};
    }

    componentDidUpdate() {
        if(this.state.forecastData === null)
            this.updateCity(this.state.city);
    }

    updateCity = async city => {
        const url_forecast = getUrlForecastByCity(city);
        const response = await axios.get(url_forecast);
        const forecastData = transformForecastData(response.data);

        this.setState({forecastData});
    }
    
    componentDidMount() {
        this.updateCity(this.props.city);
    }

    render() {
        const {city} = this.props;
        const {forecastData} = this.state;
        return (
            <div>
                <h3 className='forecast-title'> Forecast Extended for: {city}</h3>
                {
                    forecastData ?
                    this.renderForecastItemDays() :
                    <h3>Loaging forecast...</h3>
                }
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
};

export default ForecastExtended;