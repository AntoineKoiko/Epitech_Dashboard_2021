import React, { useState, useEffect} from 'react';
import YoutubeCommentWidget from './YoutubeCommentWidget';

const requestOptions = {
    method: "GET",
    credentials: "include",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Credentials": true
    }
}

function RenderYoutubeCommentWidget() {
    const [videoId, setId] = useState('yeYGZmnW_kc');
    const [videoName, setName] = useState('Unknown');
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const ytURL = new URL('http://localhost:8080/youtube/comments');

        ytURL.searchParams.append('video_id', videoId);

        console.log('Youtube comment url ', ytURL.toString());
        fetch(ytURL, requestOptions)
            .then(response => {
                if (response.status === 200)
                    return response.json();
                throw new Error("failed to authenticate user")
            })
            .then(responseJSON => {
                console.log('json youtube comment response ', responseJSON);
                setComments(responseJSON.slice(0, 5));
            })
            .catch(error => {
                console.log('fetch error for youtube comment');
                console.log(error);
            // setAutenticated(false);
            // setError("Failed to authenticate user");
            })
    }, [videoId]);

    return <YoutubeCommentWidget commentList={comments}/>;
}

export default RenderYoutubeCommentWidget;