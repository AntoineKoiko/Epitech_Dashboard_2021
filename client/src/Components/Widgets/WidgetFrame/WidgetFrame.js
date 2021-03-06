import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { CardContent } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import UpdateWidgetModal from '../../UpdataeWidgetModal/UpdateWidgetModal';

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

function WidgetFrame({title, subtitle, children, loadingCircle, widgetId, setRefreshWidget}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [openUpdate, setOpenUpdate] = useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = () => {
        fetch(`http://localhost:8080/widgets?id=${widgetId}`, requestOptions)
            .then(response => {
                response.text().then(function (text) {
                    console.log(text);
                });
                setRefreshWidget();
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <Card
            className="widget-container"
            variant="outlined"
            sx={{width: 400, borderRadius: 4, borderColor: '#003459'}}
        >
            <CardHeader
                action={
                    <IconButton aria-label="settings" onClick={handleClick}>
                        <MoreVertIcon />
                    </IconButton>
                }
                title={title}
                subheader={subtitle}
                sx={{padding: "2% 4% 0% 4%"}}
            />
            <CardContent>{loadingCircle ? <LoadingFrame/> : children}</CardContent>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem className="black" onClick={() => setOpenUpdate(true)}>Update</MenuItem>
                <MenuItem className="black" onClick={handleDelete}>Delete</MenuItem>
            </Menu>

            <UpdateWidgetModal open={openUpdate} handler={setOpenUpdate} widgetId={widgetId} setRefreshWidget={setRefreshWidget}/>
        </Card>
    )
}

export default WidgetFrame;