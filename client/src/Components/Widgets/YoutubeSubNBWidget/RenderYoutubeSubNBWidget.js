import React from 'react';
import YoutubeSubNBWidget from './YoutubeSubNBWidget';
import { useState } from 'react';

function RenderYoutubeSubNBWidget () {
    const [channel, setChannel] = useState("Unknown user");
    const [subNB, setSubNB] = useState("Fail to load");


    return <YoutubeSubNBWidget channel="TauteYT" subNb={42} />
}

export default RenderYoutubeSubNBWidget;