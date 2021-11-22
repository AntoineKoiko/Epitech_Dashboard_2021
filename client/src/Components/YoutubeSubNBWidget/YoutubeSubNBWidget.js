import React from 'react';
import WidgetFrame from '../WidgetFrame';

function YoutubeSubNBWidget ({channel, subNb}) {
    return (
        <WidgetFrame title="Youtube" subtitle={channel}>
            <p>Number of sub: <span>{subNb}</span></p>
        </WidgetFrame>
    )
}

export default YoutubeSubNBWidget;

