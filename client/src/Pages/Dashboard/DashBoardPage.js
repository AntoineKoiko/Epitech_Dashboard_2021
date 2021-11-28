import React, { Component, useEffect, useState } from 'react';
import RenderStockWidget from '../../Components/Widgets/StockWidget/RenderStockWidget';
import WeatherWidget from '../../Components/Widgets/WeatherWidget/';
import YoutubeCommentWidget from '../../Components/Widgets/YoutubeCommentWidget';
import YoutubeSubNBWidget from '../../Components/Widgets/YoutubeSubNBWidget';
import RedditSubFeedWidget from '../../Components/Widgets/RedditSubFeedWidget';
import SpotifyTopTrackWidget from '../../Components/Widgets/SpotifyTopTrackWidget';
import SpotifyTopArtistsWidget from '../../Components/Widgets/SpotifyTopArtistsWidget';
import WidgetFactory from '../../Components/Widgets/Factory/WidgetFactory';

//Drag
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time

const requestOptions = {
    method: "GET",
    credentials: "include",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Credentials": true
    }
}

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
    const [widgetList, setWidgetList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/widgets", requestOptions)
            .then(response => {
                console.log(response.status);
                if (response.status === 200)
                    return response.json();
                throw new Error("failed to parse json");
            })
            .then(responseJSON => {
                setWidgetList(responseJSON);
                console.log("JSON widget: ", responseJSON)
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <div>
            <ToDrag x={0} y={0}><YoutubeCommentWidget videoId="yeYGZmnW_kc" videoTitle="test"/></ToDrag>
            <ToDrag x={0} y={0}><YoutubeSubNBWidget channelId="UCAuUUnT6oDeKwE6v1NGQxug"/></ToDrag>
            <ToDrag x={0} y={0}><RedditSubFeedWidget subredditName="r/mac" sort="new"/></ToDrag>
            <ToDrag x={0} y={0}><SpotifyTopTrackWidget timeRange="short_term"/></ToDrag>
            <ToDrag x={0} y={0}><SpotifyTopArtistsWidget timeRange="short_term"/></ToDrag>
            {
                widgetList.length ? widgetList.map((widget) => {
                    return <ToDrag x={0} y={0}><WidgetFactory key={widget._id} widget={widget}/></ToDrag>;
                }) : <></>
            }
        </div>
    )
}

export default DashboardPage;