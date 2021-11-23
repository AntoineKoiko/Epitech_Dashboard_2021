import React from 'react';
import WidgetFrame from '../WidgetFrame';

function YoutubeSubNBWidget ({channelName, channelInfo}) {
    return (
        <WidgetFrame title="Youtube" subtitle={channelName}>
            <p>Number of subscriber: <span>{channelInfo.subscriberCount}</span></p>
            <p>Number of view: <span>{channelInfo.viewCount}</span></p>
            <p>Number of video: <span>{channelInfo.videoCount}</span></p>
        </WidgetFrame>
    )
}

export default YoutubeSubNBWidget;

