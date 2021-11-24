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

function RenderSpotifyTopArtistsWidget() {
    const [topMode, setTopMode] = useState('artists'); // artists | tracks
    const [timeRange, setTimeRange] = useState('short_term'); // 'short_term', 'medium_term', 'long_term'
    const [items, setItems] = useState([]);

    console.log('spotify');
    useEffect(() => {
        const artistUrl = '/spotify/artists';
        const trackUrl = '/spotify/tracks';
        const spotifyURL = new URL('http://localhost:8080' + (topMode === 'artists' ? artistUrl : trackUrl));

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
            // setAutenticated(false);
            // setError("Failed to authenticate user");
            })
    }, [timeRange]);

    return <SpotifyTopArtistsWidget mode={topMode} data={items}/>;
}

export default RenderSpotifyTopArtistsWidget;

