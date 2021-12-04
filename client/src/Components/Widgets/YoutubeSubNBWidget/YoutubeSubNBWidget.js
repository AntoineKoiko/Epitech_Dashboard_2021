import React from 'react';
import WidgetFrame from '../WidgetFrame';

import './YoutubeSubNBWidget.css';

function nbFormatter(num, digits) {
    const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "Md" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "P" },
        { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function(item) {
        return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + (" " + item.symbol) : "0";
}


function StatNb ({text, value}) {
    const formatVal = nbFormatter(value, 3);
    return (
        <div className="stat-container">
            <h3 className="stat-text">{text}</h3>
            <h3 className="stat-value">{formatVal}</h3>
        </div>
    )
}

function YoutubeSubNBWidget ({channelName, channelInfo, widgetData, setRefreshWidget}) {
    return (
        <WidgetFrame title="Youtube" subtitle={channelName} widgetId={'TODO REPLACE IT)'} setRefreshWidget={setRefreshWidget}>
            <StatNb text="Subscribers:" value={channelInfo.subscriberCount}/>
            <StatNb text="Views:" value={channelInfo.viewCount}/>
            <StatNb text="Videos:" value={channelInfo.videoCount}/>
        </WidgetFrame>
    )
}

export default YoutubeSubNBWidget;

