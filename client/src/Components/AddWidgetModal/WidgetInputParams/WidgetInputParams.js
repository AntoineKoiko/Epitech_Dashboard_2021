import React from 'react';
import TextField from '@mui/material/TextField';
import TimeRange from './TimeRange';
import WeatherCity from './WeatherCity';
import YoutubeId from "./YoutubeId"

function WidgetInputParams({serviceId, widgetSelect, setParams, value}) {
    console.log("serviceID", serviceId);
    if (serviceId === "spotify") {
        return <TimeRange setParams={setParams}/>
    } else if (serviceId === "weather") {
        return <WeatherCity setParams={setParams} value={value}/>
    } else if (serviceId === "youtube") {
        if (widgetSelect.id === "video_comment") {
            return <YoutubeId setParams={setParams} type="video"/>
        } else if (widgetSelect.id === "channel_stat") {
            return <YoutubeId setParams={setParams} type="channel"/>
        }
    } 
    else {
        return <TextField id="opt" label={widgetSelect.optionLabel} variant="standard" onChange={e => setParams(e.target.value)}/>
    }
}

export default WidgetInputParams;