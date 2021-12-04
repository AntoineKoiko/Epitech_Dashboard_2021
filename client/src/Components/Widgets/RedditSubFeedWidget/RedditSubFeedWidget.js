import React from 'react';
import WidgetFrame from '../WidgetFrame';

import './RedditSubFeedWidget.css';

function Post({title, url}) {

    return (
        <div className="post-elt" onClick={()=> window.open(url, "_blank")}>
            <h4>{title}</h4>
        </div>
    )
}



function RedditSubFeedWidget ({subName, data, widgetData, setRefreshWidget}) {
    return (
        <WidgetFrame title="Reddit" subtitle={subName} widgetId={'TODO REPLACE IT'} setRefreshWidget={setRefreshWidget}>
            {data.map((item, idx) => {
                return (
                    <Post
                        key={idx}
                        title={item.data.title}
                        url={item.data.url}
                    />
                );
            })}
        </WidgetFrame>
    )
}

export default RedditSubFeedWidget;

