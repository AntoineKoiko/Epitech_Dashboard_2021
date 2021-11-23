import React, { useState, useEffect } from 'react';
import RedditSubFeedWidget from './RedditSubFeedWidget';

const requestOptions = {
    method: "GET",
    credentials: "include",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Credentials": true
    }
}

function RenderRedditSubFeedWidget () {
    const [subName, setSubName] = useState('python');
    const [sort, setSort] = useState('hot');

    useEffect(() => {
        const redditURL = new URL('http://localhost:8080/reddit/post');

        redditURL.searchParams.append('sort', sort);
        redditURL.searchParams.append('name', subName);

        console.log('reddit url ', redditURL.toString());
        fetch(redditURL, requestOptions)
            .then(response => {
                if (response.status === 200)
                    return response.json();
                throw new Error("failed to authenticate user")
            })
            .then(responseJSON => {
                console.log('json reddit response ', responseJSON);
            })
            .catch(error => {
                console.log('fetch error for reddit');
                console.log(error);
            // setAutenticated(false);
            // setError("Failed to authenticate user");
            })
    }, [subName, sort]);


    return <RedditSubFeedWidget/>;
}

export default RenderRedditSubFeedWidget;