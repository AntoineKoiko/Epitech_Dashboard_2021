import React, { useState } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const FormItems = [
    {
        id: 'youtube',
        label: 'Youtube',
        widgets: [
            {
                id: 'comment',
                label: 'Comment',
                optionLabel: 'Choose a video',
            },
            {
                id: 'view',
                label: 'View',
                optionLabel: 'Choose a video',
            },
        ],
    },

    {
        id: 'spotify',
        label: 'Spotify',
        widgets: [
            {
                id: 'tracks',
                label: 'Tracks',
                optionLabel: 'Choose artist / time'
            },
        ],
    },

    {
        id: 'reddit',
        label: 'Reddit',
        widgets: [
            {
                id: 'subPost',
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
                id: 'firmmStock',
                label: 'Follow a Stock',
                optionLabel: 'Enter a Stock code'
            },
        ],
    },

    {
        id: 'weather',
        label: 'Weather',
        widgets: [
            {
                id: 'cityWeather',
                label: 'Weather of a city',
                optionLabel: 'Enter a city name'
            },
        ],
    },
];


function AddWidgetModal ({handler, open}) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [serviceSelect, setService] = useState(FormItems[0]);
    const [widgetSelect, setWidget] = useState(serviceSelect.widgets[0]);

    const ChangeService = (event) => {
        const newID = event.target.value;
        const newSelected = FormItems.find(elt => elt.id === newID);
        setService(newSelected);
        setWidget(newSelected.widgets[0]);
    };


    const handleClose = () => {
      handler(false);
    };


    const handleChangeService = (event) => {
        const newID = event.target.value;
        const newSelected = FormItems.find(elt => elt.id === newID);
        setService(newSelected);
        setWidget(newSelected.widgets[0]);
    };

    const handleChangeWidget = (event) => {
      const newID = event.target.value;
      const newSelected = serviceSelect.widgets.find(elt => elt.id === newID);
      setWidget(newSelected);
    };

    return (
      <div>

        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Which widget do you want to add ? "}
          </DialogTitle>
          <DialogContent>
            <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="service-input-label">Service</InputLabel>
        <Select
          labelId="Service-select-label"
          id="service-select"
          value={serviceSelect.id}
          onChange={handleChangeService}
          label="Service"
        >
          {FormItems.map((service) => {
            return <MenuItem key={service.id} value={service.id}>{service.label}</MenuItem>;
          })}
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="widget-input-label">Widget</InputLabel>
        <Select
          labelId="widget-select-label"
          id="widget-select"
          value={widgetSelect.id}
          onChange={handleChangeWidget}
        >
            {serviceSelect.widgets.map((widget) => {
              return <MenuItem key={widget.id} value={widget.id}>{widget.label}</MenuItem>;
            })}

        </Select>
      <TextField id="opt" label={widgetSelect.optionLabel} variant="standard" />

      </FormControl>
    </div>

          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleClose} autoFocus>
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}

export default AddWidgetModal;

