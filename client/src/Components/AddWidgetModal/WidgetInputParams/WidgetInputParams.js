import React from 'react';
import TextField from '@mui/material/TextField';
import TimeRange from './TimeRange';
import WeatherCity from './WeatherCity';
import YoutubeId from "./YoutubeId"
import SubredditName from './SubredditName';
import StockSearch from './StockSearch/StockSearch';

function WidgetInputParams({serviceId, widgetSelect, setParams, value}) {
    if (serviceId === "spotify") {
        return <TimeRange setParams={setParams}/>
    } else if (serviceId === "weather") {
        return <WeatherCity setParams={setParams} value={value}/>
    } else if (serviceId === "youtube") {
        if (widgetSelect.id === "video_comment" || widgetSelect === "video_comment") {
            return <YoutubeId setParams={setParams} type="video"/>
        } else if (widgetSelect.id === "channel_stat" || widgetSelect === "channel_stat") {
            return <YoutubeId setParams={setParams} type="channel"/>
        }
    } else if (serviceId === "reddit") {
        return <SubredditName setParams={setParams} value={value}/>
    } else if (serviceId === "stock") {
        return <StockSearch setParams={setParams}/>
    } else {
        return <TextField id="opt" label={widgetSelect.optionLabel} variant="standard" onChange={e => setParams(e.target.value)}/>
    }
}

export default WidgetInputParams;