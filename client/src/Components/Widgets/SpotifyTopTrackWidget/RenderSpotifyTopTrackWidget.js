import React, { useState, useEffect} from 'react';
import SpotifyTopTrackWidget from './SpotifyTopTrackWidget';

const requestOptions = {
    method: "GET",
    credentials: "include",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Credentials": true
    }
}

function RenderSpotifyTopTrackWidget({timeRange, refresh, widgetData, setRefreshWidget}) {
    const refreshRate = refresh !== undefined ? refresh : 60;
    const [items, setItems] = useState({loading: true});


    function fetchData() {
        const spotifyURL = new URL('http://localhost:8080/spotify/tracks');
        spotifyURL.searchParams.append('time_range', timeRange);

        fetch(spotifyURL, requestOptions)
            .then(response => {
                if (response.status === 200)
                    return response.json();
                throw new Error("failed to authenticate user")
            })
            .then(responseJSON => {
                console.log('json spotify response ', responseJSON);
                setItems(responseJSON.items.slice(0, 5));
            })
            .catch(error => {
                console.log('fetch error for spotify');
                console.log(error);
            })
    }

    useEffect(() => {
        console.log(`initializing interval`);
        const interval = setInterval(() => {
            console.log("spotify top Track of ", "unknown" , "refresh is ", refreshRate, " mount at ", new Date().getSeconds() );
            fetchData();
        }, refreshRate * 1000);

        fetchData();

        return () => {
            console.log(`clearing interval`);
            clearInterval(interval);
        };

    }, []);

    return <SpotifyTopTrackWidget data={items} timeRange={timeRange} widgetData={widgetData} setRefreshWidget={setRefreshWidget}/>;
}

export default RenderSpotifyTopTrackWidget;

