import React, { useEffect, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { fetchSearchStock } from '../../../../utils/fetchAPI';

function StockSearch({setParams}) {
    const [queryParams, setQueryParams] = useState("");
    const [searchResult, setSearchResult] = useState([{label: "Apple", id: "AAPL"}]);

    useEffect(() => {
        fetchSearchStock(queryParams)
            .then((response) => {
                setSearchResult(response);
            })
            .catch((error) => {
                console.log('fetch error with stock', error.toString());
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
                if (value && value.label) {
                    setParams(value.symbol);
                } else {
                    setParams("");
                }
            }}
            renderInput={(params) =>
                <TextField
                    {...params}
                    id="opt"
                    label={"stock"}
                    variant="standard"
                    onChange={e => {
                        setQueryParams(e.target.value)
                    }}
                />}
        />
    )
}

export default StockSearch;