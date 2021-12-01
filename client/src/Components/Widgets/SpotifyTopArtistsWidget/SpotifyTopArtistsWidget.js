import React from 'react';
import WidgetFrame from '../WidgetFrame';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function TopArtistItem({artists, avatar, ranking}) {
    return (
        <ListItem alignItems="center" >
            <Typography sx={{marginRight: 5, fontWeight: "bold"}}>
                {ranking}
            </Typography>
            <ListItemIcon>
                <Avatar alt={artists} src={avatar} />
            </ListItemIcon>
            <ListItemText sx={{textAlign: "center"}}
                primary={artists}
            />
        </ListItem>
    )
}

function SpotifyTopArtistsWidget ({data, timeRange, widgetData}) {
    const timeRangeTextArray = [
        {value: "short_term", label: "(last 4 weeks)"},
        {value: "medium_term", label: "(last 6 monts)"},
        {value: "long_term", label: "(all time)"}
    ]
    const timeRangeText = timeRangeTextArray.find(element => element.value === timeRange);

    return (
        <WidgetFrame title="Spotify" subtitle="User top artists" widgetId={widgetData._id}>
            <Typography align="left" sx={{fontWeight: "bold"}}>Top artists {timeRangeText.label}</Typography>
            <List sx={{ width: '100%'}}>
                {data.map((item, idx) => {
                    let img = item.images[0] ? item.images[0].url : item.name;
                    return (
                        <TopArtistItem
                            key={idx}
                            artists={item.name}
                            avatar={img}
                            ranking={idx + 1}
                        />
                    );
                })}
            </List>
        </WidgetFrame>
    )
}

export default SpotifyTopArtistsWidget;

