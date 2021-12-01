import React from "react";
import { useEffect, useState } from "react";
import WeatherWidget from "./WeatherWidget";

const requestOptions = {
    method: "GET",
    credentials: "include",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Credentials": true
    }
}

function RenderWeatherWidget ({cityID, refresh, widgetData}) {
    const refreshRate = refresh ? refresh : 60;
    const cityName = cityID ? cityID : 'Paris';
    const [weatherInfo, setInfo] = useState({loading: true});


    function fetchData() {
        const weatherURL = new URL('http://localhost:8080/weather');
        weatherURL.searchParams.append('city', cityName);

        fetch(weatherURL, requestOptions)
            .then(response => {
                if (response.status === 200)
                    return response.json();
                throw new Error("failed to authenticate user")
            })
            .then(responseJSON => {
                setInfo(responseJSON);
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

    return <WeatherWidget weatherInfo={weatherInfo} city={cityName} widgetData={widgetData}/>
}

export default RenderWeatherWidget;