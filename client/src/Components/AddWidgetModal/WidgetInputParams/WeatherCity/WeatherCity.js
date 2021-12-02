import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField } from '@mui/material';

function WeatherCity({setParams}) {
    const [queryParams, setQueryParams] = useState("");
    const [searchResult, setSearchResult] = useState([{label: "Paris"}]);

    function searchCity() {
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
                setSearchResult(responseJSON);
            })
            .catch(error => {
                console.log('fetch error with wather', error);
            })
    }

    useEffect(() => {
        searchCity();
    }, [queryParams]);

    return (
        <Autocomplete
            disablePortal
            id="params-widget"
            options={searchResult}
            renderInput={(params) => 
                <TextField 
                    {...params} 
                    id="opt" 
                    label={"PARAMS UNDEFINED"} 
                    variant="standard" 
                    onChange={e => {
                        setQueryParams(e.target.value)
                        setParams(e.target.value);
                    }}
                />}
        />    
    );
}

export default WeatherCity;