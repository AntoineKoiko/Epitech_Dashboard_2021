import React from "react";
import { useEffect, useState } from "react";
import WeatherWidget from "./WeatherWidget";

import { fetchWeatherWidget } from "../../../utils/fetchAPI";

function RenderWeatherWidget ({cityID, refresh, widgetData, setRefreshWidget}) {
    const refreshRate = refresh ? refresh : 60;
    const cityName = cityID ? cityID : 'Paris';
    const [weatherInfo, setInfo] = useState({loading: true});


    function fetchData() {
        fetchWeatherWidget(cityName)
            .then(response => {
                setInfo(response);
            })
            .catch(error => {
                console.log('fetch error with wather', error);
            })
    }

    useEffect(() => {
        console.log(`initializing interval`);
        const interval = setInterval(() => {
            console.log("weather of ", cityID, "refresh is ", refreshRate, "mount at ", new Date().getSeconds() );
            fetchData();
        }, refreshRate * 1000);

        fetchData();

        return () => {
            console.log(`clearing interval`);
            clearInterval(interval);
        };
    }, [cityID]);

    return <WeatherWidget weatherInfo={weatherInfo} city={cityName} widgetData={widgetData} setRefreshWidget={setRefreshWidget}/>
}

export default RenderWeatherWidget;