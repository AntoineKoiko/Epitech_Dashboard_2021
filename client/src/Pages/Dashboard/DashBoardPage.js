import React, { useEffect, useState } from 'react';
import YoutubeCommentWidget from '../../Components/Widgets/YoutubeCommentWidget';
import YoutubeSubNBWidget from '../../Components/Widgets/YoutubeSubNBWidget';
import RedditSubFeedWidget from '../../Components/Widgets/RedditSubFeedWidget';
import WidgetFactory from '../../Components/Widgets/Factory/WidgetFactory';
import Grid from '@mui/material/Grid';

//Drag
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time

import './DashboardPage.css';

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
            bounds=".dashboard-container"
            axis="both"
            handle=".dragable-container"
            defaultPosition={{x: x, y: y}}
            position={null}
            grid={[3, 25]}
            scale={1}
        >
            <Grid item xs={4}>
                <div className="dragable-container">
                    {children}
                </div>
            </Grid>
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
        <div className="dashboard-container">
            <Grid container columnSpacing={0.5} rowSpacing={0.3}>
                <Grid item xs={4}>
                    <ToDrag x={0} y={0}><YoutubeCommentWidget videoId="yeYGZmnW_kc" videoTitle="test"/></ToDrag>
                </Grid>
                <Grid item xs={4}>
                    <ToDrag x={1} y={0}><YoutubeSubNBWidget channelId="UCAuUUnT6oDeKwE6v1NGQxug"/></ToDrag>
                </Grid>
                <Grid item xs={4}>
                    <ToDrag x={2} y={0}><RedditSubFeedWidget subredditName="r/mac" sort="new"/></ToDrag>
                </Grid>
                {
                    widgetList.length ? widgetList.map((widget) => {
                        return <ToDrag x={0} y={0}><WidgetFactory key={widget._id} widget={widget}/></ToDrag>;
                    }) : <></>
                }
            </Grid>
        </div>
    )
}

export default DashboardPage;