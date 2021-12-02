import { MenuItem } from '@material-ui/core';
import { InputLabel, Select } from '@mui/material';
import React, { useState } from 'react';

function TimeRange({setParams}) {
    const timeRangeTextArray = [
        {value: "short_term", label: "Last 4 weeks"},
        {value: "medium_term", label: "Last 6 monts"},
        {value: "long_term", label: "All time"}
    ];
    const [timeRange, setTimeRange] = useState(timeRangeTextArray[0]);

    const handleChangeTimeRange = (event) => {
        const newTimeRange = event.target.value;
        const newSelected = timeRangeTextArray.find(elt => elt.value === newTimeRange);
        setTimeRange(newSelected);
        setParams(newSelected.value);
    }

    return (
        <>
            <InputLabel id="widget-spotify-params">Time Range</InputLabel>
            <Select
                labelId="timeRange-spotify-label"
                id="timeRange-spotify"
                value={timeRange.value}
                onChange={handleChangeTimeRange}
                label="Time Range"
            >
                {
                    timeRangeTextArray.map((timeRangeElem) => {
                        return <MenuItem key={timeRangeElem.value} value={timeRangeElem.value}>{timeRangeElem.label}</MenuItem>
                    })
                }
            </Select>
        </>
    )
}

export default TimeRange;