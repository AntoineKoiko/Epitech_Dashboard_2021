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
    const [subName, setSubName] = useState('r/mac');
    const [sort, setSort] = useState('new');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const redditURL = new URL('http://localhost:8080/reddit/post');

        redditURL.searchParams.append('name', subName);
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
    }, [subName, sort]);


    return <RedditSubFeedWidget name={subName} data={posts}/>;
}

export default RenderRedditSubFeedWidget;