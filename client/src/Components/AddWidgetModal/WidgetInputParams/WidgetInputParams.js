import React from 'react';
import TextField from '@mui/material/TextField';
import TimeRange from './TimeRange';
import WeatherCity from './WeatherCity';

function WidgetInputParams({serviceId, widgetSelect, setParams}) {
    console.log("serviceID", serviceId);
    if (serviceId === "spotify") {
        return <TimeRange setParams={setParams}/>
    } else if (serviceId === "weather") {
        return <WeatherCity setParams={setParams}/>
    } else {
        return <TextField id="opt" label={widgetSelect.optionLabel} variant="standard" onChange={e => setParams(e.target.value)}/>
    }
}

export default WidgetInputParams;