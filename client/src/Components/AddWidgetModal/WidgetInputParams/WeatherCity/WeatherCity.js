import React, { useState, useEffect, useCallback } from 'react';
import { Autocomplete, TextField } from '@mui/material';

function WeatherCity({setParams, value}) {
    const [queryParams, setQueryParams] = useState(value !== undefined ? value : "");
    const [searchResult, setSearchResult] = useState([{label: "Paris"}]);

    const searchCity = useCallback(
        () => {
            const options = {
                method: "GET",
                credentials: "include",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Credentials": true
                }
            }
            const weatherURL = new URL('http://localhost:8080/weather/query');
            weatherURL.searchParams.append("q", queryParams);
    
            fetch(weatherURL, options)
                .then(response => {
                    if (response.status === 200)
                        return response.json();
                    throw new Error("failed to authenticate user")
                })
                .then(responseJSON => {
                    if (responseJSON.length && responseJSON[0].label)
                        setSearchResult(responseJSON);
                })
                .catch(error => {
                    console.log('fetch error with wather', error);
                })
        }, [queryParams]
    );

    useEffect(() => {
        searchCity();
    }, [searchCity]);

    return (
        <Autocomplete
            disablePortal
            id="params-widget"
            options={searchResult}
            value={queryParams}
            onChange={(event, value) => {
                if (value && value.label)
                    setParams(value.label);
                else {
                    setParams("");
                }
            }}
            renderInput={(params) =>
                <TextField
                    {...params}
                    id="opt"
                    label={"City"}
                    variant="standard"
                    onChange={e => {
                        setQueryParams(e.target.value)
                    }}
                />}
        />
    );
}

export default WeatherCity;