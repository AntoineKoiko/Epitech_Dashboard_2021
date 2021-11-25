import React, { Component } from 'react';
import RenderStockWidget from '../../Components/Widgets/StockWidget/RenderStockWidget';
import WeatherWidget from '../../Components/Widgets/WeatherWidget/';
import YoutubeCommentWidget from '../../Components/Widgets/YoutubeCommentWidget';
import YoutubeSubNBWidget from '../../Components/Widgets/YoutubeSubNBWidget';
import RedditSubFeedWidget from '../../Components/Widgets/RedditSubFeedWidget';
import SpotifyTopTrackWidget from '../../Components/Widgets/SpotifyTopTrackWidget';
import SpotifyTopArtistsWidget from '../../Components/Widgets/SpotifyTopArtistsWidget';

//Drag
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time

function ToDrag({x, y, children}) {
    return (
        <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={{x: x, y: y}}
            position={null}
            grid={[25, 25]}
            scale={1}
        >
            <div className="handle">
                {children}
            </div>
        </Draggable>
    );
}


function DashboardPage() {
    return (
        <div>
            <p>I'm the dasboard page</p>

            <ToDrag x={0} y={0}><RenderStockWidget stockID="AAPL"/></ToDrag>
            <ToDrag x={0} y={0}><WeatherWidget cityID="Rennes"/></ToDrag>
            <ToDrag x={0} y={0}><YoutubeCommentWidget videoId="yeYGZmnW_kc" videoTitle="test"/></ToDrag>
            <ToDrag x={0} y={0}><YoutubeSubNBWidget channelId="UCAuUUnT6oDeKwE6v1NGQxug"/></ToDrag>
            <ToDrag x={0} y={0}><RedditSubFeedWidget subredditName="r/mac" sort="new"/></ToDrag>
            <ToDrag x={0} y={0}><SpotifyTopTrackWidget timeRange="short_term"/></ToDrag>
            <ToDrag x={0} y={0}><SpotifyTopArtistsWidget timeRange="short_term"/></ToDrag>
        </div>
    )
}

export default DashboardPage;