import React from 'react';
import YoutubeSubNBWidget from './YoutubeSubNBWidget';
import { useState, useEffect } from 'react';

const requestOptions = {
    method: "GET",
    credentials: "include",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Credentials": true
    }
}

function RenderYoutubeSubNBWidget ({channelId, refresh}) {
    const [channelName, setChannelName] = useState("TauteYT");
    const [channelInfo, setChannelInfo] = useState({
        viewCount: "0",
        subscriberCount: "0",
        hiddenSubscriberCount: false,
        videoCount: "0",
    });

    function fetchData() {
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
            // setAutenticated(false);
            // setError("Failed to authenticate user");
            })
    };

    useEffect(() => {
        console.log(`initializing interval`);
        const interval = setInterval(() => {
            console.log("youtube sub nb of ", channelName , "refresh is ", refresh, " mount at ", new Date().getSeconds() );
            fetchData();
        }, 60 * 1000);

        fetchData();

        return () => {
            console.log(`clearing interval`);
            clearInterval(interval);
        };

    }, [channelId]);

    return <YoutubeSubNBWidget channelName={channelName} channelInfo={channelInfo} />
}

export default RenderYoutubeSubNBWidget;