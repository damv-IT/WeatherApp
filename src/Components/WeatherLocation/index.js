//external
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

//local components
import Location from './Location';
import WeatherData from './WeatherData';
import * as WeatherAPIServices from '../../Services/WeatherAPIServices';

//styles
import './styles.css';

class WeatherLocation extends Component {
    
    constructor(){
        super();
        this.state = {
            city: 'Zapopan,mx',
            data: null,
        };
    }

    componentDidMount(){
        this.handleUpdateClick();
    }

    handleUpdateClick = () =>{
        const {city} = this.props;
        fetch(WeatherAPIServices.getUrlWeatherByCity(city)).then(resolve => {
            return resolve.json();
        }).then(data => {
            this.setState({
                city,
                data: WeatherAPIServices.transformWeatherData(data),
            });
        });
    }
    
    render(){
        const {city, data} = this.state;

        return (<div className='weatherLocationContainer'>
                    <Location city={city}/>
                    { data ? 
                        <WeatherData data={data}/> :
                        <CircularProgress size={50}/>
                    }
               </div>);
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
};

export default WeatherLocation;