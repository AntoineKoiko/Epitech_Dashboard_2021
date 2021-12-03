import React from 'react';
import WidgetFrame from '../WidgetFrame';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function TopTrackItem({title, artists, albumCover, ranking}) {
    return (
        <ListItem alignItems="center" >
            <Typography sx={{fontWeight: "bold", padding: "0% 5% 0% 0%"}} >
                {ranking}
            </Typography>
            <ListItemIcon>
                <Avatar alt={title} src={albumCover} />
            </ListItemIcon>
            <ListItemText sx={{textAlign: "center"}}
                primary={title}
                secondary={artists}
            />
        </ListItem>
    )
}

function SpotifyTopTrackWidget ({data, timeRange, widgetData}) {
    const timeRangeTextArray = [
        {value: "short_term", label: "(last 4 weeks)"},
        {value: "medium_term", label: "(last 6 monts)"},
        {value: "long_term", label: "(all time)"}
    ]
    const timeRangeText = timeRangeTextArray.find(element => element.value === timeRange);

    return (
        <WidgetFrame title="Spotify" subtitle="User top tracks" widgetId={widgetData._id}>
            <h4 align="left" sx={{fontWeight: "bold"}}>Top tracks {timeRangeText.label}</h4>
            <List sx={{ width: '100%'}}>
                {data.map((item, idx) => {
                    const arrayArtists = item.artists.map(artist => {
                        return artist.name;
                    });
                    const artists = arrayArtists.join(' - ');
                    let img = item.album.images[0] ? item.album.images[0].url : item.name;
                    return (
                        <TopTrackItem
                            key={idx}
                            title={item.name}
                            artists={artists}
                            albumCover={img}
                            ranking={idx + 1}
                        />
                    );
                })}
            </List>
        </WidgetFrame>
    )
}

export default SpotifyTopTrackWidget;

