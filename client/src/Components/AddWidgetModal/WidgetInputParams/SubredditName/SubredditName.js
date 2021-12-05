import React, { useEffect, useState } from 'react';
import { fetchSearchSubreddit } from '../../../../utils/fetchAPI';
import { Autocomplete, TextField } from '@mui/material';

function SubredditName({setParams}) {
    const [queryParams, setQueryParams] = useState("");
    const [searchResult, setSearchResult] = useState([{label: "Mac", url: "/r/mac/"}]);

    useEffect(() => {
        fetchSearchSubreddit(queryParams)
            .then((response) => {
                setSearchResult(response);
            })
            .catch((error) => {
                console.log('fetch error with reddit', error.toString());
            })
    }, [queryParams]);

    return (
        <Autocomplete
            disablePortal
            id="params-widget"
            options={searchResult}
            value={queryParams}
            sx={{width: 300}}
            onChange={(event, value) => {
                if (value && value.url) {
                    setParams(value.url)
                } else {
                    setParams("");
                }
            }}
            renderInput={(params) => 
                <TextField
                    {...params}
                    id="opt"
                    label={"Subreddit name"}
                    variant="standard"
                    onChange={e => {
                        setQueryParams(e.target.value);
                    }}
                />
            }
        />
    )
}

export default SubredditName;