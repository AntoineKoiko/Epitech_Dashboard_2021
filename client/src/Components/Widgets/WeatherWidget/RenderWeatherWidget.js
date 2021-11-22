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

function RenderWeatherWidget ({cityID}) {
    const cityName = cityID ? cityID : 'Paris';
    const [weatherInfo, setInfo] = useState({
        'temperature': 0,
    });

    useEffect(() => {
        const weatherURL = new URL('http://localhost:8080/weather');

        weatherURL.searchParams.append('city', cityName);
        fetch(weatherURL, requestOptions)
        .then(response => {
            if (response.status === 200)
                return response.json();
            throw new Error("failed to authenticate user")
        })
        .then(responseJSON => {
            console.log('json weather response ', responseJSON);
            setInfo(responseJSON);
        })
        .catch(error => {
            console.log('fetch error');
            // setAutenticated(false);
            // setError("Failed to authenticate user");
        })

    }, [cityName]);

    return <WeatherWidget weatherInfo={weatherInfo} city={cityName}/>
}

export default RenderWeatherWidget;