import React from 'react';
import WidgetFrame from '../WidgetFrame';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


function Post({title}) {
    return (
        <ListItem alignItems="center" >
            <ListItemText
                primary={title}

            />
            <Divider variant="inset" component="li" />
        </ListItem>
    )
}



function RedditSubFeedWidget ({subName, data, widgetData}) {
    return (
        <WidgetFrame title="Reddit" subtitle="sub of the Charcuterie club" widgetId={'TODO REPLACE IT'}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {data.map((item, idx) => {
                    return (
                        <Post
                            key={idx}
                            title={item.data.title}
                        />
                    );
                })}
            </List>
        </WidgetFrame>
    )
}

export default RedditSubFeedWidget;

