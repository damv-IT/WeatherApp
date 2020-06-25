import {SET_FORECAST_DATA} from '../Actions';

export const cities = (state = {}, action) => {
    switch(action.type) {
        case SET_FORECAST_DATA:
            debugger;
            const {city, forecastData} = action.payload;
            return {...state, [city]: {forecastData, weather: null}};
        default:
            return state;
    }
}