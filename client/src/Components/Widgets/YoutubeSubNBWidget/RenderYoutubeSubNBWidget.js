import React from 'react';
import YoutubeSubNBWidget from './YoutubeSubNBWidget';
import { useState } from 'react';

function RenderYoutubeSubNBWidget () {
    const [channel, setChannel] = useState("TauteYT");
    const [subNB, setSubNB] = useState(42);


    return <YoutubeSubNBWidget channel={channel} subNb={subNB} />
}

export default RenderYoutubeSubNBWidget;