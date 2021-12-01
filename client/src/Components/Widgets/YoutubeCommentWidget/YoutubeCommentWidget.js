import React from 'react';
import WidgetFrame from '../WidgetFrame';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function Comment ({pseudo, avatar, comment}) {
    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt={pseudo} src={avatar} />
            </ListItemAvatar>
            <ListItemText
                primary={pseudo}
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            <div dangerouslySetInnerHTML={{ __html: comment}} />
                        </Typography>
                    </React.Fragment>
                }
            />
            <Divider variant="inset" component="li" />
        </ListItem>
    )
}

function YoutubeCommentWidget ({videoTitle, commentList, widgetData}) {
    return (
        <WidgetFrame title="Youtube" widgetId={'TODO REPLACE IT'}>
            <h4>Comment of the video: {videoTitle}</h4>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

                {commentList.map((item, idx) => {
                    return (
                        <Comment
                            key={item.id}
                            pseudo={item.snippet.topLevelComment.snippet.authorDisplayName}
                            avatar={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                            comment={item.snippet.topLevelComment.snippet.textDisplay}
                        />
                    );
                })}
            </List>
        </WidgetFrame>
    )
}



export default YoutubeCommentWidget;