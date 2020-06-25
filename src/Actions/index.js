import axios from 'axios';
import * as WeatherAPIServices from '../Services/WeatherAPIServices';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({type: SET_CITY, payload});

const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});

export const setSelectedCity = payload => {
    return dispatch => {
        //Activate a data search indicator on the state
        dispatch(setCity(payload));
        
        return axios.get(WeatherAPIServices.getUrlForecastByCity(payload)).then(response => {
            const forecastData = WeatherAPIServices.transformForecastData(response.data);
            debugger;
            dispatch(setForecastData({city: payload, forecastData}));
        });
    }
}


