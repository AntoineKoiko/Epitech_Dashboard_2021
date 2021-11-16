import React from 'react';
import './WeatherWidget.css';
import WidgetFrame from '../WidgetFrame';
import '../../Styles/GlobalStyle.css';

function WeatherWidget ({city, weatherInfo}) {
    const iconUrl = 'https:' + (weatherInfo.current ? weatherInfo.current.condition.icon : '');
    const temp = weatherInfo.current ? weatherInfo.current.temp_c: 9;
    console.log(weatherInfo);

    return (
        <WidgetFrame title="Weather" subtitle={city}>
            <div className="weather-widget">
                <img id="weather-logo" src={iconUrl} />
                <p id="weather-temperature">{temp} °C</p>
            </div>
            <div className="center-h">
                <p>{weatherInfo.current.condition.text}</p>
            </div>
        </WidgetFrame>
    )
}

export default WeatherWidget;

