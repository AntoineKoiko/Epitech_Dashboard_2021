import React from 'react';
import RenderStockWidget from '../../Components/Widgets/StockWidget/RenderStockWidget';
import WeatherWidget from '../../Components/Widgets/WeatherWidget/';
import YoutubeCommentWidget from '../../Components/Widgets/YoutubeCommentWidget';
import YoutubeSubNBWidget from '../../Components/Widgets/YoutubeSubNBWidget';
import RedditSubFeedWidget from '../../Components/Widgets/RedditSubFeedWidget';
import SpotifyTopWidget from '../../Components/Widgets/SpotifyTopWidget/SpotifyTopWidget';

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