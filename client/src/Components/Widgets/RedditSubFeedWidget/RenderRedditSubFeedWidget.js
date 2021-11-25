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

function RenderRedditSubFeedWidget ({subredditName, sort}) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const redditURL = new URL('http://localhost:8080/reddit/post');

        redditURL.searchParams.append('name', subredditName);
        redditURL.searchParams.append('sort', sort);

        console.log('reddit url ', redditURL.toString());
        fetch(redditURL, requestOptions)
            .then(response => {
                if (response.status === 200)
                    return response.json();
                throw new Error("failed to authenticate user")
            })
            .then(responseJSON => {
                console.log('json reddit response ', responseJSON);
                setPosts(responseJSON.data.children);
            })
            .catch(error => {
                console.log('fetch error for reddit');
                console.log(error);
            // setAutenticated(false);
            // setError("Failed to authenticate user");
            })
    }, [subredditName, sort]);


    return <RedditSubFeedWidget name={subredditName} data={posts}/>;
}

export default RenderRedditSubFeedWidget;