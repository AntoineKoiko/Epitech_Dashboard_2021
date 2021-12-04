import React, { useState, useEffect} from 'react';
import SpotifyTopArtistsWidget from './SpotifyTopArtistsWidget';

const requestOptions = {
    method: "GET",
    credentials: "include",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Credentials": true
    }
}

function RenderSpotifyTopArtistsWidget({timeRange, refresh, widgetData, setRefreshWidget}) {
    const refreshRate = refresh !== undefined ? refresh : 60;
    const [items, setItems] = useState({loading: true});

    const fetchData = useCallback(
        () => {
            const spotifyURL = new URL('http://localhost:8080/spotify/artists');
            spotifyURL.searchParams.append('time_range', timeRange);

            console.log('spotify  url ', spotifyURL.toString());
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
        }, [timeRange]
    );

    useEffect(() => {
        console.log(`initializing interval`);
        const interval = setInterval(() => {
            console.log("spotify top Artist of ", "unknown" , "refresh is ", refreshRate, " mount at ", new Date().getSeconds() );
            fetchData();
        }, refreshRate * 1000);

        fetchData();

        return () => {
            console.log(`clearing interval`);
            clearInterval(interval);
        };

    }, [refreshRate, fetchData]);

    return <SpotifyTopArtistsWidget data={items} timeRange={timeRange} widgetData={widgetData} setRefreshWidget={setRefreshWidget}/>;
}

export default RenderSpotifyTopArtistsWidget;

