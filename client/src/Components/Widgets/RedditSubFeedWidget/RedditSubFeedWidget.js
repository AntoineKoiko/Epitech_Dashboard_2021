import React from 'react';
import WidgetFrame from '../WidgetFrame';
import RedditPost from '../../RedditPost';
import { Divider } from '@material-ui/core';

function RedditSubFeedWidget () {
    return (
        <WidgetFrame title="Reddit" subtitle="sub of the Charcuterie club">
            <RedditPost author="Toto42" title="Sponso par la filiere francaise laitiere"/>
            <Divider/>
            <RedditPost author="Toto42" title="Sponso par la filiere francaise laitiere"/>
            <Divider/>
            <RedditPost author="Toto42" title="Sponso par la filiere francaise laitiere"/>
        </WidgetFrame>
    )
}

export default RedditSubFeedWidget;

