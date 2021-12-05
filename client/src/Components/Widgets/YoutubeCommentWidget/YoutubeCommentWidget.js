import React from 'react';
import WidgetFrame from '../WidgetFrame';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import moment from 'moment';

import './YoutubeCommentWidget.css';

function getCommentHeader (pseudo, like, published) {
    return (
        <div className="comment-header">
            <div>
                <p>{pseudo}</p>
                <div>
                    <p style={{marginRight: '5px'}}>{like}</p>
                    <ThumbUpAltIcon/>
                </div>
            </div>
            <p>{moment(published).format("DD/MM/yy hh:mm")}</p>
        </div>
    );
}

function Comment ({pseudo, avatar, comment, like, published}) {
    const header = getCommentHeader(pseudo, like, published);
    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt={pseudo} src={avatar} />
            </ListItemAvatar>
            <ListItemText
                primary={header}
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
        </ListItem>
    )
}

function YoutubeCommentWidget ({videoTitle, commentList, widgetData, setRefreshWidget}) {
    return (
        <WidgetFrame title="Youtube" subtitle="Comments of the video" widgetId={widgetData._id} loadingCircle={commentList.loading} setRefreshWidget={setRefreshWidget}>
            <h4>{videoTitle ? videoTitle : "undefined video name"}</h4>
            <List sx={{ width: '100%'}}>
                {!commentList.loading && commentList.map((item) => {
                    return (
                        <Comment
                            key={item.id}
                            pseudo={item.snippet.topLevelComment.snippet.authorDisplayName}
                            avatar={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                            comment={item.snippet.topLevelComment.snippet.textDisplay}
                            like={item.snippet.topLevelComment.snippet.likeCount}
                            published={item.snippet.topLevelComment.snippet.publishedAt}
                        />
                    );
                })}
            </List>
        </WidgetFrame>
    )
}



export default YoutubeCommentWidget;