import React, { useState, useCallback, useEffect } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import WidgetInputParams from './WidgetInputParams';
import { fetchServiceAvailable } from '../../utils/fetchAPI';

import './AddWidgetModal.css';

const requestOptions = {
    method: "Post",
    credentials: "include",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Credentials": true
    },
}

const FormItems = [
    {
        id: 'weather',
        label: 'Weather',
        widgets: [
            {
                id: 'actual_weather',
                label: 'Weather of a city',
                optionLabel: 'Enter a city name'
            },
        ],
    },
    {
        id: 'spotify',
        label: 'Spotify',
        widgets: [
            {
                id: 'top_tracks',
                label: 'Tracks',
                optionLabel: 'Choose a time range'
            },
            {
                id: 'top_artists',
                label: 'Artists',
                optionLabel: 'Choose a time range'
            },
        ],
    },
    {
        id: 'youtube',
        label: 'Youtube',
        widgets: [
            {
                id: 'video_comment',
                label: 'Comment',
                optionLabel: 'Choose a video',
            },
            {
                id: 'channel_stat',
                label: 'View',
                optionLabel: 'Choose a video',
            },
        ],
    },
    {
        id: 'reddit',
        label: 'Reddit',
        widgets: [
            {
                id: 'subreddit_post',
                label: 'Post of a sub',
                optionLabel: 'Choose a sub reddit'
            },
        ],
    },

    {
        id: 'stock',
        label: 'Stock',
        widgets: [
            {
                id: 'stock_value',
                label: 'Follow a Stock',
                optionLabel: 'Enter a Stock code'
            },
        ],
    },
];


//value in seconds

const RefreshRateList = [
    {value: 30, label: '30 Seconds'},
    {value: 60, label: '1 Minute'},
    {value: 300, label: '5 Minutes'},
    {value: 600, label: '10 Minutes'},
    {value: 1800, label: '30 Minutes'},
    {value: 3600, label: '1 Hour'},
];

function AddWidgetModal ({handler, open, setWidgetAdded}) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [serviceSelect, setService] = useState(FormItems[0]);
    const [widgetSelect, setWidget] = useState(serviceSelect.widgets[0]);
    const [timeRefresh, setTimeRefresh] = useState(3600);
    const [textParams, setTextParams] = useState("");
    const [serviceList, setServiceList] = useState([]);

    const [availableService, setAvailableService] = useState({});

    const getAvailableService = useCallback(() => {
        fetchServiceAvailable()
            .then(response => {
                setAvailableService(response);
            })
            .catch(error => {
                console.log("Error to get available service: ", error.toString());
            })
    }, []);

    useEffect(() => {
        setServiceList([]);
        getAvailableService();
        FormItems.forEach(service => {
            if (service.id === "spotify") {
                if (availableService.spotifyAvailable) {
                    setServiceList(actualValue => [...actualValue, service]);
                }
            } else if (service.id === "reddit") {
                if (availableService.redditAvailable) {
                    setServiceList(actualValue => [...actualValue, service]);
                }
            } else {
                setServiceList(actualValue => [...actualValue, service]);
            }
        })
        
    }, [getAvailableService, availableService]);

    const handleValidation = () => {
        if (textParams.length) {
            addWidgetReq();
            handler(false);
            setTextParams("");
            setWidgetAdded();
        }
    };

    const handleClose = () => {
        handler(false);
    }

    const addWidgetReq = () => {
        const config = {...requestOptions, body: JSON.stringify({
            service: serviceSelect.id,
            type: widgetSelect.id,
            params: {
                params1: textParams
            },
            refresh: timeRefresh
        })}
        fetch("http://localhost:8080/widgets/", config)
            .then(response => {
                response.text().then(function (text) {
                    console.log(text);
                });
                console.log(response.statusText)
                console.log(response.status);
                console.log(response.text);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleChangeService = (event) => {
        const newID = event.target.value;
        const newSelected = serviceList.find(elt => elt.id === newID);
        setService(newSelected);
        setWidget(newSelected.widgets[0]);
        setTextParams("");
    };

    const handleChangeWidget = (event) => {
        const newID = event.target.value;
        const newSelected = serviceSelect.widgets.find(elt => elt.id === newID);
        setWidget(newSelected);
    };

    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
            maxWidth="md"
            fullWidth={true}
        >
            <DialogTitle id="responsive-dialog-title">
                {"Which widget do you want to add ? "}
            </DialogTitle>

            <DialogContent sx={{height: "60vh"}}>
                <div className="content-container">
                    <div className="form-side-container">
                        <FormControl variant="standard">
                            <InputLabel id="widget-select-label">Service</InputLabel>
                            <Select
                                labelId="widget-select-label"
                                value={serviceSelect.id}
                                onChange={handleChangeService}
                                label="Service"
                            >
                                {serviceList.map((service) => {
                                    return <MenuItem key={service.id} value={service.id}>{service.label}</MenuItem>;
                                })}
                            </Select>
                        </FormControl>

                        <FormControl variant="standard">
                            <InputLabel id="refresh-rate-select-label">Refresh Rate</InputLabel>
                            <Select
                                labelId="refresh-rate-select-label"
                                id="refresh-select"
                                value={timeRefresh}
                                onChange={(event) => setTimeRefresh(event.target.value)}
                                label="Service"
                            >
                                {RefreshRateList.map((rate) => {
                                    return <MenuItem key={rate.value} value={rate.value}>{rate.label}</MenuItem>;
                                })}
                            </Select>
                        </FormControl>
                    </div>
                    <div className="form-side-container">
                        <FormControl variant="standard">
                            <InputLabel id="widget-select-label">Widget</InputLabel>
                            <Select
                                labelId="widget-select-label"
                                id="widget-select"
                                value={widgetSelect.id}
                                onChange={handleChangeWidget}
                                label="Widget"
                            >
                                {serviceSelect.widgets.map((widget) => {
                                    return <MenuItem key={widget.id} value={widget.id}>{widget.label}</MenuItem>;
                                })}
                            </Select>
                        </FormControl>

                        <FormControl>
                            <WidgetInputParams serviceId={serviceSelect.id} widgetSelect={widgetSelect} setParams={setTextParams}/>
                        </FormControl>
                    </div>
                </div>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose}>
              Cancel
                </Button>
                <Button onClick={handleValidation} autoFocus>
              Add
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddWidgetModal;

