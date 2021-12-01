import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { CardContent } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardActions from '@mui/material/CardActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Collapse } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

function LoadingFrame() {
    return (<Box sx={{ display: 'flex', justifyContent: "center"}}>
        <CircularProgress />
    </Box>);
}

const requestOptions = {
    method: "DELETE",
    credentials: "include",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Credentials": true
    },
}

function WidgetFrame({title, subtitle, expand, children, expandContent, loadingCircle, widgetId}) {
    const [expanded, setExpanded] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleDelete = () => {
        fetch(`http://localhost:8080/widgets?id=${widgetId}`, requestOptions)
            .then(response => {
                response.text().then(function (text) {
                    console.log(text);
                });
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <Card
            variant="outlined"
            sx={{width: 400, borderRadius: 4}}
        >
            <CardHeader
                action={
                    <IconButton aria-label="settings" onClick={handleClick}>
                        <MoreVertIcon />
                    </IconButton>
                }
                title={title}
                subheader={subtitle}
            />
            <CardContent>{loadingCircle ? <LoadingFrame/> : children}</CardContent>
            {expand
                ? (<><CardActions disableSpacing>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions><Collapse in={expanded} timeout="auto" unmountOnExit>
                    {expandContent}
                </Collapse></>
                )
                : []}

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem >Update</MenuItem>
                <MenuItem >Lock position</MenuItem>
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>

        </Card>
    )
}

export default WidgetFrame;