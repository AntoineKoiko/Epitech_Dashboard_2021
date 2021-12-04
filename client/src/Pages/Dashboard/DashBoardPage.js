import React, { useEffect, useState } from 'react';
import YoutubeCommentWidget from '../../Components/Widgets/YoutubeCommentWidget';
import YoutubeSubNBWidget from '../../Components/Widgets/YoutubeSubNBWidget';
import RedditSubFeedWidget from '../../Components/Widgets/RedditSubFeedWidget';
import WidgetFactory from '../../Components/Widgets/Factory/WidgetFactory';
import DefaultHeader from '../../Components/DefaultHeader';
import Grid from '@mui/material/Grid';

import { fetchAllWidgets } from '../../utils/fetchAPI';

//Drag
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time

import './DashboardPage.css';

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
    const [refreshWidget, setRefreshWidget] = useState(false);

    const triggerRefreshWidget = () => {
        setRefreshWidget(!refreshWidget)
    }

    useEffect(() => {
        fetchAllWidgets()
            .then(response => {
                setWidgetList(response);
                console.log("JSON widget: ", response);
            })
            .catch(error => {
                console.log(error);
            })
    }, [refreshWidget]);

    return (
        <>
            <DefaultHeader setWidgetAdded={triggerRefreshWidget} displayOptions={true}/>
            <div className="dashboard-container">
                <Grid container columnSpacing={0.5} rowSpacing={0.3}>
                    {/* <Grid item xs={4}>
                        <ToDrag x={0} y={0}><YoutubeCommentWidget videoId="yeYGZmnW_kc" videoTitle="test"/></ToDrag>
                    </Grid>
                    <Grid item xs={4}>
                        <ToDrag x={1} y={0}><YoutubeSubNBWidget channelId="UCAuUUnT6oDeKwE6v1NGQxug"/></ToDrag>
                    </Grid>
                    <Grid item xs={4}>
                        <ToDrag x={2} y={0}><RedditSubFeedWidget subredditName="r/mac" sort="new"/></ToDrag>
                    </Grid> */}
                    {
                        widgetList.length ? widgetList.map((widget) => {
                            return <ToDrag x={0} y={0} key={widget._id}><WidgetFactory widget={widget} setRefreshWidget={triggerRefreshWidget}/></ToDrag>;
                        }) : <></>
                    }
                </Grid>
            </div>
        </>
    )
}

export default DashboardPage;