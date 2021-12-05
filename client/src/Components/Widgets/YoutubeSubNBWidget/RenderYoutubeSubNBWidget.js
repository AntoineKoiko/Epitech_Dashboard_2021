import React, { useCallback } from 'react';
import YoutubeSubNBWidget from './YoutubeSubNBWidget';
import { useState, useEffect } from 'react';
import { fetchYoutubeChannelName } from '../../../utils/fetchAPI';

const requestOptions = {
    method: "GET",
    credentials: "include",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Credentials": true
    }
}

function RenderYoutubeSubNBWidget ({channelId, refresh, widgetData, setRefreshWidget}) {
    const refreshRate = refresh !== undefined ? refresh : 60;
    const [channelName, setChannelName] = useState("TauteYT");
    const [channelInfo, setChannelInfo] = useState({
        loading: true
    });

    const fetchData = useCallback(
        () => {
            const ytURL = new URL('http://localhost:8080/youtube/channelStats');
            ytURL.searchParams.append('channel_id', channelId);

            console.log('yt sub url ', ytURL.toString());
            fetch(ytURL, requestOptions)
                .then(response => {
                    if (response.status === 200)
                        return response.json();
                    console.log('yt response : ', response)
                    throw new Error("failed to authenticate user")
                })
                .then(responseJSON => {
                    console.log('json yt response success ', responseJSON);
                    setChannelInfo(responseJSON);
                })
                .catch(error => {
                    console.log('fetch error for youtube sub nb');
                    console.log(error);
                })
            fetchYoutubeChannelName(channelId)
                .then(response => {
                    setChannelName(response.title);
                })
                .catch(error => {
                    console.log("Failed to get error channel name: ", error.toString());
                })
        }, [channelId]
    );

    useEffect(() => {
        console.log(`initializing interval`);
        const interval = setInterval(() => {
            console.log("youtube sub nb of ", channelName , "refresh is ", refreshRate, " mount at ", new Date().getSeconds() );
            fetchData();
        }, refreshRate * 1000);

        fetchData();

        return () => {
            console.log(`clearing interval`);
            clearInterval(interval);
        };

    }, [fetchData, refreshRate, channelName]);

    return <YoutubeSubNBWidget channelName={channelName} channelInfo={channelInfo} widgetData={widgetData} setRefreshWidget={setRefreshWidget}/>
}

export default RenderYoutubeSubNBWidget;