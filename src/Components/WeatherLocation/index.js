//external
import React, {Component} from 'react';
import PropTypes from 'prop-types';

//local components
import Location from './Location';
import WeatherData from './WeatherData';
import * as States from '../../Constants/WeatherStates';

//styles
import './styles.css';

const data = {
    temperature: 27,
    weatherState: States.DRIZZLE,
    humidity: 40,
    wind: 20,
};

const data2 = {
    temperature: 15,
    weatherState: States.CLOUD,
    humidity: 10,
    wind: 50,
};

class WeatherLocation extends Component {
    
    constructor(){
        super();
        this.state = {
            city: 'Ecatepec',
            data,
        };
    }

    handleUpdateClick = () =>{
        this.setState({
            city: 'Zapopan',
            data: data2,
        });
    }
    
    render(){
        const {city, data} = this.state;

        return (<div className='weatherLocationContainer'>
                    <Location city={city}/>
                    <WeatherData data={data}/>
                    <button onClick={this.handleUpdateClick}>Update</button>
               </div>);
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
};

export default WeatherLocation;