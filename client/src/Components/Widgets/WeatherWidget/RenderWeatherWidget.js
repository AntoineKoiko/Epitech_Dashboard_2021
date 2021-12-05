import React, { useCallback } from "react";
import { useEffect, useState } from "react";
import WeatherWidget from "./WeatherWidget";

import { fetchWeatherWidget } from "../../../utils/fetchAPI";

function RenderWeatherWidget ({cityID, refresh, widgetData, setRefreshWidget}) {
    const refreshRate = refresh ? refresh : 60;
    const cityName = cityID ? cityID : 'Paris';
    const [weatherInfo, setInfo] = useState({loading: true});

    const fetchData = useCallback(() => {
        fetchWeatherWidget(cityName)
            .then(response => {
                setInfo(response);
            })
            .catch(error => {
                console.log('fetch error with wather', error.toString());
            })
    }, [cityName]);

    useEffect(() => {
        console.log(`initializing interval`);
        const interval = setInterval(() => {
            console.log("weather of ", cityName, "refresh is ", refreshRate, "mount at ", new Date().getSeconds() );
            fetchData();
        }, refreshRate * 1000);

        fetchData();

        return () => {
            console.log(`clearing interval`);
            clearInterval(interval);
        };
    }, [cityName, fetchData, refreshRate]);

    return <WeatherWidget weatherInfo={weatherInfo} city={cityName} widgetData={widgetData} setRefreshWidget={setRefreshWidget}/>
}

export default RenderWeatherWidget;