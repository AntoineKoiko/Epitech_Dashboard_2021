import React, {useState, useEffect} from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import WidgetInputParams from '../AddWidgetModal/WidgetInputParams';

import {fetchWidgetById} from '../../utils/fetchAPI';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import './UpdateWidgetModal.css';

//value in seconds

const RefreshRateList = [
    {value: 30, label: '30 Seconds'},
    {value: 60, label: '1 Minute'},
    {value: 300, label: '5 Minutes'},
    {value: 600, label: '10 Minutes'},
    {value: 1800, label: '30 Minutes'},
    {value: 3600, label: '1 Hour'},
];

function UpdateWidgetModal ({handler, open, widgetId}) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [widgetData, setWidgetData] = useState({});

    useEffect(() => {
        fetchWidgetById(widgetId)
            .then(response => {
                console.log('Widget data-foo ', response);
                setWidgetData(response);
            })
            .catch(error => {
                console.log('fetch error getting widget of id', widgetId, error);
            })
    },
    []);

    const setParam = (value) => {
        setWidgetData(prevState => ({
            ...prevState,
            'params': {'params1': value},
        }))
    };

    const handleClose = () => {
        handler(false);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
            maxWidth="md"
            fullWidth={true}
            fullScreen={fullScreen}
        >
            <DialogTitle id="responsive-dialog-title">
                {"Which widget do you want to add ? "}
            </DialogTitle>

            <DialogContent sx={{m: 1, minWidth: 120}}>
                <div className="form-container">
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="refresh-input-label">Refresh rate</InputLabel>
                        <Select
                            labelId="refresh-select-label"
                            id="refresh-select"
                            value={widgetData.refresh}
                            onChange={(event) => setWidgetData(prevState =>
                                ({...prevState, 'refresh': event.target.value}
                                ))}
                            label="Service"
                        >
                            {RefreshRateList.map((rate) => {
                                return <MenuItem key={rate.value} value={rate.value}>{rate.label}</MenuItem>;
                            })}
                        </Select>
                    </FormControl>

                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <WidgetInputParams
                            serviceId={widgetData.service}
                            widgetSelect={widgetData.type}
                            setParams={setParam}
                            value={widgetData.params !== undefined ? widgetData.params.params1 : ""}/>

                    </FormControl>
                </div>
            </DialogContent>

            <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    Cancel
                </Button>
                <Button onClick={handleClose} autoFocus>
              Update
                </Button>
            </DialogActions>

        </Dialog>
    )
}

export default UpdateWidgetModal;

