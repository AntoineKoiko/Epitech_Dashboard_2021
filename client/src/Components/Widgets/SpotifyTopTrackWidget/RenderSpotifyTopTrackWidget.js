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

function RenderSpotifyTopTrackWidget({timeRange, refresh}) {
    const [topMode, setTopMode] = useState('tracks'); // artists | tracks
    //const [timeRange, setTimeRange] = useState('short_term'); // 'short_term', 'medium_term', 'long_term'
    const [items, setItems] = useState([]);


    function fetchData() {
        const artistUrl = '/spotify/artists';
        const trackUrl = '/spotify/tracks';
        const spotifyURL = new URL('http://localhost:8080' + (topMode === 'artists' ? artistUrl : trackUrl));
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
            // setAutenticated(false);
            // setError("Failed to authenticate user");
            })
    }

    useEffect(() => {
        console.log(`initializing interval`);
        const interval = setInterval(() => {
            console.log("spotify top Track of ", "unknown" , "refresh is ", refresh, " mount at ", new Date().getSeconds() );
            fetchData();
        }, 60 * 1000);

        fetchData();

        return () => {
            console.log(`clearing interval`);
            clearInterval(interval);
        };

    }, [timeRange]);

    return <SpotifyTopTrackWidget mode={topMode} data={items}/>;
}

export default RenderSpotifyTopTrackWidget;

