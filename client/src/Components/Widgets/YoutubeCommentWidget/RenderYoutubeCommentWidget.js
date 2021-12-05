import React, { useState, useEffect, useCallback} from 'react';
import YoutubeCommentWidget from './YoutubeCommentWidget';
import { fetchYoutubeVideoName } from '../../../utils/fetchAPI';

const requestOptions = {
    method: "GET",
    credentials: "include",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Credentials": true
    }
}

function RenderYoutubeCommentWidget({videoId, refresh, widgetData, setRefreshWidget}) {
    const refreshRate = refresh !== undefined ? refresh : 60;
    const [videoName, setName] = useState('Unknown');
    const [comments, setComments] = useState({loading: true});

    const fetchData = useCallback(
        () => {
            const ytURL = new URL('http://localhost:8080/youtube/comments');
            ytURL.searchParams.append('video_id', videoId);

            console.log('yt url:', ytURL.toString())
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
                })
            fetchYoutubeVideoName(videoId)
                .then(response => {
                    setName(response.title);
                })
                .catch(error => {
                    console.log("Failed to get error video name: ", error.toString());
                })
        }, [videoId]
    );

    useEffect(() => {
        console.log(`initializing interval`);
        const interval = setInterval(() => {
            console.log("youtube comment of ", videoName , "refresh is ", refreshRate, " mount at ", new Date().getSeconds() );
            fetchData();
        }, refreshRate * 1000);

        fetchData();

        return () => {
            console.log(`clearing interval`);
            clearInterval(interval);
        };

    }, [fetchData, videoName, refreshRate]);

    return <YoutubeCommentWidget videoTitle={videoName} commentList={comments} widgetData={widgetData} setRefreshWidget={setRefreshWidget}/>;
}

export default RenderYoutubeCommentWidget;