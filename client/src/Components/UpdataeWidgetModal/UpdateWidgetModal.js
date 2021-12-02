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

import {fetchWidgetById} from '../../utils/fetchAPI';
import WidgetFrame from '../Widgets/WidgetFrame';

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

    const handleClose = () => {
        handler(false);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">
                {"Which widget do you want to add ? "}
            </DialogTitle>

            <DialogContent sx={{width: '100%', height: '100%',  m: 1, minWidth: 120 }}>
                <FormControl>
                    <InputLabel id="refresh-input-label">Refresh rate</InputLabel>
                    <Select
                        labelId="refresh-select-label"
                        id="refresh-select"
                        value={widgetData.refresh}
                        onChange={(event) => setWidgetData(prevState =>
                            ({...prevState, ['refresh']: event.target.value}
                            ))}
                        label="Service"
                    >
                        {RefreshRateList.map((rate) => {
                            return <MenuItem key={rate.value} value={rate.value}>{rate.label}</MenuItem>;
                        })}
                    </Select>
                </FormControl>

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

