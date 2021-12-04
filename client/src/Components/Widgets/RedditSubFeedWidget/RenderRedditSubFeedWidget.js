import React, { useState, useEffect, useCallback } from 'react';
import RedditSubFeedWidget from './RedditSubFeedWidget';

import { fetchRedditSubFedd } from '../../../utils/fetchAPI';

function RenderRedditSubFeedWidget ({subredditName, sort="new", refresh, widgetData, setRefreshWidget}) {
    const refreshRate = refresh !== undefined ? refresh : 60;
    const [posts, setPosts] = useState({loading: true});

    const fetchData = useCallback(() => {
        fetchRedditSubFedd(subredditName, sort)
            .then(response => {
                console.log('json reddit response ', response.data.children);
                setPosts(response.data.children.slice(0, 5));
            })
            .catch(error => {
                console.log('fetch error for reddit');
                console.log(error.toString());
            })
    }, [subredditName, sort])

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


    return <RedditSubFeedWidget subName={subredditName} data={posts} widgetData={widgetData} setRefreshWidget={setRefreshWidget}/>;
}

export default RenderRedditSubFeedWidget;