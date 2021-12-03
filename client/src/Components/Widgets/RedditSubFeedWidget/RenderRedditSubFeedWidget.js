import React, { useState, useEffect } from 'react';
import RedditSubFeedWidget from './RedditSubFeedWidget';

import { fetchRedditSubFedd } from '../../../utils/fetchAPI';

function RenderRedditSubFeedWidget ({subredditName, sort="new", refresh, widgetData}) {
    const refreshRate = refresh !== undefined ? refresh : 60;
    const [posts, setPosts] = useState([]);

    function fetchData() {
        fetchRedditSubFedd(subredditName, sort)
            .then(response => {
                console.log('json reddit response ', response.data.children);
                setPosts(response.data.children.slice(0, 5));
            })
            .catch(error => {
                console.log('fetch error for reddit');
                console.log(error);
            })
    };

    useEffect(() => {
        console.log(`initializing interval`);
        const interval = setInterval(() => {
            console.log("spotify top Artist of ", "unknown" , "refresh is ", refresh, " mount at ", new Date().getSeconds() );
            fetchData();
        }, refreshRate * 1000);

        fetchData();

        return () => {
            console.log(`clearing interval`);
            clearInterval(interval);
        };

    }, [subredditName, sort]);


    return <RedditSubFeedWidget subName={subredditName} data={posts} widgetData={widgetData}/>;
}

export default RenderRedditSubFeedWidget;