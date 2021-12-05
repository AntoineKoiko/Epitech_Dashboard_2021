import React, { useState, useEffect} from 'react';
import { fetchYoutubeSearch } from '../../../../utils/fetchAPI'
import { Autocomplete, TextField } from '@mui/material';

function YoutbeId({setParams, type}) {
    const [queryParams, setQueryParams] = useState("");
    const [searchResult, setSearchResult] = useState([{label: "Paris"}]);

    useEffect(() => {
        fetchYoutubeSearch(queryParams, type)
            .then((response) => {
                setSearchResult(response);
            })
            .catch((error) => {
                console.log('fetch error with weather', error.toString());
            })

    }, [queryParams, type])

    return (
        <Autocomplete
            disablePortal
            id="params-widget"
            options={searchResult}
            value={queryParams}
            sx={{width: 300}}
            onChange={(event, value) => {
                if (value && value.label) {
                    console.log(value.id);
                    setParams(value.id);
                } else {
                    setParams("");
                }
            }}
            renderInput={(params) =>
                <TextField
                    {...params}
                    id="opt"
                    label={type}
                    variant="standard"
                    onChange={e => {
                        setQueryParams(e.target.value)
                    }}
                />}
        />
    )
}

export default YoutbeId;