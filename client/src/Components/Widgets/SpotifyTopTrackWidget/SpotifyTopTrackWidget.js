import React from 'react';
import WidgetFrame from '../WidgetFrame';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


function TopElt ({title, img, comment}) {
    return (
        <ListItem alignItems="center" >
            <Typography sx={{marginRight: 5}}>
                {comment}
            </Typography>
            <ListItemIcon>
                <Avatar alt={title} src={img} />
            </ListItemIcon>
            <ListItemText
                primary={title}

            />
            <Divider variant="inset" component="li" />
        </ListItem>
    )
}

function SpotifyTopTrackWidget ({mode, data}) {
    const subTitle = `Top ${mode}`;
    return (
        <WidgetFrame title="Spotify" subtitle={subTitle}>
            <p>I'm SpotifyTopWidget</p>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

                {data.map((item, idx) => {
                    let img = 'unknown';
                    if (mode === 'tracks') {
                        img = item.album.images[0] ? item.album.images[0].url : item.name
                    }   else {
                        img = item.images[0] ? item.images[0].url : item.name;
                    }
                    console.log('spotify item ', item.name)
                    return (
                        <TopElt
                            key={idx}
                            title={item.name}
                            avatar={img}
                            comment={idx + 1}
                        />
                    );
                })}
            </List>
        </WidgetFrame>
    )
}

export default SpotifyTopTrackWidget;

