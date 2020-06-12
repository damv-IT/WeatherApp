import {api_key, url_base_weather} from '../Constants/api_url';
import * as States from '../Constants/WeatherStates';

const getWeatherState = weather => {
    const { id } = weather;

    if(id < 300) {
        return States.THUNDER;
    }
    else if(id < 400) {
        return States.DRIZZLE;
    }
    else if(id < 500) {
        return States.RAIN;
    }
    else if(id < 600) {
        return States.SNOW
    }
    else if(id < 700) {
        return States.SUNNY
    }

    return States.CLOUD;
};

export const getUrlWeatherByCity = city => {
    return `${url_base_weather}?q=${city}&appid=${api_key}&units=metric`;
};

export const transformWeatherData = apiWeatherData => {
    const {temp, humidity} = apiWeatherData.main;
    const {speed} = apiWeatherData.wind;
    const weatherState = getWeatherState(apiWeatherData.weather[0]);

    const convertedData = {
        temperature: temp,
        weatherState,
        wind: speed,
        humidity,
    }

    return convertedData;
}