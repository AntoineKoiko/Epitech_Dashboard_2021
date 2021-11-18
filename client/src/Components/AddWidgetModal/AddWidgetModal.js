import React, { useState } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';

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

    const ChangeWidget = (event) => {
        const newID = event.target.value;
        const newSelected = serviceSelect.widgets.find(elt => elt.id === newID);
        setWidget(newSelected);
    };

    const handleClose = () => {
      handler(false);
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
            <DialogContentText>
              Choose a service:
            </DialogContentText>

            <FormControl component="fieldset">
              <FormLabel component="legend">Service</FormLabel>
              <RadioGroup
                row aria-label="service"
                name="row-radio-buttons-group"
                onChange={ChangeService}
                value={serviceSelect.id}
            >
                {FormItems.map((service) => {
                    return (
                        <FormControlLabel value={service.id} control={<Radio />} label={service.label} />
                    )
                })}

              </RadioGroup>

              <FormLabel component="legend">Widget</FormLabel>
              <RadioGroup
              row aria-label="widget"
              name="row-radio-buttons-group"
              onChange={ChangeWidget}
              value={widgetSelect.id}
              >
                {serviceSelect.widgets.map((widget) => {
                    return (
                        <FormControlLabel value={widget.id} control={<Radio />} label={widget.label} />
                    )
                })}

              </RadioGroup>
              <TextField id="opt" label={widgetSelect.optionLabel} variant="standard" />
            </FormControl>


          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Disagree
            </Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}

export default AddWidgetModal;

