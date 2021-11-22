import React from 'react';
import RenderStockWidget from '../../Components/StockWidget/RenderStockWidget';
import WeatherWidget from '../../Components/WeatherWidget/';
import YoutubeCommentWidget from '../../Components/YoutubeCommentWidget';
import YoutubeSubNBWidget from '../../Components/YoutubeSubNBWidget';
import RedditSubFeedWidget from '../../Components/RedditSubFeedWidget';
import SpotifyTopWidget from '../../Components/SpotifyTopWidget/SpotifyTopWidget';

function DashboardPage() {
    return (
        <div>
            <p>I'm the dasboard page</p>
            <RenderStockWidget stockID="AAPL"/>
            <WeatherWidget cityID="Rennes"/>
            <YoutubeCommentWidget videoTitle="test"/>
            <YoutubeSubNBWidget/>
            <RedditSubFeedWidget/>
            <SpotifyTopWidget/>
        </div>
    )
}

export default DashboardPage;